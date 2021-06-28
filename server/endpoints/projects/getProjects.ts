import Projects from '../../model/projects';
import getUser from '../../util/common/getUser';
import { errorResponse, successResponse } from '../../util/response';

export default async (req, res) => {
  try {
    const userDetails = await getUser(req);
    let where: any = {};
    where.organizationId = userDetails.organization;

    const response = await Projects.findAll({
      where,
      include: [{ all: true, nested: true }],
    });
    return successResponse(res, response);

  } catch (e) {
    return errorResponse(res, e.message);
  }
};