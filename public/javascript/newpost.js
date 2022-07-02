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


