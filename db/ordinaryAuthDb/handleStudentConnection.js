const connection = require("../database");

const addStudent = (arr, callback) => {
  let sql =
    "insert into student (username ,secretinfo, password, email) values (?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err,null);
    callback(null, data);
  });
};



const getUserInfo = (username, callback) => {
  let sql = `select password from student where username = ?`;
  connection.query(sql, username,(err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

module.exports = { addStudent, getUserInfo };
