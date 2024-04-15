import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

export const config: sql.config = {
  server: process.env.MSSQL_SERVER || "",
  database: process.env.MSSQL_DB || "",
  authentication: {
    type: "default",
    options: {
      userName: process.env.MSSQL_USER || "",
      password: process.env.MSSQL_PASSWORD || "",
    },
  },
  options: {
    encrypt: false,
    enableArithAbort: true,
    cryptoCredentialsDetails: {
      minVersion: "TLSv1",
    },
    trustServerCertificate: true,
  },
};
