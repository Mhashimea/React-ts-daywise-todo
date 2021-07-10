import User from "../../model/users"
import { errorResponse, successResponse } from "../../util/response"
import jwt from "jsonwebtoken"
import { JWTSECERET } from "../../util/constants"
import bcrypt from "bcrypt"

export default async (req, res) => {
  let { email, password } = req.body
  try {
    const user: any = await User.findOne({ where: { email: email } })
    if (!user) errorResponse(res, "Email does not exist")

    const token = jwt.sign({ email, password }, JWTSECERET, {
      expiresIn: "24h",
    })

    const compare = await bcrypt.compare(password, user.dataValues.password)
    if (!compare) errorResponse(res, "Password Does not match")

    successResponse(res, { token: token, message: "Login Success" })
  } catch (e) {
    errorResponse(res, e.message)
  }
}
