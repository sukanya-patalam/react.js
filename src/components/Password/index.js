import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import PasswordItem from '../PasswordItem'

class Password extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    userDetailsList: [],
    searchInput: '',
    isChecked: false,
  }

  onChangingCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onChangingWebsite = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  onChangingUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangingPassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onSearching = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickingAdd = event => {
    event.preventDefault()

    const {websiteInput, usernameInput, passwordInput} = this.state

    const newList = {
      id: v4(),
      websiteName: websiteInput,
      userName: usernameInput,
      password: passwordInput,
    }

    this.setState({
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    })

    this.setState(prevState => ({
      userDetailsList: [...prevState.userDetailsList, newList],
    }))
  }

  onDeletingItem = id => {
    const {userDetailsList} = this.state
    this.setState({
      userDetailsList: userDetailsList.filter(eachItem => eachItem.id !== id),
    })
  }

  renderPassword = () => {
    const {userDetailsList, searchInput, isChecked} = this.state

    const filteredList = userDetailsList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const items = (
      <ul>
        {filteredList.map(eachItem => (
          <PasswordItem
            key={eachItem.id}
            details={eachItem}
            onDeletingItem={this.onDeletingItem}
            isChecked={isChecked}
          />
        ))}
      </ul>
    )
    const img = (
      <div className="img">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="image1"
        />
        <p className="your-password">No Passwords</p>
      </div>
    )
    const res = userDetailsList.length > 0 ? items : img
    return res
  }

  render() {
    const {userDetailsList} = this.state
    const count = userDetailsList.length

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="entire-container">
          <div className="form-container">
            <div className="form-card">
              <h1 className="add-password-heading">Add New Password</h1>
              <form onSubmit={this.onClickingAdd}>
                <div className="enter-details">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />

                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input-bar"
                    onChange={this.onChangingWebsite}
                  />
                </div>

                <div className="enter-details">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />

                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input-bar"
                    onChange={this.onChangingUsername}
                  />
                </div>

                <div className="enter-details">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />

                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-bar"
                    onChange={this.onChangingPassword}
                  />
                </div>
                <div className="button-container">
                  <button type="submit" className="button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager"
              />
            </div>
          </div>
          <div className="form-container1">
            <div className="heading-input-container">
              <div className="count-container">
                <h1 className="your-password">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="enter-details">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon"
                />
                <input
                  type="search"
                  placeholder="Enter Website"
                  className="input-bar"
                  onChange={this.onSearching}
                />
              </div>
            </div>
            <hr />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                value="show"
                onChange={this.onChangingCheckbox}
              />
              <label htmlFor="checkbox">Show Passwords</label>
            </div>
            {this.renderPassword()}
          </div>
        </div>
      </div>
    )
  }
}

export default Password
