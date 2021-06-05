import Todos from '../../model/todos';
import getUser from '../../util/common/getUser';

export default async (req, res) => {
  let { priority, label, assignedTo, name, description, status } = req.body;
  try {
    const userDetils = await getUser(req)
    let payload = {
      name,
      priority,
      label,
      assignedTo,
      active: true,
      description,
      status,
      organizationId: userDetils.organization
    };
    const response = await Todos.create(payload);
    return response
  } catch (e) {
    console.log(e);
  }
};
