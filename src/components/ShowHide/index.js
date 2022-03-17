// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  switchMode1 = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  switchMode2 = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="card-container">
            <div className="card1">
              <button
                className="button"
                type="button"
                onClick={this.switchMode1}
              >
                Show/Hide Firstname
              </button>

              {firstName && <p className="name-card">Joe</p>}
            </div>

            <div className="card1">
              <button
                className="button"
                type="button"
                onClick={this.switchMode2}
              >
                Show/Hide Lastname
              </button>

              {lastName && <p className="name-card">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
