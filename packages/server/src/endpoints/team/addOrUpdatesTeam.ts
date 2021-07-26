import User from "../../model/users"
import getUser from "../../util/common/getUser"
import { errorResponse, successResponse } from "../../util/response"
import bcrypt from "bcrypt"
import AssignedUser from "../../model/assignedMember"

export default async (req, res) => {
  try {
    const { payload } = req.body
    const { user, organization } = await getUser(req)

    const email = await User.findOne({
      where: { email: payload.email, organizationId: organization },
    })
    if (email) return errorResponse(res, "Email Already Exists")

    const hashPwd = await bcrypt.hash("123456", 10)
    payload.organizationId = organization
    payload.active = true
    payload.isAdmin = false
    payload.password = hashPwd

    const response = await User.create(payload)

    if (payload.projectId && payload.projectId.length > 0) {
      payload.projectId.map(proj => {
        AssignedUser.create({
          organizationId: organization,
          userId: response.id,
          projectId: proj,
          assignedBy: user,
        })
      })
    }



    return successResponse(res, response)
  } catch (e) {
    errorResponse(res, e.message)
  }
}
