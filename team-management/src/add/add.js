import { Link } from 'react-router-dom';
import Header from '../general/header';
import MemberForm from '../memberForm/memberForm';
import './add.scss'
import {addMember} from './../state/member';
import { useDispatch } from 'react-redux';
function Add(props) {
  const dispatch = useDispatch();
  const headerConfig={};
  headerConfig.title = 'Add a team member';
  headerConfig.desc = 'Set email, location and role';

  const saveHandler = (member) => {
    console.log(member);
    
    dispatch(addMember(member));
  }
  return (
    <>
      <div className="action-btn-container">
        <span className="action-btn"><Link to="/home">x</Link></span>
      </div>
      <div className="container">
        <Header {...headerConfig}/>
        <MemberForm saveHandler={saveHandler}/>
      </div>
    </>
  );
}

export default Add;
