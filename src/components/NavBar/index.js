import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="navbar-options">
        <li className="nav-option">
          <p>
            Score: <span className="score-highlight">{score}</span>
          </p>
        </li>
        <li className="nav-option score-highlight">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
