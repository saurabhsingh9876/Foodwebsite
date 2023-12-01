import { useState } from 'react';
import './chakout.css'

import './chakout.css';

function Chakout({setopenc,openc}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='ccart'>
      
      <p  style={{  fontSize: '45px', position: 'absolute', top: '0', left: '0', marginTop: '-6px', cursor: 'pointer',color:"#fff" }} onClick={()=>setopenc(!openc)}>
        x
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="creditCardNumber">Credit Card Number:</label>
          <input type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>

        <button type="submit" className='subb'>Submit</button>
      </form>
    </div>
  );
}

export default Chakout;
