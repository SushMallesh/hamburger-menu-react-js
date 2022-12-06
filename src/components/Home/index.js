import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />

    <div className="home-container">
      <img
        className="home-image sm-home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="home-image lg-home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </>
)

export default Home
