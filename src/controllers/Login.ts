import { Request, Response } from "express";
import sql from "mssql";
import { config } from "../../config/config";

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const transaction = new sql.Transaction(await sql.connect(config));

  try {
    await transaction.begin();

    const request = new sql.Request(transaction);
    const result = await request
      .input("Email", sql.VarChar, email)
      .input("Password", sql.VarChar, password)
      .query(
        "SELECT * FROM tbl_user WHERE email = @Email AND password = @Password"
      );

    if (result.recordset.length > 0) {
      await transaction.commit();
      res.json({ success: true, message: "로그인 성공!" });
    } else {
      await transaction.rollback();
      res.status(401).json({
        success: false,
        message: "이메일 또는 비밀번호가 틀렸습니다.",
      });
    }
  } catch (err) {
    await transaction.rollback();
    console.error(err);
    res.status(500).json({ success: false, message: "서버 오류 발생" });
  }
};
