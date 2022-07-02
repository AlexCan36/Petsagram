// let picture = "";
// add image for the post
// window.addEventListener('load', function () {
  // document.querySelector('#img-new-post').addEventListener('change', function () {

  //   if (this.files && this.files[0]) {
  //     console.log(this)
  //     var img = document.querySelector('img');
  //     img.onload = () => {
  //       URL.revokeObjectURL(img.src);
  //     }
  //     // console.log(this.files[0])
  //     picture = URL.createObjectURL(this.files[0]);
  //     // console.log(picture)
  //   }
  // });

  // preview
const imgElement = document.getElementById("myImg");
const fileElement = document.getElementById("img-new-post");

function showImage(event) {
  console.log(event.target);
  // create url that represent a file or a blob
if (event.target.file && event.target.file[0]) {
    imgElement.src = URL.createObjectURL(event.target.file[0])
  imgElement.onload = function() {
    // after loading the page, delete file reference
    URL.revokeObjectURL(imgElement.src)
  }
}
}

fileElement.addEventListener('change', showImage)
// });

// make the post
// const postForm = document.querySelector('#awesome-post-form');
// console.log(postForm);
// postForm.addEventListener('submit', newPost)

// async function newPost(event) {
//   console.log('entered function');

//   event.preventDefault();

//   console.log("button been clicked");

//   const caption = document.querySelector('#caption-new-post').value.trim();
//   console.log(`our wonderful path ${picture}`)
//   if (picture && caption) {
//     const response = await fetch('/api/post', {
//       method: 'post',
//       body: JSON.stringify({
//         caption,
//         picture,
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     if (response.ok) {
//       document.location.replace("./profile");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

