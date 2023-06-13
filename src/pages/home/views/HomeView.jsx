import React from "react";
import { Helmet } from "react-helmet-async";

const HomeView = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
    </div>
  );
};

export default HomeView;
