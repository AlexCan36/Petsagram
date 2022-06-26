const commentForm = document.querySelector('#comment-form')||"";

async function commentCreate(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-box').value.trim();
    const post_id = event.target.getAttribute('data')

    if (comment_text) {
        const response = await fetch(`api/post/comment`, {
            method: 'post',
            body: JSON.stringify({
                comment_text,
                post_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
      if (response.ok) {
        console.log('success!');
      }
      else {
          alert(response.statusText);
      }
    }
};

commentForm && commentForm.addEventListener('submit', commentCreate);