import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = () => {
        onToggleShowContent()
      }

      const onShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <div>
            <input
              id="contentCheckbox"
              type="checkbox"
              className="checkbox-icon"
              value={showContent}
              onClick={onShowContent}
              defaultChecked
            />
            <label htmlFor="contentCheckbox" className="content-name">
              Content
            </label>
            <br />
            <input
              id="leftNavbarCheckbox"
              type="checkbox"
              className="checkbox-icon"
              value={showLeftNavbar}
              onClick={onShowLeftNavbar}
              defaultChecked
            />
            <label htmlFor="leftNavbarCheckbox" className="left-navbar-name">
              Left Navbar
            </label>
            <br />

            <input
              id="rightNavbarCheckbox"
              type="checkbox"
              className="checkbox-icon"
              value={showRightNavbar}
              onClick={onShowRightNavbar}
              defaultChecked
            />
            <label htmlFor="rightNavbarCheckbox" className="right-navbar-name">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
