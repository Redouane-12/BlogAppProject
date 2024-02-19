const {
  getAllPosts,
  createP,
  updateP,
  deleteP,
} = require("../models/post");

function show(req, res) {
  res.send(getAllPosts());
}
function add(req, res) {
  let post = req.body;
  if (post.title && post.content && post.author) {
    createP(req.body);
    res.send("New post added ");
  } else {
    res.send(
      "Not all informations added (title , content and author) ",
    );
  }
}
function update(req, res) {
  if (updateP(req.body, req.params.id)) {
    res.send("Post updated succesfully");
  } else {
    res.send("Post not exist");
  }
}

function remove(req, res) {
  if (deleteP(req.params.id)) {
    res.send("Post deleted succesfully");
  } else {
    res.send("Post not exist");
  }
}

module.exports = { show, add, update, remove };
