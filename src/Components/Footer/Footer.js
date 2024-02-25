import "./Footer.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-menu">
        <h4>Categories</h4>
        <ul>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div className="footer-menu">
        <h4>Contact</h4>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Term of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="footer-menu last-menu">
        <h4 className="more">
          <span>United State</span>
          <span>
            <ExpandMoreIcon sx={{ fontSize: "0.8rem" }} />
          </span>
        </h4>
      </div>
    </div>
  );
}

export default Footer;
