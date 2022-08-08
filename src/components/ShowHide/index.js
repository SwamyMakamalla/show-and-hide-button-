// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {mode: true}

  onShowHide = () => {
    const {mode} = this.state
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  onHideShow = () => {
    const {mode} = this.state
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    let authButton
    if (mode) {
      authButton = {firstName: null, lastName: null}
    } else {
      authButton = {
        firstName: <p className="name-card">Joe</p>,
        lastName: <p className="name-card">Jonas</p>,
      }
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="name-container">
            <button className="button" type="button" onClick={this.onShowHide}>
              Show/Hide Firstname
            </button>
            {authButton.firstName}
          </div>
          <div className="name-container">
            <button className="button" type="button" onClick={this.onHideShow}>
              Show/Hide Lastname
            </button>
            {authButton.lastName}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
