import "../css/footer.css";




const Footer = () => {
    return(
        <>
        <div id="footer">
          <div>www.bsbbbbdskdshshdbvshbdhcbxjbjdj.com</div>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Dog Food Company. All rights reserved.
          </div>
        </div>
        </>
    )
}
export default Footer;