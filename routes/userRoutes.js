const express = require('express');
const router = express.Router();
const validateObjectId = require('../middlewares/validateObjectId');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} = require('../controllers/userController');

// Routes without URL parameters
router.get('/', getUsers);
router.post('/', createUser);

// Routes with :id parameter (validate ObjectId first)
router.get('/:id', validateObjectId, getUserById);
router.put('/:id', validateObjectId, updateUser);
router.patch('/:id', validateObjectId, patchUser);
router.delete('/:id', validateObjectId, deleteUser);

module.exports = router;