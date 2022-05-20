import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="01" title="Up Coming" fetchURL={requests.requestPopular} />
      <Row rowId="02" title="Popular" fetchURL={requests.requestUpcoming} />
      <Row rowId="03" title="Treding" fetchURL={requests.requestTrending} />
      <Row rowId="04" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId="05" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};
export default Home;
