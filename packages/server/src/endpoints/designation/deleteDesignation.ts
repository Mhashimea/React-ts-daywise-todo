import Designation from '../../model/designation'
import { errorResponse, successResponse } from "../../util/response"

export default async (req, res) => {
  try {
    const response = await Designation.destroy({
      where: { id: req.body.id }
    })

    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}
