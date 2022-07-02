// Adding likes
const addLikeButtons = document.getElementsByClassName('add-like');

async function addLike(event) {
  event.preventDefault();

  console.log("entered add like function successfully");

  const response = await fetch(`/api/post/like/${event.target.getAttribute('data')}`, {
    method: 'post',
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