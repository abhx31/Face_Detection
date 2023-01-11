import React from 'react'
import "./welcome.css"
const welcome = () => {
  return (
    <div className='container'>
        <div className="table">
            <p style={{"fontFamily":"Bodoni MT BlacCopperplate Gothic Bold",fontSize:"30px"}} className="header">FACE-RECOGNITION WEBPAGE</p>
            <p style={{"fontFamily":"Calibri (Body)",fontSize:"18px"}}>Welcome to face recognition website.This page detects face from the provided dataset of 100 people.Explore many things by logging into the website.</p>
            <br />
            <p style={{"fontFamily":"Calibri (Body)",fontSize:"18px"}}>It uses deeplearning model yolov5 to detect the face.This is a single page application developed in React-js.</p>
            <br />
            <br />
            <a className='button1' href='/signup' style={{textDecoration:"none"}}>Signup</a>
            <a className='button2' href='/login' style={{textDecoration:"none"}}>Login</a>
        </div>
    </div>
  )
}

export default welcome