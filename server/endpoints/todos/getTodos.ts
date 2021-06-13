import Todos from '../../model/todos';
import getUser from '../../util/common/getUser';
import { errorResponse, successResponse } from '../../util/response';

export default async (req, res) => {
  try {
    const { id } = req.body
    const userDetails = await getUser(req)
    let where: any = {}
    where.organizationId = userDetails.organization

    //filter
    if (id) where.id = id

    const response = await Todos.findAll({ where, include: [{ all: true, nested: true }] });
    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
};
