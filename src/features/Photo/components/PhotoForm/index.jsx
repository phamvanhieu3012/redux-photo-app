import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global.js";
import Images from "constants/images";

function PhotoFom(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select
          id="categoryId"
          name="categoryId"
          placeholder="What's your photo category"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Photo</Label>
        <div>
          <Button type="button" outline color="primary">
            Random a photo
          </Button>
        </div>
        <div>
          <img
            width="200px"
            height="200px"
            src={Images.COLORFUL_BG}
            alt="ColorFul bg"
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  );
}

PhotoFom.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoFom.defaultProps = {
  onSubmit: null,
};

export default PhotoFom;
