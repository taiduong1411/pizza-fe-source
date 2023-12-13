const Footer = () => {
  return (
    <footer className="global-footer pt-5 pb-4 bg-neutral-900 text-neutral-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-3 mb-4 mb-sm-0">
            <a className="navbar-brand" href="/" title="azubi:web">
              <svg>
                <use xlinkHref="#svg-logo"></use>
              </svg>
            </a>
          </div>
          <div className="col-12 col-sm-8">
            <div className="d-flex align-items-end">
              <h4 className="m-0 me-2">
                Phone <a href="tel:004969999993250"> +49 (0) 69 999 993 250</a>
              </h4>
              <p className="m-0">a product of Generation:L</p>
            </div>

            <hr />

            <nav className="nav nav-meta">
              <a href="/datenschutz">Data protection for individual users</a>
              <a href="/datenschutz-volumen">Data Protection Volume</a>
              <a href="/eula">EULA Single User</a>
              <a href="/eula-volumen">EULA Volume</a>
              <a href="/impressum">Imprint</a>
            </nav>

            <div className="d-flex align-items-center mt-4">
              <h4 className="m-0 me-2">APP Download</h4>
              <nav className="nav nav-app-store-badge">
                <a
                  className="nav-link is-padded"
                  target="_blank"
                  href="https://apps.apple.com/de/app/azubi-web/id975607737"
                  rel="noreferrer"
                >
                  <img
                    src="/build/images/app-store-apple.d5d0e551.svg"
                    alt="Apple App Store"
                    loading="lazy"
                  />
                </a>
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=late.de.azubiweb&amp;hl=de&amp;gl=US"
                  rel="noreferrer"
                >
                  <img
                    src="/build/images/app-store-google-play.a27f5ad7.png"
                    alt="Google Play Store"
                    loading="lazy"
                  />
                </a>
              </nav>
            </div>
          </div>
          <div className="d-none d-sm-block col-sm-1">
            <button className="btn btn-primary btn-circle" data-jumper="body">
              {' '}
              <svg className="icon">
                <use xlinkHref="#svg-icon-chevron-up"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
