import logo from './logo.svg';
import './App.css';
import image from './imageee.jpg'
import bimage from './th.jpg'
import mimage from './SEEMAIMAGE.jpg'
import './color.css'
import Demo from './component/Demo';
import Button from './component/Button'
import Icon from './component/Textfield'
import Card from './component/Card'
import Boostrap from './component/Boostrap'
import MDB from './component/Mdb'
import Arrow from './component/Arrowfunction'
import Function from './component/Profile'
import Hfunction from './component/Homework'
import Table from './component/New'
function App() {
  let myStyle={
    backgroundColor:'green',
    Color:'white'
  }
  let divStyle={
    width:"100px",
    height:"200px",
    backgroundColor:'red',
    backgroundImage:`url(${image})`

  }
  /*let body={
    backgroundImage:`url(${bimage})`,
    width:"500px",
    height:"250px"
  }*/
  return (
    <>
    <div style={divStyle}></div>
    <img src={image} style={{width:"200px"}} />
    <h1 style={{color:"red",backgroundColor:"yellow"}}>Hello world</h1>
    <h1 style={myStyle}>Hello world</h1>
    <h3 className="cal">ello</h3><br></br><br></br>
  <hr></hr> 
  <div>
  <center className="cal" >
    
    <img src={mimage} style={{width:"200px"}} />
    <h1>Profile</h1>
    
    <p ><b>Name</b> : Seema</p>
    <p ><b>Email</b>  : fmsfms6839@gmail.com</p>
    <p ><b>Phone</b> : 9148542075</p>
    <p ><b>Address</b> : Udupi</p>
    <p ><b>DOB </b>: 28/09/2001</p>
    
    
    </center>
    </div>
    <Demo />
    <Button/>
    <Icon/>
    <Card/>
    <Boostrap/>
    <MDB/>
    <Arrow/>
    <Function/>
    <Hfunction/>
    <Table/>
    
    
    

    </>
  );
}

export default App;
