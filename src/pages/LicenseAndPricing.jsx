import { HeroLicense } from '../components/hero/HeroLicense';
import { LicensesPricingComp } from '../components/pricing';
import MainLayout from '../layouts/MainLayout';

export default function LicenseAndPricing() {
  return (
    <MainLayout>
      <HeroLicense />
      <section className="section">
        <div className="container">
          <div className="mx-auto">
            <header>
              <h1>
                <span className="text-primary">Individually</span> tailored to
                you!
              </h1>
            </header>
            <LicensesPricingComp />
          </div>
        </div>
      </section>
      <section className="section bg-neutral-100">
        <div className="container">
          <article className="grid">
            <div className="g-col-12 g-col-xl-8 g-start-xl-3 px-4">
              <div className="ym-content">
                <header>
                  <h2>Haben Sie Fragen zu unserem Angebot?</h2>
                </header>

                <div className="lead">
                  <p>
                    Dann rufen Sie uns an oder schreiben Sie uns eine Nachricht.
                    <br />
                    Telefonisch sind wir Mo.–Fr. von 9:00 bis 18:00 Uhr
                    erreichbar.
                  </p>
                </div>
              </div>

              <div className="grid pt-4">
                <div className="g-col-12 g-col-md-6">
                  <div className="ym-contact is-vertical">
                    <div className="ym-contact--media">
                      <svg className="icon">
                        <use xlinkHref="#svg-avatar-circle-michael"></use>
                      </svg>
                    </div>
                    <div className="ym-contact--body">
                      <h3>Michael Hoffmann</h3>
                      <p>Gründer generation:l</p>
                      <p>
                        Telefon:{' '}
                        <a href="tel:+4969999993251">+49 (0) 69 999 993 250</a>
                        <br />
                        E-Mail:{' '}
                        <a href="mailto:info@azubiweb.com">info@azubiweb.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="g-col-12 g-col-md-6">
                  <div className="ym-contact is-vertical">
                    <div className="ym-contact--media">
                      <svg className="icon">
                        <use xlinkHref="#svg-avatar-circle-heike"></use>
                      </svg>
                    </div>
                    <div className="ym-contact--body">
                      <h3>Heike Peters</h3>
                      <p>Project Managerin pizza:web</p>
                      <p>
                        Telefon:{' '}
                        <a href="tel:+4969999993251">+49 (0) 69 999 993 251</a>
                        <br />
                        E-Mail:{' '}
                        <a href="mailto:info@azubiweb.com">info@azubiweb.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </MainLayout>
  );
}
