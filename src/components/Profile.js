import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

const API_URL = "https://jsonplaceholder.typicode.com/users/10";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      name: "",
      username: "",
      email: "",
      phone: null,
      flag: true,
      message: "",
    };
  }
  componentDidMount = () => {
    this.getProfile();
  };

  getProfile = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ user: data });
    } catch (err) {
      console.error(err);
    }
    // console.log("successfully got data", this.state.user.address.street);
  };

  handleChange = ({ target: { name, value } }) => {
    console.log(this.state[name]);
    this.setState({ [name]: value });
    console.log(name, value);
  };
  edituser = () => {
    console.log("Editing");
    this.setState({
      isDisabled: false,
      flag: false,
      name: this.state.user.name,
      phone: this.state.user.phone,
      username: this.state.user.username,
      email: this.state.user.email,
    });
  };

  validate = (e) => {
    const { name, username, email, phone } = this.state;

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (
      name === this.state.user.name &&
      username === this.state.user.username &&
      email === this.state.user.email &&
      phone === this.state.user.phone
    ) {
      this.setState({ message: "Make changes to submit" });
      return false;
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      this.setState({ message: "Email invalid" });
      return false;
    } else {
      this.handleSubmit(e);
    }
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, username, email, phone, message } = this.state;

      const { data } = await axios.put(API_URL, {
        name,
        username,
        email,
        phone,
        message
      });
      this.setState({
        user: data,
        name,
        username,
        email,
        phone,
        flag: true,
        message: "Submitted succesfully",
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <>
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1
                className="h3 mb-2 text-gray-800"
                style={{ marginTop: "20px" }}
              >
                Profile
              </h1>

              {/* <!-- Content Row --> */}
              <div className="row">
                <div className="col-xl-6 col-lg-5">
                  {/* <!-- Area Chart --> */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        User Information
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="chart-area">
                        <label>Name : </label>{" "}
                        <input
                          disabled={this.state.flag}
                          type="text"
                          name="name"
                          value={
                            this.state.flag
                              ? this.state.user.name
                              : this.state.name
                          }
                          onChange={this.handleChange}
                        />
                        <hr />
                        <label>Username : </label>{" "}
                        <input
                          disabled={this.state.flag}
                          type="text"
                          name="username"
                          value={
                            this.state.flag
                              ? this.state.user.username
                              : this.state.username
                          }
                          onChange={this.handleChange}
                        />
                        <hr />
                        <label>Email : </label>
                        {"  "}
                        <input
                          disabled={this.state.flag}
                          type="email"
                          name="email"
                          value={
                            this.state.flag
                              ? this.state.user.email
                              : this.state.email
                          }
                          onChange={this.handleChange}
                        />
                        <hr />
                        <label>Phone : </label>
                        {"  "}
                        <input
                          disabled={this.state.flag}
                          type="text"
                          name="phone"
                          value={
                            this.state.flag
                              ? this.state.user.phone
                              : this.state.phone
                          }
                          onChange={this.handleChange}
                        />
                        <br />
                        <hr />
                        {this.state.flag ? (
                          <Button size="sm" onClick={this.edituser}>
                            Edit profile
                          </Button>
                        ) : (
                          ""
                        )}
                        {!this.state.flag ? (
                          <Button size="sm" onClick={this.validate}>
                            Submit
                          </Button>
                        ) : (
                          ""
                        )}
                        {"  "}
                        {this.state.message}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
