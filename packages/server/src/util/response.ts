export const errorResponse = (res, message) => {
  return res.status(422).json({ success: false, message: message })
}

export const successResponse = (res, data) => {
  return res.status(200).json({ success: true, data: data })
}
