import Activities from '../../model/activities'

export default async (data, type, currentUser, organizationId, fullName) => {
  try {
    let payload = {
      text: '',
      organizationId,
      mentionedUser: null,
      projectId: data.projectId,
      createdBy: currentUser
    }
    const { text, mentionedUser } = generateActivityText(data, type, fullName)
    payload.text = text
    payload.mentionedUser = mentionedUser

    const response = await Activities.create(payload)
    return response
  } catch (e) {
    return e.message
  }
}

function generateActivityText(data, type, fullName) {
  let text: string = ""
  let mentionedUser = null
  if (type === "CREATE") text = `${fullName} Created a Task`
  if (type === "UPDATE") text = `${fullName} Updated ${data.name}`
  if (type === "SUB_TASK_CREATE") text = `${fullName} Created a Sub Task`
  if (type === "MENTION") {
    text = `${fullName} Assigned the task to ${data.user.fullName}`
    mentionedUser = data.assignedTo
  }
  if (type === "STATUS") text = `${fullName} updated the task to ${data.status}`
  if (type === "ATTATCHMENT") text = `${fullName} attatched the document`
  if (type === "PRIORITY") text = `${fullName} updated the priority to ${data.priority}`
  if (type === "COMMENT") text = `${fullName} commented on the task ${data.name}`

  return { text, mentionedUser }
}