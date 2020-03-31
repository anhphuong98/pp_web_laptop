const db = require('../models');

const indexAdmin = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? limit * page : 0;
    db.order.findAndCountAll({
        offset : offset,
        limit : limit,
        include : [{
            model : db.user
        }]
    }).then(function(data) {
        data.page = page ? page : 0;
        data.pageSize = limit;
        res.status(200).json({
            success : true,
            data : data
        })
    });
}

const indexStatusAdmin = (req, res) => {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);

    const limit = pageSize ? pageSize : 20;
    const offset = page ? limit * page : 0;
    db.order.findAndCountAll({
        offset : offset,
        limit : limit,
        where : {
            status : req.query.status
        }
    }).then(function(data) {
        data.page = page ? page : 0;
        data.pageSize = limit;
        res.status(200).json({
            success : true,
            data : data
        })
    });
}

const updateStatusAdmin = (req, res) => {
    db.order.findOne({
        where : {
            id : req.params.id
        }
    }).then(function(order) {
        if(order) {
            order.update({
                status : req.body.status
            });
            res.json({
                success : true,
                data : order
            });
        } else {
            res.json({
                success : false,
                message : 'Invalid order'
            })
        }
    });
}

const showAdmin = (req, res) => {
    db.order.findOne({
        where : {
            id : req.params.id
        },
        include : [{
            model : db.order_detail,
            include : {
                model : db.laptop
            }
        }]
    }).then(function(order) {
        if(order) {
            res.json({
                success : true,
                data: order
            })
        } else {
            res.json({
                success : false,
                message : 'Invalid order'
            })
        }
    })
}
const orderController = {}

orderController.indexAdmin = indexAdmin;
orderController.indexStatusAdmin = indexStatusAdmin;
orderController.updateStatusAdmin = updateStatusAdmin;
orderController.showAdmin = showAdmin;

module.exports = orderController;