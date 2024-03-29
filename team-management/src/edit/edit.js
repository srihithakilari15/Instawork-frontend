import { Link, useLocation } from 'react-router-dom';
import Header from '../general/header';
import MemberForm from '../memberForm/memberForm';
import './edit.scss'
import { useDispatch, useSelector } from "react-redux";
import { removeMember, updateMember } from '../state/member';

function Edit() {
  const dispatch = useDispatch();
  const info = useLocation();
  console.log(info);
  const members = useSelector(state => state.members);
  console.log(members);
  const member = members[info.state.id];
  console.log(member);
  const headerConfig={};
  headerConfig.title = 'Edit team member';
  headerConfig.desc = 'Edit email, location and role';
  const updateHandler = (member)=> {
    console.log(member);
    updateMember(info.state.id, member);
  }

  const deleteHandler = (member) => {
    console.log(member);
    removeMember(info.state.id);
  }

  return (
    <>
      <div className="action-btn-container">
        <span className="action-btn"><Link to="/home">x</Link></span>
      </div>
      <div className="container">
        <Header {...headerConfig}/>
        <MemberForm  {...{member}} showDelete={true} saveHandler={updateHandler} deleteHandler={deleteHandler}/>
      </div>
    </>
  );
}

export default Edit;
