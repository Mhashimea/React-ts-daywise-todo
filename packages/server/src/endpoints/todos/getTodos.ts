import attachments from '../../model/attatchments'
import childTodo from '../../model/childTodo'
import comments from '../../model/comments'
import Todos from "../../model/todos"
import User from '../../model/users'
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
      include: [
        { model: User },
        { model: childTodo, include: ["user"] },
        { model: attachments, include: ["user"] },
        { model: comments, include: ["uploaded"] }
      ],
    })
    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}
