import React from 'react'
import './Contact.css'
import Linkedin from './linkedin.png'
import Instagram from './instagram.png'
import Email from './gmail.png'
import Shield from './Shield.png'
import Atish from './atishprofile.jpeg'
const Contact = () => {
  return (<>
  <div>
    <div className='contact'>
      <h2 style={{marginTop:0,position:'absolute',marginLeft:50,color:'white'}}>CONTACT</h2>
      <div style={{display:'inline-flex',height:70,width:400,marginTop:80}}>
        <div>
        <img src={Linkedin} style={{height:50,width:'auto',marginLeft:50}}></img>
        <h4 style={{position:'absolute',marginTop:0,marginLeft:60,color:'white'}}><a href={"https://www.linkedin.com/in/atish-yadav-5a4b841a3/"} target="_blank">visit</a></h4>
        </div>
        


        <div>
        <img src={Instagram} style={{height:50,width:'auto',marginLeft:50}}></img>

        <h4 style={{position:'absolute',marginTop:0,marginLeft:20,color:'white'}}>@theatishyadav</h4>
        </div>


        <div>
        <img src={Email} style={{height:50,width:'auto',marginLeft:100}}></img>
        <h4 style={{position:'absolute',marginTop:0,marginLeft:50,color:'white'}}>atishcomp@gmail.com</h4>
        </div>

      </div>
      {/* <img src={Shield} style={{height:150,width:'auto',position:'absolute',marginTop:30,marginLeft:100}}></img> */}
  
    </div>
    </div>

    <div>
    <div className='contact-mobile'>
      <h2 style={{marginTop:10,marginLeft:25,color:'white',fontWeight:'bold'}}>CONTACT</h2>
       <div style={{height:200,width:'100%',margin:'auto'}}>
        
      <img src={Atish} style={{height:180,width:'auto',display:'block',margin:'auto',borderRadius:150}}></img>
      
       </div>
      <div style={{display:'inline-flex',height:70,width:300,marginTop:20}}>
        <div>
        <img src={Linkedin} style={{height:30,width:'auto',marginLeft:30}}></img>
        <h5 style={{position:'absolute',marginTop:0,marginLeft:30,color:'white'}}><a href={"https://www.linkedin.com/in/atish-yadav-5a4b841a3/"} target="_blank">visit</a></h5>
        </div>
        


        <div>
        <img src={Instagram} style={{height:30,width:'auto',marginLeft:50}}></img>

        <h5 style={{position:'absolute',marginTop:0,marginLeft:20,color:'white'}}>@theatishyadav</h5>
        </div>


        <div>
        <img src={Email} style={{height:30,width:'auto',marginLeft:110}}></img>
        <h5 style={{position:'absolute',marginTop:0,marginLeft:60,color:'white'}}>atishcomp@gmail.com</h5>
        </div>

      </div>
     
  
    </div>
    </div>
    </>)
}

export default Contact
