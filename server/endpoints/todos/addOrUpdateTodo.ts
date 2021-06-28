import Todos from '../../model/todos';
import ChildTodo from '../../model/childTodo';
import getUser from '../../util/common/getUser';
import { successResponse } from '../../util/response';

export default async (req, res) => {
  let { payload } = req.body;
  try {
    const userDetils = await getUser(req)
    payload.organizationId = userDetils.organization
    payload.active = true

    //Child todo actions
    if (payload.todoId) {
      const response = await ChildTodo.update(payload, { where: { id: payload.todoId } })
      return successResponse(res, response)
    }

    // update query
    if (payload.id) {
      const response = await Todos.update(payload, { where: { id: payload.id } })
      return successResponse(res, response)
    }

    const response = await Todos.create(payload);
    const data: any = await GetTodo(response.id)
    return successResponse(res, data.dataValues)
  } catch (e) {
    console.log(e);
  }
};

async function GetTodo(id) {
  return Todos.findOne({
    where: { id: id },
    include: [{ all: true, nested: true }]
  })
}