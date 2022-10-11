const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'cloudbucket',
  api_key: '583638378746911',
  api_secret: 'ZnezkYnCUErerhatAXaH1OL3njA',
});

module.exports = cloudinary;