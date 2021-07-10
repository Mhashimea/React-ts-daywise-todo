import User from "../../model/users"
import getUser from "../../util/common/getUser"
import { errorResponse, successResponse } from "../../util/response"
import bcrypt from "bcrypt"
import AssignedUser from "../../model/assignedMember"

export default async (req, res) => {
  try {
    const { payload } = req.body
    const currentUser = await getUser(req)

    const email = await User.findOne({
      where: { email: payload.email },
    })
    if (email) return errorResponse(res, "Email Already Exists")

    const hashPwd = await bcrypt.hash("123456", 10)
    payload.organizationId = currentUser.organization
    payload.active = true
    payload.isAdmin = false
    payload.password = hashPwd

    const response = await User.create(payload)

    await AssignedUser.create({
      organizationId: currentUser.organization,
      userId: response.id,
      projectId: payload.projectId ? payload.projectId : null,
      assignedBy: currentUser.user,
    })

    return successResponse(res, response)
  } catch (e) {
    errorResponse(res, e.message)
  }
}
