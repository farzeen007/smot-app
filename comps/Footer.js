import React from "react";
// import styles from "../styles/globals.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_links_container">
        <ul>
          <li>
            <a
              href="#"
              style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19.36px",
                color: "#3a3a3a ",
                opacity: 1,
              }}
            >
              Document Service
            </a>
          </li>
          <li>
            <a href="#">Apply Travel Document</a>
          </li>
          <li>
            <a href="#">Apply for VISA</a>
          </li>
          <li>
            <a href="#">Apply for Aadhar</a>
          </li>
          <li>
            <a href="#">Apply for PAN</a>
          </li>
          <li>
            <a href="#">Apply for Voter ID</a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19.36px",
                color: "#3a3a3a ",
                opacity: 1,
              }}
              href="#"
            >
              Explore the Destinations
            </a>
          </li>
          <li>
            <a href="#">Domestic Tour</a>
          </li>
          <li>
            <a href="#">International Tour</a>
          </li>
          <li>
            <a href="#">Group Tour Package</a>
          </li>
          <li>
            <a href="#">Corporate Tours</a>
          </li>
          <li>
            <a href="#">Destination Wedding</a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19.36px",
                color: "#3a3a3a ",
                opacity: 1,
              }}
              href="#"
            >
              Study Abroad
            </a>
          </li>
          <li>
            <a href="#">Study in Canada</a>
          </li>
          <li>
            <a href="#">Study in USA</a>
          </li>
          <li>
            <a href="#">Study in New Zealand</a>
          </li>
          <li>
            <a href="#">Study in Germany</a>
          </li>
          <li>
            <a href="#">Study in France</a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19.36px",
                color: "#3a3a3a ",
                opacity: 1,
              }}
              href="#"
            >
              Work Abroad
            </a>
          </li>
          <li>
            <a href="#">Jobs in UK</a>
          </li>
          <li>
            <a href="#">Jobs in Singapore</a>
          </li>
          <li>
            <a href="#">Jobs in Croatia</a>
          </li>
          <li>
            <a href="#">Jobs in Bahrain</a>
          </li>
          <li>
            <a href="#">Jobs in Greece</a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              style={{
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "19.36px",
                color: "#3a3a3a ",
                opacity: 1,
              }}
              href="#"
            >
              IT Service
            </a>
          </li>
          <li>
            <a href="#">Web Design & Development</a>
          </li>
          <li>
            <a href="#">Software Development</a>
          </li>
          <li>
            <a href="#">Mobile App Development</a>
          </li>
          <li>
            <a href="#">DIgital Marketing</a>
          </li>
          <li>
            <a href="#">Search Engine Optimisation</a>
          </li>
        </ul>
      </div>
      <div className="footer_middle_container">
        <div className="footer_middle">
          <div className="footer_middle_title">Corporate Address</div>
          <div>SmotPro India Pvt. Ltd.</div>
          <div>#1308, Shetty Plaza,</div>
          <div>Jeevan Bhima Nagar Main Road,</div>
          <div>Bengaluru - 560008, Karnataka, India.</div>
          <div className="footer_middle_whatsapp">
            <img src="./whatsapp.png" />
          </div>
        </div>
        <div className="footer_middle2">
          <div className="footer_middle_title">Get Our App</div>
          <div style={{ marginTop: "10px" }}>
            <img
              style={{ marginRight: "20px", cursor: "pointer" }}
              src="./googleplay.png"
            />
            <img style={{ cursor: "pointer" }} src="./appstore.png" />
          </div>
          <div className="footer_middle_title">Stay Updated</div>
          <div className="footer_middle_txt">
            We will sent you updates on the latest happenings at SmotPro.
            Subscribe and stay connected with us.
          </div>
          <div className="footer_middle_email_container">
            <input
              className="footer_middle_email"
              type="email"
              placeholder="Enter your email id"
            />
            <span className="footer_middle_email_icon">
              <img src="./right.png" />
            </span>
          </div>
        </div>
        <div className="footer_customer">
          <div className="footer_middle_title">Customer Support</div>
          <div className="footer_customer_details_container">
            <div className="footer_customer_details">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{ display: "block", width: "100%" }}
                  src="./call.png"
                />
              </div>
              <div
                style={{
                  marginRight: "20px",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  color: "#3A3A3A",
                  cursor: "pointer",
                }}
              >
                +91 8880099371
              </div>
            </div>
            <div className="footer_customer_details">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{ display: "block", width: "100%" }}
                  src="./mail.png"
                />
              </div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  cursor: "pointer",
                  color: "#3A3A3A",
                }}
              >
                info@smotpro.com
              </div>
            </div>
          </div>
          <div>
            <div className="footer_socialmedia_title">Stay Connected</div>
            <div className="footer_socialmedia">
              <img src="./facebook.png" />
              <img src="./instagram.png" />
              <img src="./Vector.png" />
              <img src="./linkedin.png" />
              <img src="./pinterest.png" />
              <img src="./youtube.png" />
            </div>
          </div>
          <div>
            <div className="footer_locations_header">Our Locations</div>
            <div className="footer_locations">
              <span>Bengaluru</span>
              <span>Hyderabad</span>
              <span>Chennai</span>
              <span>Mumbai</span>
              <span>Andra Pradesh</span>
              <span>Tamilnadu</span>
              <br />
              <span>Delhi</span>
              <span>Gurgaon</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_decription">
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Partner With Us</a>
          </li>
          <li>
            <a href="#">Pricing Testimonials</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#"> Case Studies </a>
          </li>
          <li>
            <a href="#"> Blogs </a>
          </li>
          <li>
            <a href="#">News & Events </a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
        <p className="footer_decription_right">
          All trademarks, logos and names are properties of their respective
          owners. Unauthorized Copying, Usage, Publishing of our website
          contents prohibited. Use of this Web site constitutes acceptance of
          the our User Agreement, Cancellation & Refund and Privacy Policy.
        </p>
      </div>
      <div className="footer_bottom_border"></div>
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <div>
            <img src="./logo.png" />
          </div>
          <div className="footer_bottom_left_text">
            <div className="footer_bottom_left_text1">
              © 2023 SmotPro India Private Limited.
            </div>
            <div>All Rights Reserved.</div>
          </div>
        </div>
        <div className="footer_bottom_right">
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Refund & Cancellation</div>
          <div>Disclaimer Sitemap</div>
          <div>Sitemap</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
