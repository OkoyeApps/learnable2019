var { addUser } = require('../services/userServices')
module.exports = function userContoller() {
    this.addUser = (req, res) => {
        addUser(req.body).then(result => {
            res.send({
                success: true,
                message: "user created", data: null
            })
        }).catch(error => {
            res.send({
                success: false,
                message: "could not not user", data: error
            })
        })
    }
}