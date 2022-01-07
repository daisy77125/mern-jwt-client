import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Input from "./Input";

class Form extends Component {
  state = { data: {}, errors: {} };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.username] = input.value;
    this.setState({ data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.doSubmit();
  };

  renderInput(username, label, type = "text", required = true) {
    const { data, errors } = this.state;
    return (
      <Input
        username={username}
        label={label}
        type={type}
        required={required}
        value={data[username]}
        error={errors[username]}
        onChange={this.handleChange}
      />
    );
  }

  renderSubmitBtn(username) {
    return (
      <Button
        type="submit"
        style={{ marginLeft: "auto" }}
        variant="outlined"
        size="medium"
        color="secondary"
      >
        {username}
      </Button>
    );
  }
}

export default Form;
