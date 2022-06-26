// Adding likes
const addLikeButton = document.querySelector('#add-like');

async function addLike(event) {
  event.preventDefault();  
  const post_id = event.target.getAttribute('data');
    const response = await fetch('/api/post/like', {
      method: 'post',
      body: {
        post_id
      },
      headers: { 'Content-Type': 'application/json' }
    });
  if (response.ok) {
      console.log('success!');
    } else {
      alert(response.statusText);
    }
};

addLikeButton.addEventListener('submit', addLike);


// Viewing Comments
const viewCommentButton = document.querySelector('#viewComment');

async function viewComments(event) {
  event.preventDefault();  
  console.log(event.target);
    const response = await fetch(`/${event.target.getAttribute('data')}/comments`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    });

  if (response.ok) {
      console.log('success!');
    } else {
      alert(response.statusText);
    }
};

viewCommentButton.addEventListener('click', viewComments);

// Edit a Post
const editButton = document.querySelector('#edit');

async function editPost(event) {
  event.preventDefault();  
  //load a new page with just this post and an option to edit it. this page should have a new submit button that either brings the user back to their profile or back to the feed page when the post is submitted. It should have routes that allow a user to update information
};

editButton.addEventListener('click', editPost);