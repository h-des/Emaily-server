import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{fontSize: 16}}>{label}</label>
      <input {...input} style={{marginBottom: '2px'}} />
      <div className="red-text" style={{marginBottom: '20px'}}>
        {touched && error} 
        </div>
    </div>
  )
};
