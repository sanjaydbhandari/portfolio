import React from "react";
import { RainbowButton } from "../components/ui/rainbow-button";

const Home = () => {
  return (
    <div className="profile-container h-screen border-2 flex items-center">
      <div className="profile-details flex gap-6 flex-col justify-center items-center ">
        <img
          className="rounded-full"
          height="100rem"
          width="100rem"
          src="https://media.licdn.com/dms/image/v2/D4D03AQEdejo34iRHwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718232397162?e=2147483647&v=beta&t=XXo7KGLfuB1SEl0wISc76YVLi85r4QH5EYT2PWZQcmg"
          alt=""
        />
        <h1 className="profile-title font-bold text-3xl">
          Hi, I'm Sanjay Bhandari
        </h1>
        <p className="tracking-wide leading-relaxed mx-6 text-xl">
          Full Stack Web Developer Building Impactful Web Applications. I
          specialize in creating production-ready web apps from the ground up,
          with a focus on both frontent and backend development. Passionate
          about solving real-world problems and always open to new challenges.
        </p>
        <RainbowButton className="px-8 py-1 border-2">
          Get in touch
        </RainbowButton>
      </div>
    </div>
  );
};

export default Home;
