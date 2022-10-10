import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import Form from "react-bootstrap/Form";

const ImageUpload = ({ file, setfile, name }) => {
  const imageUploadResize = (e) => {
    const images = e.target.files[0];
    let uploadedImage = file.image;
    Resizer.imageFileResizer(
      images,
      200,
      200,
      "JPEG",
      100,
      0,
      (uri) => {
        axios
          .post(`${process.env.REACT_APP_API}/uploadImages`, { image: uri })
          .then((res) => {
            console.log("Image Upload", res);
            uploadedImage.push(res.data);
            setfile({ ...file, image: uploadedImage });
          })
          .catch((err) => {
            console.log("Image Upload Error", err);
          });
      },
      "base64"
    );
  };

  const handleImageRemove = (public_id) => {
    axios
      .post(`${process.env.REACT_APP_API}/removeImages`, { public_id })
      .then((res) => {
        const { image } = file;
        let filteredImages = image.filter((item) => {
          return item.public_id !== public_id;
        });

        setfile({ ...file, image: filteredImages });
      });
  };

  return (
    <div className="form-group">
      <div className="row">
        {file.image &&
          file.image.map((i) => {
            return (
              <>
                <img src={i.url} key={i.public_id} width="200" height="200" />
                <button
                  key={i.public_id}
                  onClick={() => handleImageRemove(i.public_id)}
                >
                  Delete
                </button>
              </>
            );
          })}
      </div>

      <Form.Control
        required
        name={name}
        type="file"
        accept="images/*"
        onChange={imageUploadResize}
      />
    </div>
  );
};

export default ImageUpload;
