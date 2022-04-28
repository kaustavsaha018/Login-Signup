import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import srijanPic from '../srijan.jpg'
const axios = require('axios').default;

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async ()=>{
      try {
        const res = await axios.get('http://localhost:5000/about');
        const data = await res.json();
        console.log(data);
        if(! (await res.status) === 200){
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
  }
  useEffect(() => {
    callAboutPage();
  }, [])

  return (
    <div className="container emp-profile my-5">
        <form method='GET'>
          <div className="row">
            <div className="col-md-4">
              <img src={srijanPic} alt="profilePicture" />
            </div>
            <div className="col-md-6">
              <h3>Srijan Verma</h3>
              <h4 style={{color:"Blue"}}>Web Developer</h4>
              <p className='mt-3 mb-5'>RANKINGS: <span> 1/10 </span> </p>

              <ul className='nav nav-tabs' role="tablist">
                <li className='nav-item'>
                  <a className='nav-link' id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls='home' aria-selected="true">About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls='profile' aria-selected="false">Timeline</a>
                </li>
              </ul>
            </div>

            <div className='col-md-2'>
                <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile"/>
            </div>
          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className='mt-3'>
                <p style={{fontWeight:"800", fontSize:"large"}} >WORK LINKS:</p>
                  <a href="https://srijanv9.github.io/GitHub-Profile-Viewer/" target="_srijan">Github Profile Viewer</a><br />
                  <a href="https://srijanv9.github.io/CovidTracker/" target="_srijan">Covid Tracker</a><br />
                  <a href="https://srijanv9.github.io/The-Sparks-Foundation-Donation/" target="_srijan">Spark Donation Website</a><br />
                  <a href="https://srijanv9.github.io/Todo-WebApp/" target="_srijan">ToDo Web App</a><br />
                  <a href="https://srijanv9.github.io/Time-Table/" target="_srijan">Time Table</a>
              </div>
            </div>
            {/* right side data toggle */}
            <div className="col-md-8 pl-5">
              <div id="myTabContent" className='tab-content'>
                <div className='tab-pane fade show active' id="home" role="tabpanel" aria-labelledby="home-tab">

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>1929057</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Srijan Verma</p>
                    </div>
                  </div>

                </div>

                <div className='tab-pane fade show' id="profile" role="tabpanel" aria-labelledby="profile-tab">

                  <div className="row mt-3">
                      <div className="col-md-6">
                      <label>Internship</label>
                    </div>
                    <div className="col-md-6">
                      <p>EpikInDiFi</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label>Coding Platform</label>
                    </div>
                    <div className="col-md-6">
                      <p>Leetcode</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    
  )
}

export default About