import Todos from '../../model/todos';
import User from '../../model/users';
import getUser from '../../util/common/getUser';
import { errorResponse, successResponse } from '../../util/response'

export default async (req, res) => {
  try {
    const userDetails = await getUser(req)
    let where: any = {}
    where.organizationId = userDetails.organization

    //filter

    const response = await Todos.findAll({ where, include: [User] });
    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
};
