import React from 'react'
import './Accomplishments.css'
import Airforce from './airforce.jpg'
import Uttarpradesh from './uttarpradesh.png'
// import Background from './background.mp4'
import Link from 'react-router-dom'
const Hackcbs="https://hackcbs.tech/assets/img/logo_final.png"
const Accomplishments = () => {
  return (<>
  
<div className='accomplishments'>
  
{/* <video  width="100%" height="750px"  style={{position:'absolute',right:0,left:0}} controls loop autoplay muted>
<h3 style={{zIndex:5,color:'white',position:'absolute',marginLeft:0}}>Accomplishments</h3>
        <source src={Background} type="video/mp4"  />
        <source src="./background.ogg" type="video/ogg" />
       </video> */}
       <h3 style={{zIndex:5,color:'white',position:'absolute',marginTop:60,fontSize:20}}>ACCOMPLISHMENTS</h3>
   <div className='box1'>
    <div className='airforce'>
       Indian Air Force
    </div>
    <img src={Airforce} style={{height:80,width:'auto',marginTop:30}}></img>
     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:20,marginTop:20}}>Successfully cleared the Indian Air Force-X (Technical) exam, including both written assessments and all interviews, in 2021.</div>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:20,marginTop:20}}>Roll No: 2004112849 </div>

     
   </div>
   <div className='box1'>
    <div className='rajbhawan'>
      Raj Bhawan
     </div>
     <img src={Uttarpradesh} style={{height:80,width:'auto',marginTop:10,background:'white',borderRadius:40}}></img>
     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:16,marginTop:15,}}>Presenting the DEEPOTSAV application to the Honorable Governor of Uttar Pradesh, Smt. Anandiben Patel, at the prestigious Governor's House (Raj Bhawan) marked a significant milestone in my college project journey. I proudly served as a  developer for this innovative application.</div>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:16,marginTop:10}}> Notably, the DEEPOTSAV event, celebrated in 2022, achieved a remarkable feat by lighting over 17 lakh diyas simultaneously, earning a well-deserved place in the Guinness Book of World Records.</div>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:16,marginTop:2}}> Presentation also got featured on official facebook page of governor. </div>

     <button style={{textDecoration:'none',padding:7,marginTop:10,background:'orange',outline:'none',border:'none',borderRadius:4}}><a style={{textDecoration:'none',fontWeight:'bold',fontSize:15,color:'black'}} href="https://www.facebook.com/anandiben/posts/pfbid02kL5G9YocTDkWf86iziepAKWkoKGqyQ1Ttr24xXBDqF3oNwmBvQYXvL7BNDfbgvfJl">Official Post</a></button>

     <button style={{textDecoration:'none',padding:7,marginTop:10,background:'orange',outline:'none',border:'none',borderRadius:4,marginLeft:25}}><a style={{textDecoration:'none',fontWeight:'bold',fontSize:15,color:'black'}} href="https://play.google.com/store/apps/details?id=com.codeeraayush.deepotsav"> Deepotsav Application </a></button>

    

   </div>
   <div className='box1'>
   <div className='hackcbs'>
      Hackcbs 5.0
     </div>
     <img src={Hackcbs} style={{height:80,width:'auto',marginTop:15,background:'white',borderRadius:40}}></img>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:20,marginTop:20}}>HackCBS stands out as India's largest student-run hackathon, organized by SSCBS College (Delhi University). In this dynamic event, my team took part and successfully developed a robust Medical Shop Inventory Management System.</div>


   </div>

</div>

<div className='accomplishments-mobile'>
  
{/* <video  width="100%" height="750px"  style={{position:'absolute',right:0,left:0}} controls loop autoplay muted>
<h3 style={{zIndex:5,color:'white',position:'absolute',marginLeft:0}}>Accomplishments</h3>
        <source src={Background} type="video/mp4"  />
        <source src="./background.ogg" type="video/ogg" />
       </video> */}
       <div style={{color:'whitesmoke',fontSize:20,fontWeight:'bold',}}>ACCOMPLISHMENTS</div>
   <div className='box1'>
    <div className='airforce'>
       Indian Air Force
    </div>
    <img src={Airforce} style={{height:80,width:'auto',marginTop:30}}></img>
     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:20,marginTop:20}}>Successfully cleared the Indian Air Force-X (Technical) exam, including both written assessments and all interviews, in 2021.</div>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:20,marginTop:20}}>Roll No: 2004112849 </div>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:20,marginTop:20}}>
           {/* PROVISIONAL SELECT LIST ( PSL ) link :
           <button style={{textDecoration:'none',padding:7,marginTop:20,background:'orange',outline:'none',border:'none',borderRadius:4}}><a style={{textDecoration:'none',fontWeight:'bold',fontSize:15,color:'black'}} href="https://drive.google.com/file/d/188Mf2jJWH5S-FyeqwKn2KnLco0XfMN4a/view"> Go to pdf </a></button> */}
         </div>
   </div>
   <div className='box1'>
    <div className='rajbhawan'>
      Raj Bhawan
     </div>
     <img src={Uttarpradesh} style={{height:80,width:'auto',marginTop:15,background:'white',borderRadius:40}}></img>
     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:16,marginTop:15,}}>Presenting the DEEPOTSAV application to the Honorable Governor of Uttar Pradesh, Smt. Anandiben Patel, at the prestigious Governor's House (Raj Bhawan) marked a significant milestone in my college project journey. I proudly served as a developer for this innovative application.</div>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:16,marginTop:20}}> Notably, the DEEPOTSAV event, celebrated in 2022, achieved a remarkable feat by lighting over 17 lakh diyas simultaneously, earning a well-deserved place in the Guinness Book of World Records.</div>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:16,marginTop:20}}> Presentation also got featured on the official facebook page of governor.</div>

     <button style={{textDecoration:'none',padding:7,marginTop:20,background:'orange',outline:'none',border:'none',borderRadius:4}}><a style={{textDecoration:'none',fontWeight:'bold',fontSize:15,color:'black'}} href="https://www.facebook.com/anandiben/posts/pfbid02kL5G9YocTDkWf86iziepAKWkoKGqyQ1Ttr24xXBDqF3oNwmBvQYXvL7BNDfbgvfJl">Official Post</a></button>

     <button style={{textDecoration:'none',padding:7,marginTop:20,background:'orange',outline:'none',border:'none',borderRadius:4,marginLeft:25}}><a style={{textDecoration:'none',fontWeight:'bold',fontSize:15,color:'black'}} href="https://play.google.com/store/apps/details?id=com.codeeraayush.deepotsav"> Deepotsav Application </a></button>

      <div style={{height:50,width:'100%'}}></div>
    

   </div>
   <div className='box1'>
   <div className='hackcbs'>
      Hackcbs 5.0
     </div>
     <img src={Hackcbs} style={{height:80,width:'auto',marginTop:15,background:'white',borderRadius:40}}></img>

     <div style={{color:'white',marginLeft:10,right:10,textAlign:'center',fontSize:20,marginTop:20}}>HackCBS stands out as India's largest student-run hackathon, organized by SSCBS College (Delhi University). In this dynamic event, my team took part and successfully developed a robust Medical Shop Inventory Management System.</div>

     <div style={{height:30,width:'100%'}}></div>

   </div>

</div>


</>)
}

export default Accomplishments
