function createPost() {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  let title = document.getElementById("postTitle").value;
  let author = document.getElementById("postAuthor").value;
  let body = document.getElementById("postBody").value;
}
