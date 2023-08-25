const User = require('../model/User');

exports.registerUser = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (user) return res.status(400).send('User already exists');

    const newUser = await User.create(req.body);
    newUser.save();
    return res.status(200).send('Registered Successfully');
  } catch (error) {
    console.log(error);
  }
};

exports.loginUser = (req, res) => {
  return res.status(200).send('Login succesful');
};

exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  return res.status(200).send('logout successful');
};

