import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Business(props) {
  const [data, setData] = useState();
  const apiKey = "7f9560b60bda44779413f255c73bfca9";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
      .then((response) => setData(response.data))
        .catch((error) => console.log(error));
      }, []);
      // return (
      //   // <Business.Provider value={{data}}>
      //   //   {props.children}
      //   // </Business.Provider>
      // )
}

export default Business;