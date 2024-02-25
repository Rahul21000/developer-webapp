import "./Header.css";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Header() {
  return (
    <div className="header">
      <h1>Best Website builders in the US</h1>
      <hr />
      <div className="content-update">
        <p>
          <span>
            <CheckCircleOutlineOutlinedIcon
              sx={{ color: "#4B5665", fontWeight: 100 }}
            />
          </span>
          <span>Last Updated - Febuary 22,2020</span>
          <span className="date">
            <ErrorOutlineOutlinedIcon />
          </span>
          <span>Advertising Disclosure</span>
        </p>
        <p>
          <span>Top Relevant</span>
          <span>
            <ExpandMoreIcon />
          </span>
        </p>
      </div>
      <hr />

      <ul className="btn">
        <li>Tools</li>
        <li>AWS Builder</li>
        <li>Start Build</li>
        <li>Build supplies</li>
        <li>Tooling</li>
        <li>BlueHosting</li>
      </ul>
      <nav>
        <span>Home</span>
        <span>Hosting for all</span>
        <span>Hosting</span>
        <span>Hosting6</span>
        <span>Hosting5</span>
      </nav>
    </div>
  );
}

export default Header;
