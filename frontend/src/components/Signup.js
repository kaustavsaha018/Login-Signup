import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
const axios = require('axios').default;

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"", email:"", phone:"", work:"", password:"", confirmPassword:""
  });
  
  let name, value;
  const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }

  const PostData = async (e)=>{
    e.preventDefault();
    const {name, email, phone, work, password, confirmPassword} = user;

    axios.post('http://localhost:5000/register', {
      name, email, phone, work, password,confirmPassword
    })
    .then(function (response) {
      console.log(response);
      window.alert("Registration Successful!");
      console.log("Registration Successful!");
      navigate("/login");
    })
    .catch(function (error) {
      console.log(error);
      window.alert("Invalid Registration!");
      console.log("Invalid Registration!");
    });
  }

  return (
    <>
    <h2 className='m-3 text-center'>SIGNUP PAGE</h2>
    <div className="col-md-6 mb-md-0 mb-2 mx-auto">
    <form className="m-5" id='register-form' method='POST'>
    
    <div className="form-group mb-3">
    <label htmlFor="name">Name</label>
    <input type="text" name='name' className="form-control" id="name" placeholder="Enter Your Name" autoComplete="off"
     value={user.name} onChange={handleInputs}
    />
  </div>

  <div className="form-group mb-3">
    <label htmlFor="email">Email</label>
    <input type="email" name='email' className="form-control" id="email" placeholder="Enter Your Email" autoComplete="off"
     value={user.email} onChange={handleInputs}
    />
  </div>

  <div className="form-group mb-3">
    <label htmlFor="phone">Phone</label>
    <input type="number" name='phone' className="form-control" id="phone" placeholder="Enter Your Phone" autoComplete="off"
     value={user.phone} onChange={handleInputs}
    />
  </div>

  <div className="form-group mb-3">
    <label htmlFor="work">Work</label>
    <input type="text" name='work' className="form-control" id="work" placeholder="Enter Your Profession" autoComplete="off"
     value={user.work} onChange={handleInputs}
    />
  </div>
  
  <div className="form-group mb-3">
    <label htmlFor="password">Password</label>
    <input type="password" name='password' className="form-control" id="password" placeholder="Enter Your Password" autoComplete="off"
     value={user.password} onChange={handleInputs}
    />
  </div>

  <div className="form-group mb-3">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" name='confirmPassword' className="form-control" id="confirmPassword" placeholder="Confirm Your Password" autoComplete="off"
     value={user.confirmPassword} onChange={handleInputs}
    />
  </div>

  <div className="form-group mb-3">
    <input type="submit" name='signup' className="btn btn-primary" id="signup" value="Register" onClick={PostData} />
    <Link className="m-2" to="/login">Already a User</Link>
  </div>
  
</form>
</div>
</>
  )
}

export default Signup