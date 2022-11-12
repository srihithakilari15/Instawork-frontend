import { Link, useNavigate } from "react-router-dom";
import Header from "../general/header";
import Member from "../general/member";
import './home.scss';
import './../general/general.scss';
import { useSelector } from "react-redux";
function Home() {
  const navigate=useNavigate();
  const members = useSelector(state => state.members);
  const headerConfig={};
  headerConfig.title = "Team members";
  headerConfig.desc = `You have ${members.length} team members.`
  const updateFn= (id) => {
    navigate('/edit',{state:{id}})
  }
  console.log(members);
  const memberEls = members.map((mem, idx) => <Member {...{'member':mem}} clickHandler={() => updateFn(idx)}/>)
  return (
    <>
      <div className="action-btn-container">
        <span className="action-btn"><Link to="/add">+</Link></span>
      </div>
      <div className="container">
        <Header {...headerConfig}/>
        {memberEls}
      </div>
    </>
  );
}

export default Home;
