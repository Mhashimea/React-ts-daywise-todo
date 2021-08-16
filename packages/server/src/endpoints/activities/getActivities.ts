import Activities from '../../model/activities'
import getUser from '../../util/common/getUser'
import { errorResponse, successResponse } from '../../util/response'

export default async (req, res) => {
  try {
    const userDetails = await getUser(req)
    let where: any = {}
    where.organizationId = userDetails.organization
    if (req.body.projectId) where.projectId = req.body.projectId

    const response = await Activities.findAll({
      where,
      include: [{ all: true }],
    })

    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}