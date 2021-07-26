import Designation from '../../model/designation'
import getUser from "../../util/common/getUser"
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  try {
    const userDetails = await getUser(req)
    let { active } = req.body
    let where: any = {}

    where.organizationId = userDetails.organization
    if (active !== null) where.active = active
    const response = await Designation.findAll({
      where,
      include: [{ all: true, nested: true }],
    })

    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}
