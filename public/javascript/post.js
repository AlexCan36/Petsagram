// Adding likes
const addLikeButton = document.querySelector('#add-like');

async function addLike(event) {
  event.preventDefault();  
    const response = await fetch('/api/post/like', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  if (response.ok) {
      console.log('success!');
    } else {
      alert(response.statusText);
    }
};

signupForm.addEventListener('submit', addLike);


// Viewing Comments
const viewCommentButton = document.querySelector('#add-like');

async function viewComments(event) {
  event.preventDefault();  
    const response = await fetch('/{{this.id}}/comments', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    });

  if (response.ok) {
      console.log('success!');
    } else {
      alert(response.statusText);
    }
};

vieCommentButton.addEventListener('submit', viewComments);