import React from "react";
import { format } from "date-fns";

const Header = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEEE, MMMM d, yyyy");
  return (
    <>
      <header className="new_header" style={{ backgroundColor: "#fff" }}>
        <div className="desktop_header">
          <div className="header-top" style={{ float: "left" }}>
            <div
              className="header-left"
              style={{ float: "none", position: "relative" }}
            >
              <div
                className="header-date"
                style={{ width: 215, float: "left", textAlign: "left" }}
              >
                <div
                  className="eng-date"
                  style={{ color: "black", fontSize: 14, }}
                >
                  {formattedDate}
                </div>
                <div className="today_top_links " style={{ marginTop: 5 }}>
                  <a
                    href="https://www.thenews.com.pk/today"
                    target="_blank"
          rel="noreferrer"
                    style={{
                      backgroundColor: "gray",
                      color: "#fff",
                      padding: 5,
                    }}
                  >
                    Today's Paper
                  </a>
                </div>
              </div>
              <div className="logo">
                <a className="open-section" href="/">
                  <img
                    src="https://www.thenews.com.pk/assets/front/images/Thenews-logo.svg"
                    width="150"
                    height="48"
                    alt="The News International"
                  />
                </a>
              </div>
              <div
                className="header-top-right"
                style={{ width: 215, float: "right", textAlign: "right" }}
              >
                <div
                  className="header-prayer-time"
                  style={{ color: "#000", fontSize: 14 ,margin:'0 10'}}
                >
                  <a
                    href="https://www.thenews.com.pk/prayer-time"
                    target="_blank"
          rel="noreferrer"
                    style={{ color: "#000" }}
                  >
                    Prayer Timing
                  </a>
                </div>
                <div className="today_top_links" style={{ marginTop: 5 }}>
                  <a
                    href="https://e.thenews.com.pk/"
                    target="_blank"
          rel="noreferrer"
                    style={{
                      backgroundColor: "#000",
                      color: "#fff",
                      padding: 5,
                    }}
                  >
                    Epaper
                  </a>
                </div>
              </div>
            </div>

         
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
