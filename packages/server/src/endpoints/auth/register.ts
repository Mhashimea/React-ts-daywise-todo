import User from "../../model/users"
import { errorResponse, successResponse } from "../../util/response"
import bcrypt from "bcrypt"
import Organization from "../../model/organization"
import sendEmail from "../../util/nodemailer/sendEmail"

export default async (req, res) => {
  const { name, email, address, password, phone, avatar } = req.body
  try {
    const user = await User.findOne({ where: { email: email } })
    if (user) errorResponse(res, "User already exist")

    const hashPwd = await bcrypt.hash(password, 10)

    const organization = await Organization.create({
      email: email,
      active: true,
      name,
      address,
      phone,
      avatar,
    })

    const payload = {
      fullName: name,
      email,
      password: hashPwd,
      phone,
      avatar,
      active: true,
      isAdmin: true,
      organizationId: organization.id,
    }
    const response = await User.create(payload)
    const emailResponse = await sendEmail("hashimea@outlook.com")
    successResponse(res, response)
  } catch (error) {
    errorResponse(res, error.message)
  }
}
