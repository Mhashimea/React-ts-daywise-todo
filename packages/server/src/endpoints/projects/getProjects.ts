import AssignedUser from '../../model/assignedMember'
import Projects from "../../model/projects"
import getUser from "../../util/common/getUser"
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  try {
    const { user, isAdmin, organization } = await getUser(req)
    const { status } = req.body
    let where: any = {}
    where.organizationId = organization
    let assignedProjects: any = null

    if (status) where.status = status

    if (!isAdmin) {
      assignedProjects = await AssignedUser.findAll({ where: { userId: user } })
      let projectIds = assignedProjects.map(a => Number(a.projectId))
      console.log(projectIds)
      where.id = projectIds
    }

    const response = await Projects.findAll({
      where,
      include: [{ all: true, nested: true }],
    })
    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}
