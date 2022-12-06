import {Popup} from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="navbar-container">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button type="button" className="button">
            <GiHamburgerMenu size="32" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              onClick={() => close()}
              className="button close-button"
            >
              <IoMdClose size="32" />
            </button>
            <ul className="nav-links-list">
              <li className="nav-item">
                <Link to="/" className="link-item" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <h1>Home</h1>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="link-item" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <h1>About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
