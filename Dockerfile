FROM node:20.3.0-alpine

RUN apk update

RUN apk add --no-cache libc6-compat openssl \
    make gcc g++ python3 pkgconfig pixman-dev cairo-dev pango-dev libjpeg-turbo-dev giflib-dev

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["node", "app.js"]
