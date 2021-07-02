var con = require('../../server')
exports.get_all_user = async (req, res, next) => {
  const post = { LastName: 'nguyen', FirstName: 'truong', Age: '20' }
  let sql = "INSERT INTO Persons SET ?"
  con.query(sql, post, function (err, result) {
    if (err) return res.json({ err: err });
    return res.json(result)
  })
  // try {
  //   const data = await User.find();
  //   res.json(data);
  // } catch (error) {
  //   console.error(error.message);
  //   next();
  // }
};
exports.read_a_user = function (req, res) {
  // let checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
  // if (!checkForHexRegExp.test(req.params.id)) {
  //   return res.status(404).send("page not found");
  // }
  // User.findById(req.params.id, function (err, data) {
  //   if (err) throw err;
  //   res.json(data);
  // });
};

exports.create_a_user = function (req, res) {
  // var new_user = new User(req.body);
  // new_user.save(function (err, user) {
  //   if (err) res.send(err);
  //   res.json(user);
  // });
};

exports.update_a_user = function (req, res) {
  // User.findByIdAndUpdate(
  //   { _id: req.params.id },
  //   req.body,
  //   { new: true },
  //   function (err, data) {
  //     if (err) throw err;
  //     res.json(data);
  //   }
  // );
};
exports.delete_a_user = function (req, res) {
  // User.findByIdAndDelete(req.params.id, function (err) {
  //   if (err) throw err;
  //   res.send("deleted");
  // });
};

//crud
// app.get('/insertTable', (req, res) => {

// })
// app.get('/getTable', (req, res) => {
//   let sql = "SELECT * FROM Persons LIMIT 2"
//   con.query(sql, function (err, result) {
//     if (err) return res.json({ err: err });
//     return res.json(result)
//   })
// })
// app.get('/getTable/:id', (req, res) => {
//   let sql = `SELECT * FROM Persons WHERE ID = ${req.params.id}`;
//   con.query(sql, (err, result) => {
//     if (err) return res.status(400).json(err);
//     return res.json(result)
//   })
// })
// app.get('/updateTable/:id', (req, res) => {
//   let sql = `UPDATE Persons SET ? WHERE ID = ${req.params.id}`;
//   const post = { LastName: 'c', FirstName: 'hieu', Age: '23' }
//   con.query(sql, post, (err, result) => {
//     if (err) return res.status(400).json(err);
//     return res.json(result)
//   })
// })
// app.get('/updateTableAge/:id', (req, res) => {
//   let sql = `UPDATE Persons SET ? WHERE ID = ${req.params.id}`;
//   const post = { Age: '23' }
//   con.query(sql, post, (err, result) => {
//     if (err) return res.status(400).json(err);
//     return res.json(result)
//   })
// })
// app.get('/deleteTable/:id', (req, res) => {
//   let sql = `DELETE FROM Persons WHERE ID in (1,2,3,4,5)`;
//   con.query(sql, (err, result) => {
//     if (err) return res.status(400).json(err);
//     return res.json(result)
//   })
// })
// app.get('/searchTable', (req, res) => {
//   let sql = "SELECT * FROM Persons WHERE FirstName = 'truong' AND Age = 23";
//   con.query(sql, (err, result) => {
//     if (err) return res.status(400).json(err);
//     return res.json(result)
//   })
// })