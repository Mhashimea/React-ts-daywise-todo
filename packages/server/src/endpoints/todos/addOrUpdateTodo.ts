import Todos from "../../model/todos"
import childTodo from "../../model/childTodo"
import getUser from "../../util/common/getUser"
import { successResponse } from "../../util/response"
import uploadToS3 from '../../util/aws/uploadToS3'
import attatchments from '../../model/attatchments'
import comments from '../../model/comments'
import User from '../../model/users'
import addOrUpdateActivites from '../activities/addOrUpdateActivites'

export default async (req, res) => {
  let { name, priority, label, assignedTo, description, todoId, id, projectId, status, actionType } = req.body
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

    const { organization, user, fullName } = await getUser(req)
    payload.organizationId = organization

    // Upload to S3
    if (req.file) {
      s3Locations = await uploadToS3(req.file)
    }

    // Child todo actions
    if (payload.todoId) {
      if (payload.todoId && payload.id) {
        await childTodo.update(payload, {
          where: { id: payload.id },
        })
        const data: any = await GetTodo(payload.todoId)
        if (actionType)
          await addOrUpdateActivites(data.dataValues, actionType, user, organization, fullName)
        return successResponse(res, data.dataValues)
      }
      else {
        await childTodo.create({ name, todoId, active: true, status, })
        const data: any = await GetTodo(payload.todoId)
        if (actionType)
          await addOrUpdateActivites(data.dataValues, actionType, user, organization, fullName)
        return successResponse(res, data.dataValues)
      }
    }

    // update query
    if (payload.id) {
      await Todos.update(payload, {
        where: { id: payload.id },
      })

      const data: any = await GetTodo(payload.id)
      if (actionType)
        await addOrUpdateActivites(data.dataValues, actionType, user, organization, fullName)

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
    if (actionType)
      await addOrUpdateActivites(data.dataValues, actionType, user, organization, fullName)
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
