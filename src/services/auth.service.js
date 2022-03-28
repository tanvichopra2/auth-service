const {users} = require('../../models');

const makeUser = async (newUser) => {
    await users.create(newUser);
}

module.exports = {
    makeUser
}