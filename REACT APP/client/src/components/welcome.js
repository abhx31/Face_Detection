// import React from 'react'

// const welcome = () => {
//   return (
//     <>
//     <div className="jumbotron container mt-5 "style={{display:"block",width:"1000%"}}  >
//         <center>
//         <h1 style={{"text-align":"center","fontFamily":"Bodoni MT BlacCopperplate Gothic Bold"}} className="display-4">FACE-RECOGNITION WEBPAGE</h1>
//         <br></br>
//         <p className="lead" style={{"fontFamily":"Calibri (Body)"}}> Welcome to face recognition website.This page detects face from the provided dataset of 100 people.Explore many things by logging-in into the website.</p>
//         <hr className="my-4" />
//         <p>It uses deeplearning model yolov5 to detect the face.This a single page application developed in React-js.</p>
//       <br/>
//         <a className="btn btn-info btn-lg" href="/signup" role="button" style={{background:"#715Df2"}}>Signup</a>
//         <br></br>
//         <section>
//           <br></br>
//         </section>
//         <a className="btn btn-info btn-lg" href="/login" role="button" style={{background:"#715Df2"}}>Login</a>
//         </center>
//         &nbsp;&nbsp;&nbsp;&nbsp;</div>
//     </>
//   )
// }

// export default welcome

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