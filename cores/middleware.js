const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const flash = require('express-flash')
const lusca = require('lusca')
const moment = require('moment')
const compression = require('compression')
const { db } = require('../config/database')
const { secret } = require('../config/config')
const config = require('../config/config')
const { passport } = require('../config/passport')
const MySQLStore = require('express-mysql-session')(session)
const PgSession = require('connect-pg-simple')(session);
const pg = require('pg');

const middleware = (express, app) => {
    app.use(cors())
    app.use(compression())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    const {
        host,
        username,
        password,
        database,
        port,
    } = db

    const pool = new pg.Pool({
        user: username,
        host,
        database,
        password,
        port,
    })

    const sessionStore = config.useDb === 'mysql' ? new MySQLStore({
        host,
        port,
        user: username,
        password,
        database,
        schema: {
            columnNames: {
                session_id: 'sid',
                data: 'session'
            }
        }
    }) : new PgSession({
        pool,
        tableName: 'user_sessions',
    })

    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 3,
        },
        store: sessionStore,
    }))

    sessionStore.onReady().then(() => {
        console.log('MySQLStore ready');
    }).catch(error => {
        console.error(error);
        return process.exit(1)
    })

    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash())

    app.use((req, res, next) => {
        if (req.path.startsWith('/api')) {
            next();
        } else if (req.headers['content-type']) {
            if (req.headers['content-type'].split(';')[0] === 'multipart/form-data') {
                next();
            } else {
                lusca.csrf()(req, res, next)
            }
        } else {
            lusca.csrf()(req, res, next)
        }
    })
    app.use(lusca.xframe('SAMEORIGIN'))
    app.use(lusca.xssProtection(true))

    app.use((req, res, next) => {
        let path = req.path;
        const secondSlashIndex = path.indexOf('/', path.indexOf('/') + 1);

        if (secondSlashIndex != -1) {
            path = path.substring(0, secondSlashIndex);
        }

        res.locals.currentPath = path
        res.locals.user = req.user
        res.locals.moment = moment
        next()
    })

    app.locals.title = config.title
    app.locals.logo = config.logo

    app.use(morgan('[:date[clf]] :remote-addr - ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms'))
}

module.exports = middleware