import React, { useState } from 'react'
import './Home'
import Header from '../../componets/Header/Header'
import ExploreMenu from '../../componets/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../componets/FoodDisplay/FoodDisplay';
import AppDownload from '../../componets/AppDownload/AppDownload';
import { Link } from 'react-router-dom';

function Home() {
    const [category,setcategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
     <Link to={'/app'}><AppDownload/></Link> 
    </div>
  )
}

export default Home
