const User = require('../models/userModel');
const asyncHandler = require('../middlewares/asyncHandler');

// 1. GET /users
const getUsers = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.role) filter.role = req.query.role;
  if (req.query.age) filter.age = Number(req.query.age);

  const users = await User.find(filter);
  res.status(200).json(users);
});

// 2. GET /users/:id
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(user);
});

// 3. POST /users
const createUser = asyncHandler(async (req, res) => {
  const { name, email, age, role } = req.body;
  if (!name || !email || !age || !role) {
    res.status(400);
    throw new Error('All fields (name, email, age, role) are required');
  }
  const newUser = await User.create({ name, email, age, role });
  res.status(201).json(newUser);
});

// 4. PUT /users/:id
const updateUser = asyncHandler(async (req, res) => {
  const { name, email, age, role } = req.body;
  if (!name || !email || !age || !role) {
    res.status(400);
    throw new Error('PUT requires all fields: name, email, age, role');
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, age, role },
    { new: true, runValidators: true }
  );
  if (!updatedUser) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(updatedUser);
});

// 5. PATCH /users/:id
const patchUser = asyncHandler(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, runValidators: true }
  );
  if (!updatedUser) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json(updatedUser);
});

// 6. DELETE /users/:id
const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deletedUser) {
    res.status(404);
    throw new Error('User not found');
  }
  res.status(200).json({
    message: 'User deleted successfully',
    user: deletedUser
  });
});

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
};