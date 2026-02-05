import multer from "multer";

let storage = multer.memoryStorage();

export let upload = multer({ storage });