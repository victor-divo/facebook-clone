module.exports = {
    apps: [
      {
        name: 'poc-patra-logistic',
        script: 'npm start',
        instances: 1,
        autorestart: true,
        exp_backoff_restart_delay: 100,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  }