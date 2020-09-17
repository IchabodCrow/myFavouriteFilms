import React, { useEffect, useState } from "react";


const CloudGenres = (props) => {
  const [state, setState] = useState({})
  useEffect(() => {
    props.genresList();
  }, []);
  console.log(props);

  const handleclick = (e) => {
    setState( id => {
      id = true 
    })
    console.log(state)
  }

  const RandomColor = () => {
   const colorArray = ['bg-purple-300', 'bg-blue-300', 'bg-yellow-300', 'bg-green-300', 'bg-red-300','bg-teal-300'];
   return colorArray[Math.floor(Math.random() * colorArray.length)]
  }
  

  return (
    <div className="flex flex-row flex-wrap justify-center bg-purple-100">
      {props.genres.map((genre, index) => (
        <div className={`${RandomColor()} bg-opacity-50 w-auto h-auto text-center mx-3 my-3 p-2 rounded-lg`}  name={genre.name} key={index} id={genre.id} onClick={RandomColor}>{genre.name}</div>
      ))}
    </div>
  );
};

export default CloudGenres;
