import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-menu">
              <h1 className="menu-heading">Left Navbar Menu</h1>
              <ul className="list-container">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="left-navbar-menu">
              <h1 className="menu-heading">Content</h1>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim and minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-navbar-menu">
              <h1 className="menu-heading">Right Navbar Menu</h1>
              <div className="box1">Ad 1</div>
              <div className="box2">Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
