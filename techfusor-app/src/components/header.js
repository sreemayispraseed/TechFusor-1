import React from "react";

function header() {
  return (
    <div classNameName="wrapper bg-light">
      <nav className="navbar navbar-expand-lg classNameic transparent position-absolute navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <a href="./index.html">
              <img
                src="./assets/img/logo-dark.png"
                srcset="./assets/img/logo-dark@2x.png 2x"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">TechFusor</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    About-us
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Our Team
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown">
                    Projects
                  </a>
                  <div className="dropdown-menu dropdown-lg">
                    <div className="dropdown-lg-content">
                      <div>
                        <h6 className="dropdown-header">Project Pages</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a className="dropdown-item" href="./projects.html">
                              Projects I
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="./projects2.html">
                              Projects II
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="./projects3.html">
                              Projects III
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="./projects4.html">
                              Projects IV
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6 className="dropdown-header">Single Projects</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="dropdown-item"
                              href="./single-project.html">
                              Single Project I
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="./single-project2.html">
                              Single Project II
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="./single-project3.html">
                              Single Project III
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="./single-project4.html">
                              Single Project IV
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown">
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./blog.html">
                        Blog without Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./blog2.html">
                        Blog with Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./blog3.html">
                        Blog with Left Sidebar
                      </a>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown">
                        Blog Posts
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="dropdown-item" href="./blog-post.html">
                            Post without Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item" href="./blog-post2.html">
                            Post with Sidebar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item" href="./blog-post3.html">
                            Post with Left Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a
                    href="mailto:first.last@email.com"
                    className="link-inverse">
                    info@email.com
                  </a>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav className="nav social social-white mt-4">
                    <a href="#">
                      <i className="uil uil-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="uil uil-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="uil uil-dribbble"></i>
                    </a>
                    <a href="#">
                      <i className="uil uil-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="uil uil-youtube"></i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="navbar-other ms-lg-4">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info">
                  <i className="uil uil-info-circle"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-search">
                  <i className="uil uil-search"></i>
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end text-inverse"
        id="offcanvas-info"
        data-bs-scroll="true">
        <div className="offcanvas-header">
          <h3 className="text-white fs-30 mb-0">Sandbox</h3>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body pb-6">
          <div className="widget mb-8">
            <p>
              Sandbox is a multipurpose HTML5 template with various layouts
              which will be a great solution for your business.
            </p>
          </div>

          <div className="widget mb-8">
            <h4 className="widget-title text-white mb-3">Contact Info</h4>
            <address>
              {" "}
              Moonshine St. 14/05 <br /> Light City, London{" "}
            </address>
            <a href="mailto:first.last@email.com">info@email.com</a>
            <br /> 00 (123) 456 78 90
          </div>

          <div className="widget mb-8">
            <h4 className="widget-title text-white mb-3">Learn More</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="widget">
            <h4 className="widget-title text-white mb-3">Follow Us</h4>
            <nav className="nav social social-white">
              <a href="#">
                <i className="uil uil-twitter"></i>
              </a>
              <a href="#">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="#">
                <i className="uil uil-dribbble"></i>
              </a>
              <a href="#">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="#">
                <i className="uil uil-youtube"></i>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
