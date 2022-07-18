import React from "react";
import Feed from "./Feed";
import Form from "./Form";
import Rooms from "./Rooms";
import Stories from "./Stories";
const Main = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col items-center">
      <Stories />
      <Form />
      <Rooms />
      <Feed />
    </div>
  );
};

export default Main;
