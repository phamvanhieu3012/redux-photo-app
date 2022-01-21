import Banner from "components/Banner";
import PhotoFom from "features/Photo/components/PhotoForm";
import { addPhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./style.scss";

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form Submit: ", values);

      setTimeout(() => {
        const action = addPhoto(values);
        console.log(action);
        dispatch(action);

        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😊" />

      <div className="photo-edit__form">
        <PhotoFom onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
