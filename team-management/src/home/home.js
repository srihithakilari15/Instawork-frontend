import { Link } from "react-router-dom";
import Header from "../general/header";
import Member from "../general/member";
import './home.scss';
function Home() {
  const members =[
    {'name':'Srihitha Kilari', 'phone_no':'123-344-2342','email':'kilari.s@northeastern.edu', "profile_pic":'default-img.jpeg'},
    {'name':'Srihitha Kilari', 'phone_no':'123-344-2342','email':'kilari.s@northeastern.edu', "profile_pic":'default-img.jpeg'},
    {'name':'Srihitha Kilari', 'phone_no':'123-344-2342','email':'kilari.s@northeastern.edu', "profile_pic":'default-img.jpeg'}
  ]

  const headerConfig={};
  headerConfig.title = "Team members";
  headerConfig.desc = `You have ${members.length} team members.`

  const memberEls = members.map(mem => <Member {...{'member':mem}}/>)
  return (
    <>
      <div className="add-btn-container">
        <span className="add-btn"><Link to="/add">+</Link></span>
      </div>
      <div className="container">
        <Header {...headerConfig}/>
        {memberEls}
      </div>
    </>
  );
}

export default Home;
