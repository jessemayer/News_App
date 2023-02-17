import React, {useState, useEffect, createContext} from 'react'
// GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=7f9560b60bda44779413f255c73bfca9
import axios from "axios";


export const TechCrunch = createContext();

export const TechCrunchProvider =  (props) => {
    const [data, setData] = useState();
    const apiKey = "7f9560b60bda44779413f255c73bfca9";
  
    useEffect(() => {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <TechCrunch.Provider value={{ data }}>
        {props.children}
      </TechCrunch.Provider>
    );
  };


