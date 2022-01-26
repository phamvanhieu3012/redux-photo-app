import Banner from "components/Banner";
import PhotoFom from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./style.scss";

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams(); //Photo/index.jsx
  console.log({ photoId });

  const isAddMode = !photoId;
  const editedPhoto = useSelector(
    (state) => state.photos.find((x) => x.id === +photoId) // + to convert string to number
  );

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null, //chua chon la null
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form Submit: ", values);

      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(values);
          console.log(action);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😊" />

      <div className="photo-edit__form">
        <PhotoFom
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
