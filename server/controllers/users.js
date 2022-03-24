import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import conn from "../db/index.js";
import secretKey from "../config/jwt.js";

// 회원가입
export const postUsers = async function (req, res, next) {
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
};

// 로그인
export const postUsersToken = async (req, res) => {
  // 1. DB에 입력한 user_name과 동일한 data가 있는지 체크
  // 2-1. 없으면 return false
  // 2-2. 있으면 비밀번호 검증
  // 3. 1에서 가져온 salt와 클라이언트가 보내준 user_name으로
  //        hashedPW만든다.(회원가입 했을 때와 동일한 조건)
  // 4. 3에서 만든 hashedPW와 DB에 있는 password랑 같은지 체크
  // 5-1. 다르면 로그인 실패
  // 5-2. 같으면 로그인 성공, 토큰 생성해서 전달

  const { user_name, password } = req.body;

  const query = `
    SELECT id, salt, password FROM user WHERE user_name = '${user_name}';
  `;
  const [rows] = await conn.query(query);

  // user_name 체크
  if (rows.length === 0) {
    return res
      .status(401)
      .send({ success: false, message: "일치하는 유저가 없습니다." });
  }

  // password 체크
  const user = rows[0];
  const { salt } = user;
  console.log(salt);
  const hashedPW = await bcrypt.hash(password, salt);
  if (user.password !== hashedPW) {
    return res
      .status(401)
      .send({ success: false, message: "비밀번호가 틀렸습니다." });
  }

  // 토큰 생성

  const payload = { userId: user.id };
  const option = { expiresIn: "1s" };
  const token = jwt.sign(payload, secretKey, option);
  res.send({ success: true, token });
};
