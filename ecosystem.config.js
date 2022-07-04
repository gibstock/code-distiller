module.exports = {
	apps : [{
    name   : "codedistiller",
    script : "/var/www/codedistiller.com/html/index.js",
    env_production: {
        NODE_ENV: "production"
    },
    env_development: {
        NODE_ENV: "development"
    }
  }]
}
