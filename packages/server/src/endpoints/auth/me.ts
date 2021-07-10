import jwt from "jsonwebtoken"
import User from "../../model/users"
import { JWTSECERET } from "../../util/constants"
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  if (req.headers && req.headers.authorization) {
    let authorization = req.headers.authorization
    let decodedData = jwt.verify(authorization, JWTSECERET)
    if (decodedData.email) {
      let username = decodedData.email
      let user = await User.findOne({ where: { email: username } })
      successResponse(res, user)
    } else {
      errorResponse(res, "Unauthorized")
    }
  }
}
