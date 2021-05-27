import User from '../../model/users';
import { errorResponse, successResponse } from '../../util/response';
import bcrypt from 'bcrypt';

export default async (req, res) => {
  const { fullName, email, password, phone, avatar } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) errorResponse(res, 'User already exist');

    const hashPwd = await bcrypt.hash(password, 10);

    const payload = {
      fullName,
      email,
      password: hashPwd,
      phone,
      avatar,
      active: true,
    };
    const response = await User.create(payload);
    successResponse(res, response);

  } catch (error) {
    errorResponse(res, error.message);
  }
};
