import jwt from "jsonwebtoken"
import Organization from "../../model/organiZation"
import User from "../../model/users"
import { JWTSECERET } from "../constants"
import { errorResponse } from "../response"

export default async req => {
  let authorization = req.headers.authorization
  if (!authorization) errorResponse({}, "Token is empty")
  let decodedData = await jwt.verify(authorization, JWTSECERET)

  if (decodedData.email) {
    let user: any = await User.findOne({
      where: { email: decodedData.email },
      include: [{ all: true, nested: true }],
    })
    return {
      user: user.dataValues.id,
      organization: user.dataValues.organization.dataValues.id,
    }
  }
}
