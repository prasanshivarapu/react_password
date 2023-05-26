import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Passwordlist from '../passwordlist'

import './index.css'

class Passwordtext extends Component {
  state = {
    passlist: [],
    inputtext1: '',
    inputtext2: '',
    inputtext4: '',
    isrun: false,
    inputtext3: '',
  }

  input1 = event => {
    this.setState({inputtext1: event.target.value})
  }

  input2 = event => {
    this.setState({inputtext2: event.target.value})
  }

  input3 = event => {
    this.setState({inputtext3: event.target.value})
  }

  submit = event => {
    event.preventDefault()

    const {inputtext1, inputtext2, inputtext3} = this.state
    if (inputtext1 !== '' && inputtext2 !== '' && inputtext3 !== '') {
      const passlists = {
        id: uuidv4(),
        name: inputtext1,
        pass: inputtext2,
        word: inputtext3,
      }

      this.setState(p => ({
        passlist: [...p.passlist, passlists],
        inputtext1: '',
        inputtext2: '',
        inputtext3: '',
      }))
    } else {
      // eslint-disable-next-line
      alert('Please fill all details')
    }
  }

  checkboxing = () => {
    this.setState(p => ({isrun: !p.isrun}))
  }

  search = event => {
    this.setState({inputtext4: event.target.value})
  }

  type = () => {
    const {inputtext4, passlist} = this.state
    const hap = passlist.filter(each => each.name.includes(inputtext4))
    return hap
  }

  todo = id => {
    const {passlist} = this.state
    const filterd = passlist.filter(each => each.id !== id)
    this.setState({passlist: filterd})
  }

  render() {
    const {isrun, inputtext1, inputtext3, inputtext2} = this.state
    const typ = this.type()
    const pwlength = typ.length
    return (
      <div className="greet1">
        <div>
          <h1>
            Password <br /> managar
          </h1>
        </div>
        <div className="greet22">
          <img
            className="imagesmall"
            alt="avatar"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          />

          <form className="greet2" onSubmit={this.submit}>
            <h1 className="heading">Add new password</h1>
            <input
              type="text"
              value={inputtext1}
              className="input1"
              placeholder="website"
              onChange={this.input1}
            />
            <input
              type="text"
              value={inputtext2}
              className="input2"
              placeholder="name"
              onChange={this.input2}
            />
            <input
              type="password"
              className="input3"
              placeholder="password"
              value={inputtext3}
              onChange={this.input3}
            />
            <button type="submit" className="adding">
              add
            </button>
          </form>

          <img
            className="image1"
            alt="avatar"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="greet8">
          <div className="preet2">
            <p className="para">Your Password {pwlength}</p>
            <input
              type="search"
              placeholder="search"
              onChange={this.search}
              className="search"
            />
          </div>

          <hr />
          <div className="checkbox">
            <label htmlFor="pass" className="show">
              {' '}
              show password
            </label>
            <input
              id="pass"
              type="checkbox"
              className="checkboxw"
              onChange={this.checkboxing}
            />
          </div>
          {pwlength === 0 ? (
            <div className="center">
              <img
                alt="avatar"
                className="nopw"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
              />
              <div className="emoji">
                <h1 className="noo">No Password</h1>
                <img
                  alt="avatar"
                  className="pocket"
                  src="https://res.cloudinary.com/dmsyxfq2h/image/upload/v1685084375/pensive-face_1f614_ei88gr.gif"
                />
              </div>
            </div>
          ) : (
            <ul className="preet1">
              {typ.map(each => (
                <Passwordlist
                  happy={each}
                  todo={this.todo}
                  run={isrun}
                  pwlength1={pwlength}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Passwordtext
