import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 py-5   min-h-[550px] flex justify-center items-center px-[30px]">
          <UserClass
            text={"Better you will feel if you eat a FoodFire healthy meal"}
          />

          <img
            src="https://howtostartanllc.com/images/business-ideas/business-idea-images/fast-food.jpg"
            alt="food"
            className="w-[40vw]  h-[60vh] rounded-md shadow-lg cursor-pointer"
          />
        </div>
      </div>
    );
  }
}
export default About;
