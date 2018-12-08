var express = require('express');
var router = express.Router();
var mysqls = require('../mysql/mysqls');
var sqls = require('../mysql/sql');
/* GET users listing. */
router.get('/', function(req, res, next) {
    mysqls(sqls.SELECT_ALL, function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err })
        } else {
            res.json({ code: 1, result })
        }
    })
});
//添加用户
router.post('/api/add', function(req, res, next) {
    var pames = req.body;
    var id = pames.id,
        name = pames.name,
        phone = pames.phone,
        address = pames.address;
    if (!name) {
        res.json({ code: 0, msg: '请输入用户名' })
    } else {
        mysqls(sqls.SELECT_ADDRESS, [name], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                if (result.length) {
                    res.json({ code: 1, msg: '此用户已经存在' })
                } else {
                    adduser()
                }
            }
        })
    }


    function adduser() {
        mysqls(sqls.SELECT_ADDUSER, [name, phone, address], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, msg: '添加成功' })
            }
        })
    }
});

//删除用户
router.get('/api/delete', function(req, res, next) {
    var id = req.query.id;
    if (id) {
        mysqls(sqls.SELECT_DELETE, [id], function(error, results) {
            if (error) {
                res.json({ code: 0, msg: error })
            } else {
                res.json({ code: 1, msg: '删除成功' })
            }
        })
    } else {
        res.json({ code: 2, msg: '缺少参数' })
    }

})

//修改
router.post('/api/updata', function(req, res, next) {
    var pames = req.body;
    var name = pames.name,
        phone = pames.phone,
        address = pames.address,
        id = pames.id;
    if (id) {
        if (!name) {
            res.json({ code: 0, msg: '用户名不能为空' })
        } else {
            mysqls(sqls.SELECT_UPDATA, [name, phone, address, id], function(err, result) {
                if (err) {
                    res.json({ code: 0, msg: err })
                } else {
                    res.json({ code: 1, msg: '修改成功' })
                }
            })
        }
    } else {
        res.json({ code: 0, msg: '缺少参数' })
    }
})

// 查看详情
router.post('/api/detail', function(req, res, next) {
    var id = req.body.id;
    if (id) {
        mysqls(sqls.SELECT_ADDRESS, [id], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err })
            } else {
                res.json({ code: 1, msg: result })
            }
        })
    } else {
        res.json({ code: 2, msg: '缺少参数' })
    }
})


module.exports = router;