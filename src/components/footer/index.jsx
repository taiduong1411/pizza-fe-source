import Logo from '../logo';

const Footer = () => {
  return (
    <footer className="global-footer pt-5 pb-4 bg-neutral-900 text-neutral-50">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-3 mb-4 sm:mb-0 flex justify-center items-center">
            <Logo className={'scale-150'} />
          </div>
          <div className="col-span-12 sm:col-span-8">
            <div className="flex items-end">
              <h4 className="m-0 my-2">
                Phone <a href="tel:004969999993250"> +49 (0) 69 999 993 250</a>
              </h4>
              <p className="m-2">a product of Generation:L</p>
            </div>

            <hr />

            <nav className="text-primary ">
              <a className="after:content-['.'] after:mx-1" href="/datenschutz">
                Data protection for individual users
              </a>
              <a
                className="after:content-['.'] after:mx-1"
                href="/datenschutz-volumen"
              >
                Data Protection Volume
              </a>
              <a className="after:content-['.'] after:mx-1" href="/eula">
                EULA Single User
              </a>
              <a
                className="after:content-['.'] after:mx-1"
                href="/eula-volumen"
              >
                EULA Volume
              </a>
              <a className="after:content-['.'] after:mx-1" href="/impressum">
                Imprint
              </a>
            </nav>

            <div className="offcanvas-section p-4 flex items-center">
              <h4>APP Download</h4>
              <nav className="flex">
                <a
                  className="p-2 is-padded"
                  target="_blank"
                  href="https://apps.apple.com/de/app/azubi-web/id975607737"
                  rel="noreferrer"
                >
                  <img
                    src="https://azubiweb.com/build/images/app-store-apple.d5d0e551.svg"
                    alt="Apple App Store"
                    loading="lazy"
                  />
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=late.de.azubiweb&amp;hl=de&amp;gl=US"
                  rel="noreferrer"
                >
                  <img
                    src="https://azubiweb.com/build/images/app-store-google-play.a27f5ad7.png"
                    alt="Google Play Store"
                    width={150}
                    loading="lazy"
                  />
                </a>
              </nav>
            </div>
          </div>
          <div className="d-none d-sm-block sm:col-span-1">
            <button
              className="btn btn-primary btn-circle"
              data-jumper="body"
            ></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
