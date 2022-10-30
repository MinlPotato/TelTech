import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  const PagList = [
    {
      secondary: "text-secondary",
      primary: "text-white",
    },
  ];

  return (
    <>
      <Header
        SecondaryPage0="text-secondary"
        SecondaryPage1="text-white"
        SecondaryPage2="text-white"
        SecondaryPage3="text-white"
        SecondaryPage4="text-white"
      />

      <Footer />
    </>
  );
}

export default Home;
