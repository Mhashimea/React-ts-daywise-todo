import Todos from '../../model/todos';
import User from '../../model/users';
import { errorResponse, successResponse } from '../../util/response'

export default async (req, res) => {
  try {
    const response = await Todos.findAll({ include: [User] });
    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
};
