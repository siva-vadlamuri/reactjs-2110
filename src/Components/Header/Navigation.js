

function Navigation() {
    return (
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Blog</a>
        </li>
      </ul>
    )
}

export default Navigation
