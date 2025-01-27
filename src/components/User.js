import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  let USERNAME = "khalkaryash";

  useEffect(() => {}, []);

  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/" + { USERNAME });
    const json = data.json();
    console.log(json);
    console.log(json.name);
  }

  return (
    <div className="p-[10px] border-1">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : @yashkhalkar001</h4>
    </div>
  );
};

export default User;
