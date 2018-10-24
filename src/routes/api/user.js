// const UserModel = require('../../db/models/user');
const path = require('path');
const sourcePath = path.resolve(process.cwd(), 'src');
const UserModel = require(sourcePath +  '/db/models/user');
class User {
    constructor() {

    }

    /**
     * 
     * @param {Object} req 
     * @param {Object} res 
     */
    async list(req, res) {
        /*UserModel.findAll().then(users => {
            return res.status(200).json({success: true, data: users});
        });*/    
        
        var users = await UserModel.findAll();
        return res.status(200).json({success: true, data: users});
    }

    /**
     * Method for User Get All REST API
     * @param {Object} req 
     * @param {Object} res 
     */
    get(req, res) {
        UserModel.findByPk(Number(req.params.id)).then(users => {
            return res.status(200).json({success: true, data: users});
        });
    }

    /**
     * 
     * @param {Object} req 
     * @param {Object} res 
     */
    add(req, res) {
        UserModel.create({
            username: req.body.username,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            status: Number(req.body.status)
        }).then((success) => {
            return res.status(201).json({success: true, data: {id: success.dataValues.id}});
        });
        
    }


    update(req, res) {
        return res.status(200).json({success: true});
    }


    delete(req, res) {
        return res.status(200).json({success: true});
    }
}

module.exports = new User();