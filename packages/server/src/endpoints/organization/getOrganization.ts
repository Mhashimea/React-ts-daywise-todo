import Organization from '../../model/organization'
import getUser from "../../util/common/getUser"
import Projects from '../../model/projects'
import User from '../../model/users'
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  try {
    const { organization } = await getUser(req)
    let where: any = {}
    where.id = organization

    const response: any = await Organization.findOne({
      where
    })

    const projectCount = await Projects.count({
      where: { organizationId: organization }
    })

    const memberCount = await User.count({
      where: { organizationId: organization }
    })

    const responsePayload = {
      data: response.dataValues,
      projectCount,
      memberCount
    }
    return successResponse(res, responsePayload)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}
