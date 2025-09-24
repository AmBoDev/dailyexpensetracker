 import React,{useState}from 'react';
 import{toast,ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import {useNavigate} from 'react-router-dom';

 const Signup = () => {
  const navigate =useNavigate();
  const[formData,setFormData]=useState({
    FullName:' ',
     Email:' ',
     Password:' ',
  });
  const handleChange=(e)=>{
setFormData({[e.target.name]:e.target.value});
  };
   return (
    <div className="container mt-5">
    <div className="text-center mb-4">
      <h2>
      <i className="fas fa-user-plus me-2"></i>
        Signup 
      </h2>
      <p className='texxt-primary'>Create your account to start tracking expenses</p>
      
      </div>
      <form className='p-4 rounded shadow mx-auto' style={{maxWidth:'400px'}} >
  <div className='mb-3'>
    <label className='form-label'>Full Name</label>
    <div className='input-group'>
      <span className='input-group-text'>
        <i className='fa fa-user'></i>
      </span>
      <input
        type="text"
        name="FullName"
        className='form-control'
        required
        placeholder="ENTER YOUR FULL NAME"
        onChange={handleChange}
      />
    </div>
  </div>

  <div className='mb-3'>
    <label className='form-label'>Email</label>
    <div className='input-group'>
      <span className='input-group-text'>
        <i className='fa fa-envelope'></i>
      </span>
      <input
        type="email"
        name="Email"
        className='form-control'
        required
        placeholder="ENTER YOUR EMAIL"
        onChange={handleChange}/>
    </div>
    </div>
    <div className='mb-3'>
    <label className='form-label'>Password</label>
    <div className='input-group'>
      <span className='input-group-text'>
        <i className='fa fa-envelope'></i>
      </span>
      <input
        type="Password"
        name="Password"
        className='form-control'
        required
        placeholder="ENTER PASSWORD"
        onChange={handleChange}
      />
    </div>
 </div>.
 <button type="submit" className='btn-btn-primary w-100 mt-3 ' ><i className="fas fa-user-plus me-2"></i>Signup</button>
</form>

    </div>
   )
 }
 
 export default Signup;
 