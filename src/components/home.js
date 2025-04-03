import React, { useState } from "react";
import NavigationBar from "./navarbar";
import Footer from "./footer";
import Middle from "./middle";


function Home() {
  return (
   <>
        <NavigationBar/>
          <div className="container-body">
           <div className="content-sec">
             <div className="p-5">
                 <h1 className="top-title" style={{fontSize:"55px"}}>Consultative Engineering Drives Impact</h1><br/>
                  <h6 className="fs-4">We don’t just execute; we consult, strategize, and engineer results.</h6><br/>
                 <button className="btn btn-primary rounded-5  fw-bold">See What We To</button>
                 <i class="fa-solid fa-arrow-right btn-round bg-primary "></i>
             </div>
             <div className="row p-5">
                <div className="col-md-6 class-def">
                    <h1 style={{fontSize:"40px"}}>Experience a different kind of partnership with AppHelix</h1>
                    <h6 className="fs-4">We approach every engagement as a long-term investment in your success, combining technical excellence with business vision. Our commitment to understand your business drives our engineering focus.</h6>
                </div>
                <div className="col-md-6">
                      <div className="col-12-md dna-sec">
                      <div className="content ">
                           <i class="fa-regular fa-image text-primary fs-2"></i><br/>
                           <h4>Strategic Engineering DNA</h4>
                           <h6>Technical excellence meets business insight</h6>
                        </div> 
                      </div><br/>
                      <div className="col-12-md dna-sec">
                        <div className="content ">
                        <i class="fa-solid fa-rocket text-primary fs-2"></i><br/>
                           <h4>Gen AI-native thinking</h4>
                           <h6>Accelerating success through intelligent solutions</h6>
                        </div>
                      
                      </div>
                </div>
             </div>
                     <div className="row p-2">
                        <div className="col-md-6 p-5">
                            <div className="col=md-12">
                            <img src="https://th.bing.com/th/id/OIP.eBpy6JW_PAsbdPmKD7nV6QHaER?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="DNA" width={"100%"} height={"550px"} style={{borderRadius:'18px'}}/>
                            </div>
                           
                        </div>
                        <div className="col-md-6 p-5">
                            <h1 className="font-size">Built on a Legacy of Leadership</h1>
                            <h1>8
                            <span className="text-primary">+</span></h1>
                            <p className="fs-5">Industries revolutionized through visionary leadership and proven expertise</p>
                            <h1 >30
                           <span className="text-primary">+</span></h1>
                            <p className="fs-5">Offshore Development Centers spearheaded by our leaders to drive global impact</p>
                            <h1>110
                            <span className="text-primary">+</span></h1>
                            <p className="fs-5">Years of collective leadership experience shaping transformative solutions</p>
                            <h1>500
                            <span className="text-primary">+</span></h1>
                            <p className="fs-5">Engagements led to success, setting benchmarks for innovation and results</p>
                            <button className="btn btn-primary">About Us</button>
                        </div>
                     </div>

                     
           </div>
          </div>
                
                <div className="container cont-end-sec">
                  <div className="row ">
                        <div className="col-md-6 end-sec-col ">
                           <h6 className="middle-sec">Your Future-Ready Ally</h6>
                           <h1>High-impact engineering, without the premium</h1>
                           <h2 className="text-secondary">Your success demands a partner who moves at your speed.</h2>
                        </div>
                        <div className="col-md-6 top-class">
                           <div className="row">
                              <div className="col-md-6">
                              <div className="content-end ">
                              <i class="fa-solid fa-handshake text-primary fs-2"></i><br/><br/>
                                  <h5>Consulting-led, Flexible Engagement</h5>
                                  <p>Processes that understand and align with your vision to accelerate your launch and maintain adaptability.</p>
                        </div>
                        <div className="content-end "><br/>
                        <i class="fa-solid fa-microchip text-primary fs-2"></i><br/><br/>
                                  <h5>Strategic Long-Term Vision</h5><br/>
                                  <p>Solutions that evolve alongside your business goals and market demands.</p>
                        </div>
                              </div>
                              <div style={{marginTop:"15px"}} className="col-md-6">
                              <div className="content-end ">
                              <i class="fa-solid fa-diamond text-primary fs-2"></i><br/><br/>
                                 <h5>Future-Ready Technology</h5>
                                 <h6>Built-in Gen AI and DevSecOps ensure sustainable, scalable solutions.</h6>
                            </div>
                            <div className="content-end "><br/>
                            <i class="fa-solid fa-bezier-curve text-primary fs-2"></i><br/><br/>
                                  <h5>True Technology Partnership</h5><br/>
                                  <p>Strategic guidance that transforms challenges into competitive advantages.</p>
                        </div>
                              </div>
                           </div>
                         
                        </div>
                     </div>
                 </div>

                 <Middle/>

                 <Footer/>
   </>

     
  );
}

export default Home;
