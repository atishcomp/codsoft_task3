import React from 'react'
import './About.css'
import { forwardRef } from 'react'
import Javascript from './javascript.png'
import Html from './html.png'
import Css from './css.png'
import REACT from './react.png'
import Mongodb from './mongodb.png'
import Next from './next.png'
import Firebase from './firebase.png'
import Express from './express.png'
import Nodejs from './nodejs.png'
import Backgroundimg from './background-img.png'

const About = () => {
  return (<>
    {/* <div className='about'>
      <h2 style={{marginTop:50,position:'absolute',marginLeft:25,fontWeight:'bold',color:'whitesmoke'}}>ABOUT</h2>
     <div  style={{color:'white',marginTop:100,position:'absolute',fontSize:20,marginLeft:25,right:25}}>
As a final-year BTech student majoring in Information Technology, I am a dedicated and skilled MERN stack web developer with a passion for creating innovative and user-friendly websites. Throughout my academic journey, I have acquired a strong foundation in IT principles and honed my development skills. My commitment to staying abreast of the latest industry trends and technologies allows me to deliver cutting-edge solutions. I am eager to leverage my academic background and practical experience to contribute effectively to the dynamic field of web development.</div>


<div style={{marginTop:300,position:'absolute'}}>
<img className="bounce" src={Html} style={{height:48,width:'auto',marginLeft:270}}></img>
<img className="bounce" src={Css} style={{height:48,width:'auto',marginLeft:70}}></img>
<img className="bounce" src={Javascript} style={{height:48,width:'auto',marginLeft:70}}></img>
<img className="bounce" src={REACT} style={{height:48,width:'auto',marginLeft:70}}></img>
<img className="bounce" src={Mongodb} style={{height:48,width:'auto',marginLeft:70}}></img>
<img className="bounce" src={Next} style={{height:48,width:'auto',marginLeft:70}}></img>
<img className="bounce" src={Firebase} style={{height:48,width:'auto',marginLeft:70}}></img>
<img className="bounce" src={Express} style={{height:48,width:'auto',marginLeft:70}}></img>
<img className="bounce" src={Nodejs} style={{height:48,width:'auto',marginLeft:70}}></img>
</div>

<img src={Backgroundimg} style={{height:180,width:'auto',marginLeft:100,marginTop:230}}></img>

    </div> */}

    <div className='about'>
      <div className='content' style={{background:'black',height:600,width:'50%'}}>
          <h2 style={{marginLeft:50,fontWeight:'bold',color:'white'}}>ABOUT</h2>

          <div  style={{color:'white',marginTop:50,fontSize:20,marginLeft:50}}>
As a final-year BTech student majoring in Information Technology, I am a dedicated and skilled MERN stack web developer with a passion for creating innovative and user-friendly websites. Throughout my academic journey, I have acquired a strong foundation in IT principles and honed my development skills. My commitment to staying abreast of the latest industry trends and technologies allows me to deliver cutting-edge solutions. I am eager to leverage my academic background and practical experience to contribute effectively to the dynamic field of web development.</div>
      </div>

         

      <div className='image' style={{background:'black',height:600,width:'50%'}}>

     

      <div style={{height:350,width:270,marginTop:30,marginLeft:25,display:'block',margin:'auto',background:'orange',marginTop:30,marginBottom:20,borderTopLeftRadius:20,borderBottomRightRadius:20,boxShadow: "0 0 8px violet",background:"linear-gradient(to top,skyblue,violet)",zIndex:5}}>

      <img src={Backgroundimg} style={{height:350,width:'auto',display:'block',margin:'auto',marginTop:20,}}></img>
         </div>
         <div style={{position:'absolute',height:80,width:80,background:'red',borderRadius:80,marginTop:-120,marginLeft:30,background:"linear-gradient(to right, orange,red)"}}></div>

<div style={{position:'absolute',height:50,width:50,background:'red',borderRadius:80,marginTop:-160,right:40,background:"linear-gradient(to right, violet,skyblue)"}}></div>

         <div style={{margin:'auto',height:60,width:'80%',marginTop:80,marginLeft:'10%',background:'black'}}>
<img className="bounce"  src={Html} style={{height:48,width:'auto',marginLeft:25}}></img>
<img className="bounce" src={Css} style={{height:48,width:'auto',marginLeft:25}}></img>
<img className="bounce" src={Javascript} style={{height:48,width:'auto',marginLeft:25}}></img>
<img className="bounce" src={REACT} style={{height:48,width:'auto',marginLeft:25}}></img>
<img className="bounce"  src={Mongodb} style={{height:48,width:'auto',marginLeft:25}}></img>
<img className="bounce" src={Express} style={{height:48,width:'auto',marginLeft:25}}></img>
<img className="bounce" src={Nodejs} style={{height:48,width:'auto',marginLeft:25}}></img>
<img className="bounce" src={Firebase} style={{height:48,width:'auto',marginLeft:25}}></img>
</div>


      </div>

    </div>

    <div className='about-mobile'>
      <h2 style={{marginTop:50,position:'absolute',marginLeft:25,fontWeight:'bold',color:'whitesmoke'}}>ABOUT</h2>
     <div  style={{color:'white',marginTop:100,fontSize:15,marginLeft:25,right:25}}>
As a final-year BTech student majoring in Information Technology, I am a dedicated and skilled MERN stack web developer with a passion for creating innovative and user-friendly websites. Throughout my academic journey, I have acquired a strong foundation in IT principles and honed my development skills. My commitment to staying abreast of the latest industry trends and technologies allows me to deliver cutting-edge solutions. I am eager to leverage my academic background and practical experience to contribute effectively to the dynamic field of web development.</div>




<div style={{height:180,width:220,marginTop:30,marginLeft:25,display:'block',margin:'auto',background:'orange',marginTop:30,marginBottom:20,borderTopLeftRadius:20,borderBottomRightRadius:20,boxShadow: "0 0 8px violet",background:"linear-gradient(to top,skyblue,violet)",zIndex:5}}>


<img src={Backgroundimg} style={{height:180,width:'auto',display:'block',margin:'auto',marginTop:70,}}></img>

</div>


<div style={{position:'absolute',height:50,width:50,background:'red',borderRadius:80,marginTop:-120,marginLeft:30,background:"linear-gradient(to right, orange,red)"}}></div>

<div style={{position:'absolute',height:30,width:30,background:'red',borderRadius:80,marginTop:-160,right:40,background:"linear-gradient(to right, violet,skyblue)"}}></div>

<div style={{margin:'auto',height:60,width:320,marginTop:80}}>
<img  src={Html} style={{height:48,width:'auto',marginLeft:25}}></img>
<img src={Css} style={{height:48,width:'auto',marginLeft:25}}></img>
<img src={Javascript} style={{height:48,width:'auto',marginLeft:25}}></img>
<img src={REACT} style={{height:48,width:'auto',marginLeft:25}}></img>
</div>

<div style={{margin:'auto',height:60,width:320,marginTop:20,marginBottom:20,}}>
<img  src={Mongodb} style={{height:48,width:'auto',marginLeft:25}}></img>
<img src={Express} style={{height:48,width:'auto',marginLeft:25}}></img>
<img src={Nodejs} style={{height:48,width:'auto',marginLeft:25}}></img>
<img src={Firebase} style={{height:48,width:'auto',marginLeft:25}}></img>
</div>
    </div>
    </>)
}

export default About
