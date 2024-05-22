export const registerUser = (req, res) => {
  res.status(200).json('the user has been registered');
}

export const loginUser = (req, res) => {
  res.status(200).json("the user has logged in successfully");
};

export const getUsers = (req, res) => {
  res.status(200).json("these are the users");
};

export const getUser = (req, res) => {
  res.status(200).json("this is the user");
};

export const changeAvatar = (req, res) => {
  res.status(200).json("avatar has been changed");
};

export const editUser = (req, res) => {
  res.status(200).json("the user has been updated");
};