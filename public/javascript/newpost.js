let picture = "";
// add image for the post
window.addEventListener('load', function () {
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files && this.files[0]) {
      var img = document.querySelector('img');
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      }
      console.log(this.files[0])
      picture = img.src = URL.createObjectURL(this.files[0]);
    }
  });
});

// make the post
const postForm = document.querySelector('#awesome-post-form');
console.log(postForm);
postForm.addEventListener('submit', newPost)

async function newPost(event) {
  console.log('entered function');

  event.preventDefault();

  console.log("button been clicked");

  const caption = document.querySelector('#caption-new-post').value.trim();
  console.log(`our wonderful path ${picture}`)
  if (picture && caption) {
    const response = await fetch('/api/post', {
      method: 'post',
      body: JSON.stringify({
        caption,
        picture,
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace("./profile");
    } else {
      alert(response.statusText);
    }
  }
};

