// Clicking the new post button
const newPostButton = document.querySelector('#add-like');

async function createNewPost(event) {
  event.preventDefault();  
      document.location.replace('./newpost');
};

newPostButton.addEventListener('submit', createNewPost);