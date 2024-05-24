import React, { useState } from 'react'
import ERAButton from "../../atoms/ERAButton/ERAButton"
import ERAHeader from "../../atoms/ERAHeader/ERAHeader"
import './Home.css'
import { reactDef } from "../../utils/Definitions"

const Home = () => {
  const [isreactDefClicked, setIsreactDefClicked] = useState(false)

  const handleOnReactDefClick = (val) => {
    setIsreactDefClicked(val)
  }
  return <div className="homePage">
    <ERAHeader />
    <div>
      <h1 className="headLine"> Edu React </h1>
      <h2 className="headLine"> Comprehensive online learning hub for React </h2></div>
    <div className='reactDef'>
      <ERAButton Name='What is React?' isButtonWhite={true} handleOnReactDefClick={handleOnReactDefClick} />
      <div className={isreactDefClicked ? 'reactDefPopUp' : ''}> {isreactDefClicked && reactDef()} </div>
      </div>
    
  </div>

}
export default Home
