import './header.scss'
import './general.scss'
function Header(props) {
  return (
    <>
    <div className="header-container">
      <div className="header-title">{props.title}</div>
      <div className="header-desc">{props.desc}</div>
    </div>
    <div className='divider-line'></div>
    </>
  );
}

export default Header;
