import React from 'react';
import './memberForm.scss';
import { useNavigate } from "react-router-dom";

const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function MemberForm(props) {
  console.log(props);
  const [member, updateMember] = React.useState({...props.member, role:((props.member && props.member.role)?props.member.role:0)});
  const [validity, setValidity] = React.useState(
    {first_name:!!(member.first_name && member.first_name.length>0), 
      last_name:!!(member.last_name && member.last_name.length>0),
      email:!!(member.email && member.email.match(email_regex)), 
      phone_no:!!(member.phone_no && member.phone_no.length===10)
    });
  const navigate = useNavigate();
  console.log(member);
  const saveMember = (event)=>{
    event.preventDefault();
    if(Object.values(validity).indexOf(false)>-1){
      return;
    }
    props.saveHandler(member);
    navigate('/home');
  };
  const deleteMember = (event)=>{
    event.preventDefault();
    props.deleteHandler(member);
    navigate('/home');
  }
  const updateEmail = (event) => {
    const valid = event.target.value.match(email_regex);
    setValidity({...validity, email:!!valid});
    updateMember({...member,email:event.target.value})
  };
  const updatePhoneNo = (event) => {
    setValidity({...validity, phone_no:!!(event.target.value.length===10)});
    updateMember({...member,phone_no:event.target.value})
  };
  const updateFirstName = (event) => {
    setValidity({...validity, first_name:!!(event.target.value.length>0)});
    updateMember({...member,first_name:event.target.value})
  };
  const updateLastName = (event) => {
    setValidity({...validity, last_name:!!(event.target.value.length>0)});
    updateMember({...member,last_name:event.target.value})
  };
  const del = props.showDelete;
  return (
    <div className='form-container'>
      <form className='form-el' onsubmit="event.preventDefault()">
        <label className='info-el'> Info</label>
        <input type="text" required placeholder='First Name' className={validity.first_name?'input-el':'input-el invalid'} onChange={updateFirstName} value={member.first_name}/>
        <input type="text" required placeholder='Last Name' className={validity.last_name?'input-el':'input-el invalid'} onChange={updateLastName} value={member.last_name}/>
        <input type="text" required placeholder='Email' className={validity.email?'input-el':'input-el invalid'} onChange={updateEmail} value={member.email}/>
        <input type="number" minLength={10} maxLength={10} required placeholder='Phone Number' className={validity.phone_no?'input-el':'input-el invalid'} onChange={updatePhoneNo} value={member.phone_no}/>
        <label className='info-el'> Role</label>
        <div className='role-container'>
          <label className='role-name'>Regular - Can't delete members</label>
          <input className='role-opt' onChange={(e) => updateMember({...member,role:0})} checked={member.role===0} type="radio" value={1}/>
        </div>
        <div className='role-container'>
          <label className='role-name'>Admin - Can delete members</label>
          <input className='role-opt' onChange={(e) => updateMember({...member,role:1})} checked={member.role===1} type="radio" value={2} />
        </div>
        <div className={del?'btn-container multiple' : 'btn-container'}>
          {del && (<input type='submit' className='cancel-btn' onClick={deleteMember} value={'Delete'}/>)}
          <input type='submit' className='save-btn' onClick={saveMember} value={'Save'}/>
        </div>
        
      </form>
    </div>
  );
}

export default MemberForm;
