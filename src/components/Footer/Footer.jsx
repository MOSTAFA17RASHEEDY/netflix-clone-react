import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <ul className="icons">
          <li className="icon">
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li className="icon">
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li className="icon">
            <i class="fa-brands fa-x-twitter"></i>
          </li>
          <li className="icon">
            <i class="fa-brands fa-youtube"></i>
          </li>
        </ul>
        <ul className="services">
          <li className="service">FAQ</li>
          <li className="service">Account</li>
          <li className="service">Investor Relations</li>
          <li className="service">Ways to Watch</li>
          <li className="service">Privacy</li>
          <li className="service">Corporate Information</li>
          <li className="service">Speed Test</li>
          <li className="service">Only on Netflix</li>
          <li className="service">Help Center</li>
          <li className="service">Media Center</li>
          <li className="service">Jobs</li>
          <li className="service">Terms of Use</li>
          <li className="service">Cookie Preferences</li>
          <li className="service">Contact Us</li>
          <li className="service">Legal Notices</li>
        </ul>
        <p>
          © {currentYear} Netflix-Clone{" "}
          <a
            href="https://www.linkedin.com/in/mostafa-rasheedy-2935221a2/"
            target="_blank"
          >
            Mostafa Rasheedy
          </a>{" "}
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
