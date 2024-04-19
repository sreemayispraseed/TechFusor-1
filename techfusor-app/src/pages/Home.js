import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import bg2 from "../assets-n/img/photos/bg38.jpg";
import Teams from "../components/teams";
import "../style/global.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Header />
      <section className="wrapper bg-dark ">
        <div
          className="wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500 bg-sec"
          style={{ backgroundImage: `url(${bg2})` }}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-md-10 col-lg-7 offset-md-1  offset-lg-0  text-center text-lg-start justify-content-center align-self-center align-items-start">
                <h2 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                  Welcome to TechFusor - Where Tech Minds Unite!
                </h2>
                <p className="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                  Welcome to TechFusor, your go-to spot for all things tech and
                  community vibes. Whether you're a DevOps ninja, a coding
                  wizard, a UI/UX design maestro, or just love tinkering with
                  technology, you're in the right place.
                </p>
                <div className="animate__animated animate__slideInUp animate__delay-3s">
                  <a
                    href="#"
                    className="btn btn-lg btn-outline-white rounded-pill">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper bg-light angled lower-end">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14  align-items-center">
            <div className="col-lg-6 position-relative order-lg-2">
              <div
                className="shape bg-dot primary rellax w-16 h-20"
                data-rellax-speed="1"
                style={{ top: "3rem", left: "5.5rem" }}></div>
              <div className="overlap-grid overlap-grid-2">
                <div className="item">
                  <figure className="rounded shadow">
                    <img
                      src="./assets/img/photos/about2.jpg"
                      srcSet="./assets/img/photos/about2@2x.jpg 2x"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="item">
                  <figure className="rounded shadow">
                    <img
                      src="./assets/img/photos/about3.jpg"
                      srcSet="./assets/img/photos/about3@2x.jpg 2x"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="./assets/img/icons/lineal/megaphone.svg"
                className="svg-inject icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h2 className="display-4 mb-3">Who Are We?</h2>
              <p className="lead fs-lg">
                We are a digital and branding company that believes in the power
                of creative strategy and along with great design.
              </p>
              <p className="mb-6">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <div className="row gy-3 gx-xl-8">
                <div className="col-xl-6">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Aenean eu leo quam ornare curabitur blandit tempus.
                      </span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Nullam quis risus eget urna mollis ornare donec elit.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li>
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Etiam porta sem malesuada magna mollis euismod.
                      </span>
                    </li>
                    <li className="mt-3">
                      <span>
                        <i className="uil uil-check"></i>
                      </span>
                      <span>
                        Fermentum massa vivamus faucibus amet euismod.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
              <img
                src="./assets/img/icons/lineal/list.svg"
                className="svg-inject icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h2 className="display-4 mb-4 px-lg-14">
                Check Out Our Projects
              </h2>
            </div>
          </div>
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="card me-lg-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">01</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Collect Ideas</h4>
                      <p className="mb-0">
                        Nulla vitae elit libero pharetra augue dapibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card ms-lg-13 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">02</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Data Analysis</h4>
                      <p className="mb-0">
                        Vivamus sagittis lacus vel augue laoreet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mx-lg-6 mt-6">
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                        <span className="number">03</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Finalize Product</h4>
                      <p className="mb-0">
                        Cras mattis consectetur purus sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 mb-3">Dive into the Tech Wonderland</h2>
              <p className="lead fs-lg pe-lg-5">
                Explore a variety of projects that cover everything from coding
                wonders to UI/UX masterpieces. We've got it all, and we want you
                to be a part of the magic
              </p>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Nullam quis risus eget urna mollis ornare.
              </p>
              <p className="mb-6">
                Nullam id dolor id nibh ultricies vehicula ut id elit.
                Vestibulum id ligula porta felis euismod semper. Aenean lacinia
                bibendum nulla sed consectetur. Sed posuere consectetur est at
                lobortis. Vestibulum id ligula porta felis.
              </p>
              <a href="#" className="btn btn-primary rounded-pill mb-0">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row mb-3">
            <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
              <img
                src="./assets/img/icons/lineal/team.svg"
                className="svg-inject icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h2 className="display-4 mb-3 px-lg-14">Our Team</h2>
            </div>
          </div>
          <div className="position-relative">
            <Slider {...settings}>
              <div>
                <Teams
                  teamImage={"./assets/img/avatars/te1.jpg"}
                  name={"Team 1"}
                  position={"Developer"}
                  description={"Lorem ipsum dolor sit "}
                />
              </div>
              <div>
                <Teams
                  teamImage={"./assets/img/avatars/te1.jpg"}
                  name={"Team 1"}
                  position={"Developer"}
                  description={"Lorem ipsum dolor sit "}
                />
              </div>

              <div>
                <Teams
                  teamImage={"./assets/img/avatars/te1.jpg"}
                  name={"Team 1"}
                  position={"Developer"}
                  description={"Lorem ipsum dolor sit "}
                />
              </div>
              <div>
                <Teams
                  teamImage={"./assets/img/avatars/te1.jpg"}
                  name={"Team 1"}
                  position={"Developer"}
                  description={"Lorem ipsum dolor sit "}
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
