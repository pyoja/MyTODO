import { Request, Response } from "express";
import sql from "mssql";
import { config } from "../../config/config";

export const Signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const transaction = new sql.Transaction(await sql.connect(config));

  try {
    await transaction.begin();

    const request = new sql.Request(transaction);
    await request.query(
      `INSERT INTO tbl_user (email, password, name) VALUES ('${email}', '${password}', '${name}')`
    );

    await transaction.commit();
    res.json({ success: true, message: "회원가입 성공!" });
  } catch (err) {
    await transaction.rollback();
    console.error(err);
    res.status(500).json({ success: false, message: "서버 오류 발생" });
  }
};
