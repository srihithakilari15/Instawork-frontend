import React from 'react';
import './memberForm.scss';
import { useNavigate } from "react-router-dom";

function MemberForm(props) {
  console.log(props);
  const [member, updateMember] = React.useState({...props.member});
  const navigate = useNavigate();
  console.log(member);
  const saveMember = ()=>{
    props.saveHandler(member);
    navigate('/home');
  };
  const deleteMember = ()=>{
    props.deleteHandler(member);
    navigate('/home');
  }
  const del = props.showDelete;
  return (
    <div className='form-container'>
      <form className='form-el'>
        <label className='info-el'> Info</label>
        <input type="text" required placeholder='First Name' className='input-el' onChange={(e) => updateMember({...member,first_name:e.target.value})} value={member.first_name}/>
        <input type="text" required placeholder='Last Name' className='input-el' onChange={(e) => updateMember({...member,last_name:e.target.value})} value={member.last_name}/>
        <input type="text" required placeholder='Email' className='input-el' onChange={(e) => updateMember({...member,email:e.target.value})} value={member.email}/>
        <input type="text" required placeholder='Phone Number' className='input-el' onChange={(e) => updateMember({...member,phone_no:e.target.value})} value={member.phone_no}/>
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
