const blogs = require("../src/blogs.json");
const fs = require("fs");
function timeNow() {
  return new Date();
}
function getAllPosts() {
  let output = "<h2>Blog Posts</h2>";
  blogs.forEach((post) => {
    output += `<p>${post.id} - <strong>Post Title :</strong> ${post.title} <strong>Post Author</strong> ${post.author}</</p>\n`;
  });
  return output;
}

function createP(newPost) {
  newPost.id = blogs.length + 1;
  newPost.created_at = timeNow();

  blogs.push(newPost);

  try {
    fs.writeFileSync("./src/blogs.json", JSON.stringify(blogs, null, 4));
    console.log("New Post Created");
  } catch (err) {
    console.log("Error Creating New Post:" + err);
  }
}

function updateP(newblogData, id) {
  let blogindex = blogs.findIndex((p) => p.id == id);
  if (blogindex > -1) {
    newblogData.created_at = blogs[blogindex].created_at;
    newblogData.updated_at = timeNow();
    newblogData.id = parseInt(id);
    blogs[blogindex] = newblogData;
    fs.writeFileSync("./src/blogs.json", JSON.stringify(blogs, null, 3));
    console.log("updated succesfully");
    return true;
  } else {
    console.log(`No post founded with id ${id}`);
    return false;
  }
}
function deleteP(id) {
  let blogindex = blogs.findIndex((p) => p.id == id);
  if (blogindex > -1) {
    blogs.splice(blogindex, 1);
    blogs.forEach((post, indx) => {
      blogs[indx].id = indx + 1;
    });

    fs.writeFileSync("./src/blogs.json", JSON.stringify(blogs, null, 3));
    console.log("deleted succesfully postId : ", id);
    return true;
  } else {
    console.log("postId :", id, " not found");

    return false;
  }
}

module.exports = { getAllPosts, createP, updateP, deleteP };
