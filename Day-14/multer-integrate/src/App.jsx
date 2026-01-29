import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [image, setImage] = useState("");
  const [files, setFiles] = useState(null);

  const formData = new FormData();

  for (let i = 0; i < Array.from(image).length; i++) {
    formData.append("images", Array.from(image)[i]);
  }

  const handleSendFile = async () => {
    try {
      formData.append("image", image);
      let res = await axios.post(
        "http://localhost:3000/api/products/images",
        formData
      );
      if (res) {
        console.log(res);
        setFiles(res.data?.file);
      }
    } catch (error) {
      console.log("error while uploading image", error);
    }
  };

  return (
    <div>
      <h1>hello</h1>

      <input multiple onChange={(e) => setImage(e.target.files)} type="file" />
      <button onClick={handleSendFile}>Send</button>

      {files ? <img width={200} src={files} alt="image" /> : null}
    </div>
  );
};

export default App;