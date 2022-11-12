import { Link, useLocation } from 'react-router-dom';
import Header from '../general/header';
import MemberForm from '../memberForm/memberForm';
import './edit.scss'

function Edit() {
  const info = useLocation();
  // const member = members[info.state.id];
  console.log(info);
  const headerConfig={};
  headerConfig.title = 'Edit team member';
  headerConfig.desc = 'Edit email, location and role';
  return (
    <>
      <div className="action-btn-container">
        <span className="action-btn"><Link to="/home">x</Link></span>
      </div>
      <div className="container">
        <Header {...headerConfig}/>
        <MemberForm  showDelete={true}/>
      </div>
    </>
  );
}

export default Edit;
