import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Namaste React</h2>
//             <UserClass name={"Yash Khalkar (Class)"} location={"Nashik (Class)"}/>
//         </div>
//     )
// }

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount")
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User: &nbsp;
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <span className="font-bold">{loggedInUser}</span>)}
          </UserContext.Consumer>
        </div>
        <h2>Namaste React</h2>
        <UserClass name={"First"} location={"Nashik (Class)"} />
      </div>
    );
  }
}

export default About;
