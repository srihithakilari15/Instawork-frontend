import './member.scss';
import './header.scss';
function Member(props) {
  return (
    <>
    <div className="member-container">
      <div className='profile-pic-container'>
        <img className='profile-pic' alt='profile-pic' src={require('../pics/'+props.member.profile_pic)}/>
      </div>
      <div className='member-details'>
        <span className='member-name'>
          {props.member.name}
        </span>
        <span className='member-phone-no'>
          {props.member.phone_no}
        </span>
        <span className='member-email'>
          {props.member.email}
        </span>
      </div>
    </div>
    <div className='divider-line'></div>
    </>
  );
}

export default Member;
