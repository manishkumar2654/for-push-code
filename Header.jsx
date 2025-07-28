import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart, FaUser, FaSearch, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import logo from '../images/l1.jpg';
import "../css/header.css";


const Header = () => {
  const cartData = useSelector(state => state.mycart.cart);
  const cartLength = cartData.length;
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="clothing-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <img src={logo} alt="StyleSphere" className="logo-img" />
        </Navbar.Brand>
        
        <div >
               <Nav.Link as={Link} to="/search"><FaSearch /> </Nav.Link>
        
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/male" className="nav-link">Men</Nav.Link>
            <Nav.Link as={Link} to="/female" className="nav-link">Women</Nav.Link>
            <Nav.Link as={Link} to="/kids" className="nav-link">Kids</Nav.Link>
            
            <Nav.Link as={Link} to="/sale" className="nav-link sale-link">Sale</Nav.Link>
          </Nav>

          <div className="user-actions">
            {username ? (
              <div className="auth-buttons">
               
                <button className="auth-btn logout-btn" onClick={logout}>
                  <FaSignOutAlt className="icon" /> Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                
                <button className="auth-btn signup-btn" onClick={() => navigate("/signup")}>
                  <FaUser className="icon" /> Login/Singup
                </button>
              </div>
            )}

            <div 
              className="cart-icon-container" 
              onClick={() => navigate("/cartdata")}
              title="Shopping Cart"
            >
              <FaShoppingCart className="cart-icon" />
              {cartLength > 0 && <span className="cart-badge">{cartLength}</span>}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;