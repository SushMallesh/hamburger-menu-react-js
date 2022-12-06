import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        className="about-image sm-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
      <img
        className="about-image lg-about-image"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </>
)

export default About
