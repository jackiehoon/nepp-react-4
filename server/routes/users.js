import express from "express";
import bcrypt from "bcrypt";
import conn from "../db/index.js";
var router = express.Router();

/* GET users listing. */
router.post("/", async function (req, res, next) {
  const { user_name, password, name } = req.body;

  const query = `SELECT id FROM user WHERE user_name='${user_name}';`;
  const [rows] = await conn.query(query);

  if (rows.length) {
    return res.status(409).send({
      success: false,
      message: "중복되는 아이디가 존재합니다.",
    });
  }

  const salt = await bcrypt.genSalt();
  const hashedPW = await bcrypt.hash(password, salt);

  const query2 = `
    INSERT INTO user(user_name, password, salt, name)
    VALUES('${user_name}', '${hashedPW}', '${salt}', '${name}')
  `;

  await conn.query(query2);

  res.send({ success: true });
});

export default router;
