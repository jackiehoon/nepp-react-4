import express from "express";

import {
  postUsers,
  postUsersToken,
  getUsersMyInfo,
  patchUsersMyProfileImage,
} from "../controllers/users.js";
var router = express.Router();

/* GET users listing. */
router.post("/", postUsers);
router.post("/token", postUsersToken);
router.get("/my", getUsersMyInfo);
router.patch("/my/profile-image", patchUsersMyProfileImage);

export default router;
