import Todos from "../../model/todos"
import getUser from "../../util/common/getUser"
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  try {
    const { id, projectId, priority, status } = req.body
    const { organization } = await getUser(req)
    let where: any = {}
    where.organizationId = organization

    //filter
    if (id) where.id = id
    if (projectId) where.projectId = projectId
    if (priority && priority !== "All") where.priority = priority
    if (status && status !== "All") where.status = status

    const response = await Todos.findAll({
      where,
      include: [{ all: true, nested: true }],
    })
    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}
