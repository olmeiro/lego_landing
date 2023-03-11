import '../styles/NavBar.css';

function NavBar() {
  return (
  <>
      <nav className="navbar">
        <div className="navbar__content">
          <img src="https://i.ibb.co/MMmDPXN/lego.png" alt="logo lego" />
            <ul>
              <li>
                <a href="/">EXCLUSIVOS</a>
              </li>
              <li>
                <a href="/">NUEVOS</a>
              </li>
              <li>
                <a href="/">GIFT CARDS</a>
              </li>
              <li>
                <a href="/">FIND STORE</a>
              </li>
            </ul>
        </div>
      </nav>
  </>
  )
}
export default NavBar