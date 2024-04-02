import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import bg2 from "../assets-n/img/photos/bg38.jpg";
import bg1 from "../assets-n/img/photos/bg37.jpg";

function Home() {
  return (
    <div>
      <Header />
      <section
        className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-gray"
        style={{ backgroundImage: `url(${bg1})` }}>
        <div className="container pt-17 pb-15 py-sm-17 py-xxl-20">
          <div className="row">
            <div className="col-md-12  text-center text-sm-start">
              <h2 className="display-1 fs-56 mb-4 mt-0 mt-lg-5 ls-xs pe-xl-5 pe-xxl-0">
                Welcome to TechFusor
                {/* <span className="underline-3 style-3 yellow">easier</span> */}
              </h2>
              <p className="lead fs-23 lh-sm mb-7 pe-lg-5 pe-xl-5 pe-xxl-0">
                Where Tech Minds Unite!
              </p>
              <div>
                <a href="#" className="btn btn-lg btn-primary rounded">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container py-15 py-md-17">
          <div className="row text-center">
            <div className="col-md-11  mx-auto">
              <h2 className="fs-15 text-uppercase text-muted mb-3">
                Hey Tech Enthusiasts!
              </h2>
              <h3 className="display-3 ls-sm mb-9 px-xl-11">
                Welcome to TechFusor, your go-to spot for all things tech and
                community vibes. Whether you're a DevOps ninja, a coding wizard,
                a UI/UX design maestro, or just love tinkering with technology,
                you're in the right place.
              </h3>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-8">
            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src=""
                    className="svg-inject icon-svg icon-svg-md text-blue me-5 mt-1"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="fs-20 ls-sm">24/7 Support</h4>
                  <p className="mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src=""
                    className="svg-inject icon-svg icon-svg-md text-yellow me-5 mt-1"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="fs-20 ls-sm">Secure Payments</h4>
                  <p className="mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src="assets/img/icons/lineal/cloud-computing-2.svg"
                    className="svg-inject icon-svg icon-svg-md text-orange me-5"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="fs-20 ls-sm">Daily Updates</h4>
                  <p className="mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src="assets/img/icons/lineal/analytics.svg"
                    className="svg-inject icon-svg icon-svg-md text-pink me-5"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="fs-20 ls-sm">Market Research</h4>
                  <p className="mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src="assets/img/icons/lineal/chat-2.svg"
                    className="svg-inject icon-svg icon-svg-md text-green me-5 mt-1"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="fs-20 ls-sm">Social Engagement</h4>
                  <p className="mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="d-flex flex-row">
                <div>
                  <img
                    src="assets/img/icons/lineal/megaphone.svg"
                    className="svg-inject icon-svg icon-svg-md text-purple me-5 mt-1"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="fs-20 ls-sm">Content Marketing</h4>
                  <p className="mb-0">
                    Duis mollis gravida commodo id luctus erat porttitor ligula,
                    eget lacinia odio sem aget elit nullam quis risus eget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-gray position-relative min-vh-60 d-lg-flex align-items-center">
        <div
          className="col-lg-6 position-lg-absolute top-0 start-0 image-wrapper bg-image bg-cover h-100"
          style={{ backgroundImage: `url(${bg2})` }}>
          <div className="divider text-gray divider-v-end d-none d-lg-block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 1200">
              <g />
              <g>
                <g>
                  <polygon
                    fill="currentColor"
                    points="48 0 0 0 48 1200 54 1200 54 0 48 0"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6 ms-auto">
              <div className="pt-13 pb-15 pb-md-17 py-lg-16 ps-lg-15 pe-xxl-16">
                <h2 className="fs-15 text-uppercase text-muted mb-3">
                  How It Works?
                </h2>
                <h3 className="display-3 ls-sm mb-7">
                  Here are the 3 working steps on success.
                </h3>
                <div className="d-flex flex-row mb-5">
                  <div>
                    <img
                      src="assets/img/icons/lineal/light-bulb.svg"
                      className="svg-inject icon-svg icon-svg-md text-blue me-5 mt-1"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="fs-20 ls-sm">Collect Ideas</h4>
                    <p className="mb-0">
                      Nulla vitae elit libero pharetra augue dapibus. Praesent
                      commodo cursus.
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row mb-5">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/pie-chart-2.svg"
                      className="svg-inject icon-svg icon-svg-md text-green me-5 mt-1"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="fs-20 ls-sm">Data Analysis</h4>
                    <p className="mb-0">
                      Vivamus sagittis lacus vel augue laoreet. Etiam porta sem
                      malesuada magna.
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="./assets/img/icons/lineal/design.svg"
                      className="svg-inject icon-svg icon-svg-md text-yellow me-5 mt-1"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="fs-20 ls-sm">Magic Touch</h4>
                    <p className="mb-0">
                      Cras mattis consectetur purus sit amet. Aenean lacinia
                      bibendum nulla sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
