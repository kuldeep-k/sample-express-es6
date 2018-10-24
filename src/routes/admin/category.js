class Category {
    constructor() {

    }

    list(req, res) {
        return res.status(200).json({success: true, data: []});
    }


    get(req, res) {
        return res.status(200).json({success: true, data: {}});
    }

    add(req, res) {
        return res.status(201).json({success: true, data: {id: 111}});
    }


    update(req, res) {
        return res.status(200).json({success: true});
    }


    delete(req, res) {
        return res.status(200).json({success: true});
    }
}

module.exports = new Category();