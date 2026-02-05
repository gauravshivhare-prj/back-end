import dotenv from "dotenv";
dotenv.config();
import ImageKit from "imagekit";

let storageInstance = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUB_KEY,
  privateKey: process.env.IMAGEKIT_PRI_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL,
});

export let sendToIK = async (file, fileName) => {
  let obj = {
    file,
    fileName,
    folder: "E-commerce",
  };

  return await storageInstance.upload(obj);
};