const services = require('../services/auth.service');

const makeUser = async (req,res) => {
    console.log("here")
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(newUser)
    try {
        const savedUser = await services.makeUser(newUser);
        res.status(200).json({"message" : "User Added Successfully"});
    
    } catch (err) {
        console.log(err);
        res.status(500).json({"message" : "err.message"});
    }
}

module.exports = {
    makeUser
}