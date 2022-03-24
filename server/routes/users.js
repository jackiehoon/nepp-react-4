import express from "express";

import { postUsers, postUsersToken } from "../controllers/users.js";
var router = express.Router();

/* GET users listing. */
router.post("/", postUsers);
router.post("/token", postUsersToken);

export default router;
