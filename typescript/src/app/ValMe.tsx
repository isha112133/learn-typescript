import React, { use } from "react";

const ValMe = () => {
  let greetings: string = "Hello! Isha here.";

  let myNum = 6;
  greetings.toUpperCase;
  console.log(greetings + myNum);

  let userId: number = 334455.8;
  console.log(userId.toFixed());

  let hero;
  function getHero() {
    return "thor";
  }
  hero = getHero();
  console.log(hero);

  return <div></div>;
};

export default ValMe;
