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