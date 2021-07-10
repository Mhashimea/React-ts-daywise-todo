import Todos from "../../model/todos"
import getUser from "../../util/common/getUser"
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  try {
    const { id, date } = req.body
    const userDetails = await getUser(req)
    let where: any = {}
    where.organizationId = userDetails.organization
    where.assignedTo = userDetails.user

    //filter
    if (id) where.id = id
    if (date) where.date = date

    const response = await Todos.findAll({
      where,
      include: [{ all: true, nested: true }],
    })
    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}
