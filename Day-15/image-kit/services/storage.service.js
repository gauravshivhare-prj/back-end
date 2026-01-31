const Imagekit = require("imagekit");

const storageInstance = new Imagekit({
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
  urlEndpoint: process.env.IK_URL,
});

let sendImagesToIK = async (file, fileName) => {
  let res = await storageInstance.upload({
    file,
    fileName,
    folder: "day-15",
  });
  return res;
};

module.exports = sendImagesToIK;