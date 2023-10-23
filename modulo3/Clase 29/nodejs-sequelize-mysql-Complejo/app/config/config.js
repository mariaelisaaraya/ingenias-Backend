module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,

  /** DATABASE */
  db: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || 'root',
    DB_NAME: process.env.DB_NAME || "clase29",
    DB_PORT: process.env.DB_PORT || "3306",
    dialect:  process.env.DB_DIALECT || "mysql",

  },

  /** AUTH KEY */
  auth: {
    secret: "our-secret-key"
  }
};
