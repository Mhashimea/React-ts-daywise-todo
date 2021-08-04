import Todos from "../../model/todos"
import ChildTodo from "../../model/childTodo"
import getUser from "../../util/common/getUser"
import { successResponse } from "../../util/response"
import uploadToS3 from '../../util/aws/uploadToS3'
import Attatchments from '../../model/attatchments'

export default async (req, res) => {
  let { name, priority, label, assignedTo, attatchments, description, todoId, id, projectId, status } = req.body
  let payload = {
    name,
    priority,
    label,
    assignedTo,
    attatchments,
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

    const { organization } = await getUser(req)
    payload.organizationId = organization

    // Upload to S3
    if (req.file) {
      s3Locations = await uploadToS3(req.file)
    }

    // Child todo actions
    if (payload.todoId) {
      if (payload.todoId && payload.id) {
        const response = await ChildTodo.update(payload, {
          where: { id: payload.id },
        })
        return successResponse(res, response)
      }
      else {
        const response = await ChildTodo.create({ name, todoId, active: true, status, })
        return successResponse(res, response)
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
      await Attatchments.create({
        todoId: response.id,
        location: s3Locations.Location,
        active: true
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
    include: [{ all: true, nested: true }],
  })
}
