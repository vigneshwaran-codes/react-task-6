import React from "react";
import axios from "axios";

import { Table, Button } from "react-bootstrap";

const API_URL = "https://jsonplaceholder.typicode.com/users";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      id: "",
      userId: "",
      name: "",
      email: "",
      phone: "",
      view: false,
      message: "",
    };
  }

  componentDidMount = () => this.getUsers();

  getUsers = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ users: data });
    } catch (err) {
      console.error(err);
    }
  };

  viewToggle = () => {
    this.setState({ view: !this.state.view });
  };

  createUser = async () => {
    try {
      const { userId, name, email, phone } = this.state;
      const { data } = await axios.post(API_URL, {
        name,
        email,
        phone,
      });
      const users = [...this.state.users];
      users.unshift(data);
      this.setState({
        users,
        name: "",
        phone: "",
        email: "",
        view: false,
        message: "User created!",
      });
    } catch (err) {
      console.error(err);
    }
  };

  updateUser = async () => {
    try {
      const { id, name, email, phone, users } = this.state;
      const { data } = await axios.put(`${API_URL}/${id}`, {
        name,
        email,
        phone,
      });
      const index = users.findIndex((user) => user.id === id);
      users[index] = data;

      this.setState({
        users,
        name: "",
        email: "",
        phone: "",
        view: false,
        message: "User updated!",
      });
    } catch (err) {
      console.log(err);
    }
  };

  deleteUser = async (userId) => {
    try {
      console.log(userId);
      await axios.delete(`${API_URL}/${userId}`);

      let users = [...this.state.users];
      users = users.filter(({ id }) => id !== userId);

      this.setState({ users, message: "User deleted!" });
    } catch (err) {
      console.error(err);
    }
  };

  selectUser = (user) => this.setState({ ...user, view: true });

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  validate = (e) => {
    const { name, email } = this.state;

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (
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
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.updateUser();
    } else {
      this.createUser();
    }
  };
  displayForm = () => {
    this.setState({ view: true });
  };

  render() {
    return (
      <>
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1
                className="h3 mb-2 text-gray-800"
                style={{ marginTop: "20px" }}
              >
                Users
              </h1>
              <p>
                <Button size="sm" onClick={this.displayForm}>
                  Add user
                </Button>{" "}
                {this.state.message}
              </p>

              {this.state.view ? (
                <div>
                  <form onSubmit={this.validate}>
                    <label> Name : </label>{" "}
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <br />
                    <label> Email : </label>{" "}
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <br />
                    <label> Phone: </label>{" "}
                    <input
                      type="text"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input type="Submit" />
                  </form>
                  <br />
                </div>
              ) : (
                ""
              )}
              <Table striped bordered hover className="table ">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <Button
                            size="sm"
                            onClick={() => this.selectUser(user)}
                          >
                            Edit
                          </Button>{" "}
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => this.deleteUser(user.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Users;
