import React, { useState } from 'react'
import ERAButton from "../../atoms/ERAButton/ERAButton"
import ERAHeader from "../../molecules/ERAHeader/ERAHeader"
import './Home.css'

const Home = () => {
  const [isreactDefClicked, setIsreactDefClicked] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const handleOnReactDefClick = (val) => {
    setIsreactDefClicked(val)
  }
  const ReactDef = () => {
    return (
        <div>
            <li> React, is a popular JavaScript library for building dynamic and interactive web applications. </li>
            <li> It was developed by Facebook </li>
            <li> It follows the <span className='hide' onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}> Virtual DOM (Document Object Model)</span> approach </li>
            {isHover && <div className='hide'> The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”,<br/> representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. </div>}
        </div>
    )
}
  return <div className="homePage">
    <ERAHeader />
    <div className='heading'>
      <h1 className="headLine"> Let's unlock the potential of web development</h1> 
      <h1 className="headLine"> with React, the library that revolutionized front-end programming</h1> 
      </div>
    <div className='reactDef'>
      <ERAButton Name='What is React?' isButtonWhite={true} handleOnReactDefClick={handleOnReactDefClick} />
      <div className={isreactDefClicked ? 'reactDefPopUp' : ''}> {isreactDefClicked &&  ReactDef()} </div>
      </div>
    
  </div>

}
export default Home
