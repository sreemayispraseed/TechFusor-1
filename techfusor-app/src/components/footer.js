import React from "react";
import { SocialIcon } from "react-social-icons";

function footer() {
  return (
    <div>
      <footer class="bg-gray">
        <div class="container py-13 py-md-15">
          <div class="d-lg-flex flex-row align-items-lg-center">
            <h3 class="display-3 ls-sm mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25">
              Join our community by using our services and grow your business.
            </h3>
            <a href="#" class="btn btn-lg btn-primary rounded mb-0 text-nowrap">
              Try It For Free
            </a>
          </div>

          <hr class="mt-11 mb-12" />
          <div class="row gy-6 gy-lg-0">
            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <img
                  class="mb-4"
                  src="./assets/img/logo-dark.png"
                  srcset="./assets/img/logo-dark@2x.png 2x"
                  alt=""
                />
                <p class="mb-4">
                  © 2022 Sandbox. <br class="d-none d-lg-block" />
                  All rights reserved.
                </p>
                <nav class="nav social social-muted">
                  <a href="#"></a>
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

            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <h4 class="widget-title ls-sm mb-3">Get in Touch</h4>
                <address class="pe-xl-15 pe-xxl-17">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a href="mailto:#" class="link-body">
                  techfusor@gmail.com
                </a>
              </div>
            </div>

            <div class="col-md-4 col-lg-3">
              <div class="widget">
                <h4 class="widget-title ls-sm mb-3">Learn More</h4>
                <ul class="list-unstyled text-reset mb-0">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-12 col-lg-3">
              <div class="widget">
                <h4 class="widget-title ls-sm mb-3">Our Newsletter</h4>
                <p class="mb-5">
                  Subscribe to our newsletter to get our news & deals delivered
                  to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
