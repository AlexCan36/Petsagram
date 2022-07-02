// Clicking the new post button
const newPostButton = document.querySelector('#new-post');
async function createNewPost(event) {
  event.preventDefault();  

  const response = await fetch('/newpost', {
    method: 'get',
  });
  if (response.ok) {
    console.log('success!');
    document.location.replace('/newpost');
  } else {
    alert(response.statusText);
  }
  
};

newPostButton.addEventListener('click', createNewPost);


// Edit a Post
const editButtons = document.getElementsByClassName('edit');

async function editPost(event) {
  event.preventDefault();
  let newCaption = prompt('What would you like the new caption to say?')
  if (newCaption == null) {
    newCaption = ""
  }

  const response = await fetch(`/api/post/${event.target.getAttribute('data')}`, {
    method: 'put',
    body: JSON.stringify({
      newCaption,
    }),
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    location.reload()
    console.log('success!');
  } else
    alert(response.statusText);
};

for (let i = 0; i < editButtons.length; i++) {
editButtons[i].addEventListener('click', editPost);
}


// Delete a Post
const deleteButtons = document.getElementsByClassName('delete');

async function deletePost(event) {
  event.preventDefault();

  const response = await fetch(`/api/post/${event.target.getAttribute('data')}`, {
    method: 'delete',
  });
  if (response.ok) {
    location.reload()
    console.log('Post was deleted');
  } else
    alert(response.statusText);
};


for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', deletePost);
}