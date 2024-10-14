const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dhu8hpnb7",
  api_key: "119621911392457",
  api_secret: "8mrn4mb39UqihjlJuHdqTbO1fx8",
});

const storage = new multer.memoryStorage();

const imageUploadUtils = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
};

const upload = multer({ storage });

module.exports = { upload, imageUploadUtils };
