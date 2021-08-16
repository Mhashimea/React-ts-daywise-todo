import Attatchments from '../../model/attatchments'
import Comments from '../../model/comments'
import UploadToS3 from '../../util/aws/uploadToS3'
import getUser from '../../util/common/getUser'
import { errorResponse, successResponse } from '../../util/response'

export default async (req, res) => {
  const { todoId, text } = req.body
  try {
    let payload = {
      todoId,
      text
    }
    let s3Locations = null
    const { user } = await getUser(req)

    // Upload to S3
    if (req.file) {
      s3Locations = await UploadToS3(req.file)
    }

    const response = await Comments.create({ ...payload, uploadedBy: user, active: true })
    if (s3Locations) await Attatchments.create({
      todoId: payload.todoId,
      uploaded: user,
      commentId: response.id,
      location: s3Locations.Location,
      active: true
    })

    return successResponse(res, response)
  } catch (e) {
    return errorResponse(res, e.message)
  }
}