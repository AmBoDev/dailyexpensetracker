
import React,{useState} from 'react';
import {toast,ToastContainer}from 'react-toastify';
import{useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate =useNavigate();
  const[formData,setFormData]=useState({
     Email:' ',
     Password:' ',
  });
  const handleChange=(e)=>{
setFormData({[e.target.name]:e.target.value});
  };
 const handlesubmit= async (e)=>{
   e.preventDefault();
   try{
    const response=await fetch('http://127.0.0.1:8000/api/signup',{
      method:'POST',
      header:{'Content-Type':'application/json'},
      body:JSON.stringify(formData)
    });
    const data=await response.json();
    if(response.status===200){
      toast.success('Login successfull!');
      localStorage.setItem('userId',data.userId);
      localStorage.setItem('userName',data.userName);

      setTimeout(()=>{
        navigate('/dashboard');

      },2000
      )
    }
    else{
      const data=await response.json();
      toast.error(data.message);
    }
   } catch(error){
     console.error('Error:',error);
     toast.error('Something went wrong.Try again ')
   }
      };
  return (
    <div className="container mt-5">
    <div className="text-center mb-4">
      <h2>
      <i className="fas fa-user-plus me-2"></i>
        Signup 
      </h2>
      <p className='texxt-primary'>Acess your expense dashboard</p>
      
      </div>
      <form className='p-4 rounded shadow mx-auto' 
      style={{maxWidth:'400px'}} onSubmit={handlesubmit} >
  

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
 <button type="submit" className='btn-btn-primary w-100 mt-3 ' ><i className="fas fa-user-plus me-2"></i>Login</button>
</form>

    </div>
  )
}

export default Login
