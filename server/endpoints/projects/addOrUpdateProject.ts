import AssignedUser from '../../model/assignedMember';
import Projects from '../../model/projects';
import getUser from '../../util/common/getUser';
import { errorResponse, successResponse } from '../../util/response';

export default async (req, res) => {
  try {
    const userDetails = await getUser(req);
    const { payload } = req.body;
    payload.createdBy = userDetails.user
    payload.organizationId = userDetails.organization

    if (payload.id) {
      const response = await Projects.update(payload, {
        where: { id: payload.id },
      });
      successResponse(res, { data: response, message: 'Updated Successfully' });
    }

    const response = await Projects.create(payload);
    if (payload.members && payload.members.length) {
      payload.members.forEach((member) => {
        AssignedUser.create({
          projectId: response.id,
          userId: member,
          assignedBy: userDetails.user,
          organizationId: userDetails.organization
        });
      });
    }

    successResponse(res, response);
  } catch (e) {
    errorResponse(res, e.message);
  }
};
