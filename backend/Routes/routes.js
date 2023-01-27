import { Router } from "express";

import * as usercontroller  from "../Controller/userController.js"
const router  = Router();
router.get("/signin", usercontroller.signinController);
router.post("/signup", usercontroller.signupController);

export default router;
