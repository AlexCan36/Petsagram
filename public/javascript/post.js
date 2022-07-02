// Adding likes
const addLikeButtons = document.getElementsByClassName('add-like');

async function addLike(event) {
  event.preventDefault();

  console.log("entered add like function successfully");

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

for (let i = 0; i < addLikeButtons.length; i++) {
  addLikeButtons[i].addEventListener('click', addLike);
}




// Viewing Comments
const viewCommentButtons = document.getElementsByClassName('view-comment-form');

async function viewComments(event) {

  event.preventDefault();
  console.log("enters view comment function successfully!")
  const response = await fetch(`/${event.target.getAttribute('data')}/comments`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  });
  console.log(response)
  if (response.ok) {
    console.log('success!');
    // document.location.replace(`/${event.target.getAttribute('data')}/comments`)
  } else {
    alert(response.statusText);
  }
};

for (let i = 0; i < viewCommentButtons.length; i++) {
  viewCommentButtons[i].addEventListener('submit', viewComments);
}



// Edit a Post
const editButton = document.querySelector('#edit');

async function editPost(event) {
  event.preventDefault();
  let newCaption = prompt('What would you like the new caption to say?')
  if (newCaption == null) {
    newCaption = ""
  }

  const response = await fetch(`/${event.target.getAttribute('data')}/caption`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    console.log('success!');
  } else
    alert(response.statusText);
};

editButton.addEventListener('click', editPost);


// Delete a Post
const deleteButton = document.querySelector('#delete');

async function deletePost(event) {
  event.preventDefault();

  const response = await fetch(`/${event.target.getAttribute('data')}`, {
    method: 'delete',
  });
  if (response.ok) {
    console.log('Post was deleted');
  } else
    alert(response.statusText);
};

editButton.addEventListener('click', editPost);
deleteButton.addEventListener('click', deletePost);
