import Designation from '../../model/designation'
import getUser from "../../util/common/getUser"
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  try {
    const { payload } = req.body
    const { user, organization } = await getUser(req)

    payload.organizationId = organization
    payload.createdBy = user

    if (payload.id) {
      const response = await Designation.update(payload, {
        where: { id: payload.id },
      })
      successResponse(res, { data: response, message: "Updated Successfully" })
    }
    const response = await Designation.create(payload)

    return successResponse(res, response)
  } catch (e) {
    errorResponse(res, e.message)
  }
}
