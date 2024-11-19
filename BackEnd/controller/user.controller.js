const User = require('../model/user.model.js');
const bcrypt = require('bcrypt');

module.exports.signup = async (req, res) => {
  try {
    console.log(req.body); // Log the received data
    const { firstname, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({ message: "User already exists",user:{
        id: user._id,
        firstname: user.firstname,
        email: user.email
      } });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      firstname,
      email,
      password: hashedPassword,
    });

    await createUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Error in creating user" });
  }
};


module.exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(400).json({message: "Invalid credentials"});
    }else{
      alert("Login successful");
      res.status(200).json({
        message: "Login successful",
        user:{
          id: user._id,
          firstname: user.firstname,
          email: user.email
        }
      })
    }
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Error in login" });
  }
}