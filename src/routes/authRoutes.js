import { Router } from "express";

const authRouter = Router()

authRouter.post("sign-in")
authRouter.post("sign-up")
authRouter.post("sign-out")

export default authRouter;