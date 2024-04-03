import React from "react";

function header() {
  return (
    <header class="wrapper bg-soft-primary">
      <nav class="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark caret-none">
        <div class="container flex-lg-row flex-nowrap align-items-center">
          <div class="navbar-brand w-100">
            {/* <a href="./index.html">
              <img
                class="logo-dark"
                src="./assets/img/logo.png"
                srcset="./assets/img/logo@2x.png 2x"
                alt=""
              />
              <img
                class="logo-light"
                src="./assets/img/logo-light.png"
                srcset="./assets/img/logo-light@2x.png 2x"
                alt=""
              />
            </a> */}
            <a class="text-white fs-30 mb-0" href="">
              TechFusor
            </a>
          </div>
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div class="offcanvas-header d-lg-none">
              <h3 class="text-white fs-30 mb-0">Sandbox</h3>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul class="navbar-nav">
                <li class="nav-item dropdown dropdown-mega">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown">
                    About-Us
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown">
                    Our Team
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown">
                    Projects
                  </a>
                  <div class="dropdown-menu dropdown-lg">
                    <div class="dropdown-lg-content">
                      <div>
                        <h6 class="dropdown-header">Project Pages</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a class="dropdown-item" href="./projects.html">
                              Projects I
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="./projects2.html">
                              Projects II
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="./projects3.html">
                              Projects III
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="./projects4.html">
                              Projects IV
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h6 class="dropdown-header">Single Projects</h6>
                        <ul class="list-unstyled">
                          <li>
                            <a
                              class="dropdown-item"
                              href="./single-project.html">
                              Single Project I
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="./single-project2.html">
                              Single Project II
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="./single-project3.html">
                              Single Project III
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item"
                              href="./single-project4.html">
                              Single Project IV
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown">
                    Blog
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="dropdown-item" href="./blog.html">
                        Blog without Sidebar
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item" href="./blog2.html">
                        Blog with Sidebar
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="dropdown-item" href="./blog3.html">
                        Blog with Left Sidebar
                      </a>
                    </li>
                    <li class="dropdown dropdown-submenu dropend">
                      <a
                        class="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown">
                        Blog Posts
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="dropdown-item" href="./blog-post.html">
                            Post without Sidebar
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="dropdown-item" href="./blog-post2.html">
                            Post with Sidebar
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="dropdown-item" href="./blog-post3.html">
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

              <div class="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:first.last@email.com" class="link-inverse">
                    info@email.com
                  </a>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav class="nav social social-white mt-4">
                    <a href="#">
                      <i class="uil uil-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="uil uil-dribbble"></i>
                    </a>
                    <a href="#">
                      <i class="uil uil-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="uil uil-youtube"></i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar-other w-100 d-flex ms-auto">
            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-info">
                  <i class="uil uil-info-circle"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas-search">
                  <i class="uil uil-search"></i>
                </a>
              </li>
              <li class="nav-item d-lg-none">
                <button class="hamburger offcanvas-nav-btn">
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-end text-inverse"
        id="offcanvas-info"
        data-bs-scroll="true">
        <div class="offcanvas-header">
          <h3 class="text-white fs-30 mb-0">Sandbox</h3>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body pb-6">
          <div class="widget mb-8">
            <p>
              Sandbox is a multipurpose HTML5 template with various layouts
              which will be a great solution for your business.
            </p>
          </div>

          <div class="widget mb-8">
            <h4 class="widget-title text-white mb-3">Contact Info</h4>
            <address>
              {" "}
              Moonshine St. 14/05 <br /> Light City, London{" "}
            </address>
            <a href="mailto:first.last@email.com">info@email.com</a>
            <br /> 00 (123) 456 78 90
          </div>

          <div class="widget mb-8">
            <h4 class="widget-title text-white mb-3">Learn More</h4>
            <ul class="list-unstyled">
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

          <div class="widget">
            <h4 class="widget-title text-white mb-3">Follow Us</h4>
            <nav class="nav social social-white">
              <a href="#">
                <i class="uil uil-twitter"></i>
              </a>
              <a href="#">
                <i class="uil uil-facebook-f"></i>
              </a>
              <a href="#">
                <i class="uil uil-dribbble"></i>
              </a>
              <a href="#">
                <i class="uil uil-instagram"></i>
              </a>
              <a href="#">
                <i class="uil uil-youtube"></i>
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-top bg-light"
        id="offcanvas-search"
        data-bs-scroll="true">
        <div class="container d-flex flex-row py-6">
          <form class="search-form w-100">
            <input
              id="search-form"
              type="text"
              class="form-control"
              placeholder="Type keyword and hit enter"
            />
          </form>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
      </div>
    </header>
  );
}

export default header;
