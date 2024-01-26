import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <p className="text-[50px] font-extrabold font-Montserrat text-orange-600">
          Welcome to The world of{" "}
          <span className="text-orange-700">Tasty & Fresh Food</span>
        </p>
        <p className="text-[20px] font-Montserrat font-extrabold text-orange-400">
          {text}
        </p>
      </div>
    );
  }
}
export default UserClass;
