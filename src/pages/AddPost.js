import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

const AddPost = () => {
  const { handleSubmit, register } = useForm();
  // const[dec , setDec] = useState({title:'' , image:'' , description:''});

  const onSubmit = async (data) => {
    console.log(data);
    let image = data.image[0];
    const res = await axios.post(
      "https://demiblogs.onrender.com/posts",
      {
        title: data.title,
        image:image,
        description: data.description,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(res);
  };
  return (
    <div className="post-container">
      <form onSubmit={handleSubmit(onSubmit)} className="Add-post-form">
        <div className="post-input">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            {...register("title")}
          />
        </div>
        <div className="post-input" >
          <label>File:</label>
          <input
            type="file"
            placeholder="Image"
            name="image"
            {...register("image")}
          />
        </div>
        <div className="post-input" >
          <label>Description:</label>
          <textarea
            rows={15}
            cols={80}
            placeholder="Description"
            name="description"
            {...register("description")}
          />
        </div>
        <button className="btn post-btn">POST</button>
      </form>
    </div>
  );
};

export default AddPost;
