function createPost() {
  let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  let postTemplate = _.template(document.getElementById('post-template').innerHTML);
  let commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);

  let title = document.getElementById("postTitle").value;
  let author = document.getElementById("postAuthor").value;
  let body = document.getElementById("postBody").value;

  document.getElementsByTagName('main')[0].innerHTML += pageTemplate();

  let postHTML = postTemplate({ 'title': title, 'body': body, 'author': author });
  let commentsHTML = commentsTemplate();
  let postDiv = document.getElementById('post');

	postDiv.innerHTML += postHTML;
	postDiv.getElementsByTagName('footer')[0].innerHTML += commentsHTML;
}

function postComment() {
	let name = document.getElementById('commenterName').value;
	let text = document.getElementById('commenterText').value;

	let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);
  let commentHTML = commentTemplate({'comment': text, 'commenter': name})
  let commentsDiv = document.getElementById('comments');

  commentsDiv.innerHTML += commentHTML
}
