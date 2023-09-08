const router = require('express').Router();
const{
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// /api/users get all and post to
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId get one, update one and delete one
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;