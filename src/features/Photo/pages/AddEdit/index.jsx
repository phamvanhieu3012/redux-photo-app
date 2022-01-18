import Banner from "components/Banner";
import PhotoFom from "features/Photo/components/PhotoForm";
import React from "react";
import "./style.scss";

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😊" />

      <div className="photo-edit__form">
        <PhotoFom onSubmit={(values) => console.log("Form submit: ", values)} />
      </div>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
