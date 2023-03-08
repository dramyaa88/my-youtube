import React from "react";
import Button from "./Button";

const Buttonslist = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Music" />
    </div>
  );
};

export default Buttonslist;
