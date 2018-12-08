module.exports = {
    //查找所有
    'SELECT_ALL': 'select * from listuser',
    //查看详情
    'SELECT_ADDRESS': 'select * from listuser where id=?',
    //添加用户
    'SELECT_ADDUSER': 'insert into listuser (name,phone,address) values(?,?,?)',
    //修改用户
    'SELECT_UPDATA': 'update listuser set name=?,phone=?,address=? where id=?',
    //删除用户
    'SELECT_DELETE': 'delete from listuser where id=?'
}