const router = require('express').Router();
const{
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users get all and post to
router.route('/users').get(getUsers).post(createUser);

// /api/users/:userId get one, update one and delete one
router.route('/users/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;