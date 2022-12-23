import React from "react";

function Footer() {
  return (
    <div id="footer">
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            {/* <span>Get connected with us on social networks:</span> */}
          </div>

          <div>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>Zip Cart
                </h6>
                <p>
                  Zip kart Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road,
                  Devarabeesanahalli Village, Pune, 560103, Maharashtra, India
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Payment
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Shiping
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Report
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Facebbok
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Twitter
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    YouTube
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    LinkedIn
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Pune, MH
                  10012, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  info@zipcart.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> + 91 934
                  567 8800
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> + 91 923
                  567 8954
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 background">
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            ZipCart.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
