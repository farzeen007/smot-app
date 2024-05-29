import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      {/* left side */}
      <div className="logo">
        <img src="/logo.png" />
      </div>
      {/* right side */}
      <div className="nav-right_side">
        {/* first component */}
        <div className="nav-details">
          <div className="nav-details-flex">
            <div className="nav-img-container">
              <img className="nav-img" src="/docs.png" />
            </div>
            <div className="nav-right-text">Docs</div>
          </div>
          <div className="nav-details-flex">
            <div className="nav-img-container">
              <img className="nav-img" src="/tours.png" />
            </div>
            <div className="nav-right-text">Tours</div>
          </div>
          <div className="nav-details-flex">
            <div className="nav-img-container">
              <img className="nav-img" src="/study.png" />
            </div>
            <div className="nav-right-text">Study</div>
          </div>
          <div className="nav-details-flex">
            <div className="nav-img-container">
              <img className="nav-img" src="/jobs.png" />
            </div>
            <div className="nav-right-text">Job</div>
          </div>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
          <img className="nav-search-icon_background" src="/rectangle.png" />
          <img className="nav-search_icon" src="./search.png" />
        </div>
        <div className="nav-right_icon_links">
          <div>
            <img src="./menudots.png" />
          </div>
          <div className="nav-login_btn_conatiner">
            <img src="./lock.png" />
            <button className="nav-login_btn">
              <span>Login</span>
            </button>
          </div>
          <div className="nav-img-container">
            <img className="nav-img" src="./location.png" />
          </div>
          <div className="nav-img-container nav-whatsappicon">
            <img className="nav-img" src="./whatsappIcon.png" />
          </div>
          <div className="nav-img-container">
            <img className="nav-img" src="./phone.png" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
