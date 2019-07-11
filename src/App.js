import React, { useState, useEffect } from "react";
import axios from 'axios';
import Explanation from './Explanation';
import "./App.css";
import Day from "./Components/renders/Day";
import Title from "./Components/renders/Title";
import Copyright from "./Components/renders/Copyright"
import Image from "./Components/renders/Image"
function App() {

  const [data, setData] = useState({});
  console.log(data)

  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(fetchData, []);

  console.log(data);

  return (
    <div className="App">
      <Title title = {data.title}/>
      <Day date={data.date}/>

      {/* <DataList data ={fetchData}/> */}
        {/* <Media data={data}  /> */}
      <Explanation explanation={data.explanation} />
      <Copyright date={data.copyright}/>
      <Image image={data.url}/>
      
      
    </div>
  );
}

export default App;