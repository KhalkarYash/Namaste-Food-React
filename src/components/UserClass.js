import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/khalkaryash");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
    // console.log(this.props.name + "Child component did mount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    // console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="p-[10px] border-1">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @yashkhalkar001</h4>
      </div>
    );
  }
}

export default UserClass;
