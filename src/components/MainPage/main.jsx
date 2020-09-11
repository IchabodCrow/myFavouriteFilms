import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { movieGenres, movieListWithFilters } from '../../services/queriesTMDB'
import LoginForm from '../Login/LoginForm';

movieGenres()
const movie = movieListWithFilters(2017, 9, "35, 28" );

const Main = (props) => {


  console.log(movie);
  return (
    <div>
      
    </div>
  )
}

export default withRouter(Main)