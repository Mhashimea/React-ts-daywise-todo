import Todos from "../../model/todos"
import childTodo from "../../model/childTodo"
import getUser from "../../util/common/getUser"
import { successResponse } from "../../util/response"
import uploadToS3 from '../../util/aws/uploadToS3'
import attatchments from '../../model/attatchments'
import comments from '../../model/comments'
import User from '../../model/users'

export default async (req, res) => {
  let { name, priority, label, assignedTo, description, todoId, id, projectId, status } = req.body
  let payload = {
    name,
    priority,
    label,
    assignedTo,
    attatchments: req.body.attatchments,
    description,
    organizationId: null,
    active: true,
    todoId,
    id,
    projectId,
    status
  }
  try {
    let s3Locations = null

    const { organization, user } = await getUser(req)
    payload.organizationId = organization

    // Upload to S3
    if (req.file) {
      s3Locations = await uploadToS3(req.file)
    }

    // Child todo actions
    if (payload.todoId) {
      if (payload.todoId && payload.id) {
        const response = await childTodo.update(payload, {
          where: { id: payload.id },
        })
        const data: any = await GetTodo(payload.todoId)
        return successResponse(res, data.dataValues)
      }
      else {
        await childTodo.create({ name, todoId, active: true, status, })
        const data: any = await GetTodo(payload.todoId)
        return successResponse(res, data.dataValues)
      }
    }

    // update query
    if (payload.id) {
      await Todos.update(payload, {
        where: { id: payload.id },
      })
      const data: any = await GetTodo(payload.id)
      return successResponse(res, data)
    }

    const response = await Todos.create(payload)

    if (s3Locations) {
      await attatchments.create({
        todoId: response.id,
        location: s3Locations.Location,
        active: true,
        uploaded: user
      })
    }

    const data: any = await GetTodo(response.id)
    return successResponse(res, data.dataValues)
  } catch (e) {
    console.log(e)
  }
}

async function GetTodo(id) {
  return Todos.findOne({
    where: { id: id },
    include: [
      { model: User },
      { model: childTodo, include: ["user"] },
      { model: attatchments, include: ["user"] },
      { model: comments, include: ["uploaded"] }
    ],
  })
}
