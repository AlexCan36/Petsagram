const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.winy_36,
  api_key: 241768641112481,
  api_secret: process.env.pYajVZm2Fsv0ACKxqmHkbEzJhZE,
  secure: true,
});

router.post("/api/images", (req, res) => {
  const uploadedImg = req.files.image;
  console.log(uploadedImg);
  // req.body to save img to the post
  const options = {
    width: 150,
    height: 150,
    crop: "scale",
    folder: "petsagram",
  };

  cloudinary.uploader.upload(
    uploadedImg.tempFilePath,
    options,
    function (error, result) {
      const imgUrl = result.url;
      // save public_id into database and it can be used in delete route
      const publicID = result.public_id;
      console.log(imgUrl);
    }
  );
});

router.delete("/api/images", (req, res) => {
  cloudinary.v2.uploader.destroy(public_id, options, function (error, result) {
    res.json(result);
  });
});

router.put("/api/images", (req, res) => {
  // delete
  cloudinary.v2.uploader.destroy(public_id, options, function (error, result) {
    res.json(result);
  });

  // upload
  const uploadedImg = req.files.image;
  console.log(uploadedImg);
  const options = {
    width: 150,
    height: 150,
    crop: "scale",
    folder: "petsagram",
  };

  cloudinary.uploader.upload(
    uploadedImg.tempFilePath,
    options,
    function (error, result) {
      const imgUrl = result.url;
      // save public_id into database and it can be used in delete route
      const publicID = result.public_id;
      console.log(imgUrl);
    }
  );
});
module.exports = router;
