import React, { Component } from "react";
import io from "socket.io-client";
// import { USER_CONNECTED, LOGOUT } from "../events";
const socketUrl = "172.31.98.175:3131";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null
    };
  }
  componentWillMount() {
    this.initSocket();
  }
  initSocket = () => {
    const socket = io(socketUrl);
    socket.on("connect", () => {
      console.log("connected");
    });
    this.setState({ socket });
  };

  render() {
    return (
      <div>
        <input />
        <button>Send now</button>
      </div>
    );
  }
}

export default Layout;
