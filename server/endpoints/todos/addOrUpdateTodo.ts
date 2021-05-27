import Todos from '../../model/todos';

export default async (req, res) => {
  let { priority, label, assignedTo, name, description, status } = req.body;
  try {
    let payload = {
      name,
      priority,
      label,
      assignedTo,
      active: true,
      description,
      status
    };
    const response = await Todos.create(payload);
    return response
  } catch (e) {
    console.log(e);
  }
};
