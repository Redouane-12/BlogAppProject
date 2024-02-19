function errorH(err, req, res, next) {
  console.log("Error :", err.message);
  res.send(err.message || "Server error");
}
module.exports = errorH;
