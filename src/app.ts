import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sql from "mssql";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { config } from "../config/config";
import { postSignup } from "./controllers/signup";

dotenv.config();

(async function connectDB() {
  try {
    await sql.connect(config);
    console.log("데이터베이스에 연결되었습니다.");
  } catch (err) {
    console.error("데이터베이스 연결에 실패했습니다.", err);
  }
})();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.options("*", cors());

// 메인 페이지 라우트
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// 회원가입 페이지 라우트
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

app.post("/signup", postSignup);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
