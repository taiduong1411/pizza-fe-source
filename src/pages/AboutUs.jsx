import { clsx } from 'clsx';
import { AboutUsApproach } from '../data/about-us';
import MainLayout from '../layouts/MainLayout';

const AboutUs = () => {
  return (
    <MainLayout>
      <section className="section !py-0">
        <picture>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet="https://azubiweb.com/media/cache/w2880_webp/build/images/visual-head.5a91243f.webp 1x,
                        https://azubiweb.com/media/cache/w5760_webp/build/images/visual-head.5a91243f.webp 2x"
              type="image/webp"
            />
            <source
              media="(min-width: 1440px)"
              srcSet="https://azubiweb.com/media/cache/w2880_default/build/images/visual-head.5a91243f.jpg 1x,
                        https://azubiweb.com/media/cache/w5760_default/build/images/visual-head.5a91243f.jpg 2x"
            />
            <source
              media="(min-width: 768px)"
              srcSet="https://azubiweb.com/media/cache/w1440_webp/build/images/visual-head.5a91243f.webp 1x,
                        https://azubiweb.com/media/cache/w2880_webp/build/images/visual-head.5a91243f.webp 2x"
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet="https://azubiweb.com/media/cache/w1440_default/build/images/visual-head.5a91243f.jpg 1x,
                        https://azubiweb.com/media/cache/w2880_default/build/images/visual-head.5a91243f.jpg 2x"
            />
            <source
              srcSet="https://azubiweb.com/media/cache/w768_webp/build/images/visual-head-1by1.50343369.webp 1x,
                        https://azubiweb.com/media/cache/w1536_webp/build/images/visual-head-1by1.50343369.webp 2x"
              type="image/webp"
            />
            <img
              src="https://azubiweb.com/media/cache/w768_default/build/images/visual-head-1by1.50343369.jpg"
              alt="Visual"
              srcSet="https://azubiweb.com/media/cache/w1536_default/build/images/visual-head-1by1.50343369.jpg 2x"
            />
          </picture>
        </picture>
      </section>

      <section className="section ">
        <div className="container">
          <div className="mx-auto">
            <div className="ym-content">
              <header>
                <h1>
                  <span className="text-generationl-primary">generation:l</span>{' '}
                  - enjoyable education
                </h1>
              </header>

              <div className="lead">
                <p>
                  Generation:L develops your individual training and further
                  education events according to our slogan enjoyable education.
                  We achieve success through approaches that are fun,
                  sustainable and easy to understand.
                </p>
              </div>

              <p>
                The education sector continues to be on the move. Lifelong,
                age-independent and sustainable learning is on the rise and
                opens up the opportunity to realize innovative forms of
                knowledge transfer. Today, learning can be thought about and
                implemented in a completely new way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-900 text-neutral-50">
        <div className="container">
          <article className="mx-auto ym-content">
            <header>
              <h2>
                <span className="text-generationl-primary">Our approach</span> -
                this is how we proceed
              </h2>
            </header>
            <div className="">
              {AboutUsApproach.map((item, index) => (
                <div key={index}>
                  <div className={clsx('grid grid-cols-2 mt-12 gap-6')}>
                    {index % 2 != 0 ? (
                      <>
                        <div>
                          <picture>
                            <source
                              sizes="50vw"
                              srcSet={item.img.srcset}
                              type="image/webp"
                            />
                            <img
                              alt="GenerationL"
                              sizes="50vw"
                              src={item.img.src}
                              srcSet={item.img.srcset}
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                        </div>
                        <div>
                          <picture>
                            <source
                              sizes="50vw"
                              srcSet={item.img.srcset}
                              type="image/webp"
                            />
                            <img
                              alt="GenerationL"
                              sizes="50vw"
                              src={item.img.src}
                              srcSet={item.img.srcset}
                              loading="lazy"
                            />
                          </picture>
                        </div>
                      </>
                    )}
                  </div>
                  <hr className="my-5" />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="ym-person g-col-12 g-col-md-6 g-col-lg-4">
              <picture className="ym-person--media">
                <source
                  sizes="25vw"
                  srcSet="https://azubiweb.com/media/cache/w300_webp/build/images/team/michael-hoffmann.bfa74090.webp 300w, https://azubiweb.com/media/cache/w600_webp/build/images/team/michael-hoffmann.bfa74090.webp 600w, https://azubiweb.com/media/cache/w900_webp/build/images/team/michael-hoffmann.bfa74090.webp 900w"
                  type="image/webp"
                />
                <img
                  alt="Michael Hoffmann"
                  sizes="25vw"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/team/michael-hoffmann.bfa74090.jpg"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/team/michael-hoffmann.bfa74090.jpg 300w, https://azubiweb.com/media/cache/w600_default/build/images/team/michael-hoffmann.bfa74090.jpg 600w, https://azubiweb.com/media/cache/w900_default/build/images/team/michael-hoffmann.bfa74090.jpg 900w"
                  loading="lazy"
                />
              </picture>

              <div className="ym-person--body">
                <h3>Michael Hoffmann</h3>
                <p>
                  <strong>Founder generation:l</strong>
                </p>
                <ul>
                  <li>Hotel business economist, over 25 years in practice</li>
                  <li>15 years of global workforce development</li>
                  <li>Convinced Hessian, loves sun, beach and sea</li>
                </ul>
                <p>
                  <font>
                    {' '}
                    Phone:{' '}
                    <a href="tel:+4969999993250">+49 (0) 69 999 993 250</a>
                    <br /> E-mail:{' '}
                    <a
                      className="text-generationl-primary"
                      href="mailto:Michael.Hoffmann@generationl.de"
                    >
                      Michael.Hoffmann@generationl.de
                    </a>
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-100">
        <div className="container ">
          <div className="ym-content">
            <header>
              <h2>Unsere Partner</h2>
            </header>

            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <a
                  href="https://www.jre.eu/de/countries/deutschland"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <picture>
                      <source
                        sizes="50vw"
                        srcSet="https://azubiweb.com/media/cache/w300_webp/build/images/partner/jre-logo.4e67a97c.webp 300w, https://azubiweb.com/media/cache/w600_webp/build/images/partner/jre-logo.4e67a97c.webp 600w, https://azubiweb.com/media/cache/w900_webp/build/images/partner/jre-logo.4e67a97c.webp 900w, https://azubiweb.com/media/cache/w1200_webp/build/images/partner/jre-logo.4e67a97c.webp 1200w"
                        type="image/webp"
                      />
                      <img
                        alt="Jeunes Restaurateurs"
                        sizes="50vw"
                        src="https://azubiweb.com/media/cache/w300_default/build/images/partner/jre-logo.4e67a97c.png"
                        srcSet="https://azubiweb.com/media/cache/w300_default/build/images/partner/jre-logo.4e67a97c.png 300w, https://azubiweb.com/media/cache/w600_default/build/images/partner/jre-logo.4e67a97c.png 600w, https://azubiweb.com/media/cache/w900_default/build/images/partner/jre-logo.4e67a97c.png 900w, https://azubiweb.com/media/cache/w1200_default/build/images/partner/jre-logo.4e67a97c.png 1200w"
                        loading="lazy"
                      />
                    </picture>
                  </picture>
                </a>
              </div>
              <div className="col-span-8">
                <h3>Jeunes Restaurateurs</h3>
                <p>
                  Den Nachwuchs gut auszubilden und zu fördern ist ein zentrales
                  Anliegen der Jeunes Restaurateurs. Eine gute und solide
                  Ausbildung ist das sichere Fundament, auf dem unsere Idee von
                  Gastronomie beruht. Auch die größten Talente brauchen
                  Unterstützung und Hilfestellungen, um ihren Weg in die
                  Spitzengastronomie zu finden. JRE Deutschland ist unser
                  Partner für Lehrvideos im Bereich Küche und Service.
                </p>
                <p>
                  <a
                    className="text-generationl-primary"
                    href="https://www.jre.eu/de/countries/deutschland"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.jre.eu
                  </a>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <a
                  href="https://www.steigenberger-akademie.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <picture>
                      <source
                        sizes="50vw"
                        srcSet="https://azubiweb.com/media/cache/w300_webp/build/images/partner/steigenberger-akademie.481589fc.webp 300w, https://azubiweb.com/media/cache/w600_webp/build/images/partner/steigenberger-akademie.481589fc.webp 600w, https://azubiweb.com/media/cache/w900_webp/build/images/partner/steigenberger-akademie.481589fc.webp 900w, https://azubiweb.com/media/cache/w1200_webp/build/images/partner/steigenberger-akademie.481589fc.webp 1200w"
                        type="image/webp"
                      />
                      <img
                        alt="Steigenberger Akademie"
                        sizes="50vw"
                        src="https://azubiweb.com/media/cache/w300_default/build/images/partner/steigenberger-akademie.481589fc.png"
                        srcSet="https://azubiweb.com/media/cache/w300_default/build/images/partner/steigenberger-akademie.481589fc.png 300w, https://azubiweb.com/media/cache/w600_default/build/images/partner/steigenberger-akademie.481589fc.png 600w, https://azubiweb.com/media/cache/w900_default/build/images/partner/steigenberger-akademie.481589fc.png 900w, https://azubiweb.com/media/cache/w1200_default/build/images/partner/steigenberger-akademie.481589fc.png 1200w"
                        loading="lazy"
                      />
                    </picture>
                  </picture>
                </a>
              </div>
              <div className="col-span-8">
                <h3>Steigenberger Akademie</h3>
                <p>
                  Die Steigenberger Akademie ist seit 1948 eine der führenden
                  Hotelfachschulen in Deutschland. Unsere Leidenschaft ist die
                  Hotellerie und alles, was mit Reisen und Genuss zu tun hat.
                  Und: Mit derselben Leidenschaft wollen wir aus Teilnehmenden
                  unserer Ausbildungsgänge erfolgreiche Absolventen mit besten
                  Karrierechancen auf dem Arbeitsmarkt machen.
                </p>
                <p>
                  Der Weg dorthin kann so unterschiedlich sein wie Hotelgäste
                  und ihre Wünsche oder wie Traumziele in einem Reisekatalog.
                  Von Schulabgänger:innen und Berufseinsteiger:innen bis hin zu
                  Restaurant-, Tourismus- und Hotelfachleuten - die Branchen
                  Hotellerie und Tourismus bieten das wohl breiteste Spektrum an
                  spannenden Aus- und Weiterbildungsgängen mit ausgezeichneten
                  Perspektiven.
                </p>
                <p>
                  <a
                    className="text-generationl-primary"
                    href="https://www.steigenberger-akademie.de"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.steigenberger-akademie.de
                  </a>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <a
                  href="https://www.yakamara.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <picture>
                      <source
                        sizes="50vw"
                        srcSet="https://azubiweb.com/media/cache/w300_webp/build/images/partner/yakamara-logo.03c71736.webp 300w, https://azubiweb.com/media/cache/w600_webp/build/images/partner/yakamara-logo.03c71736.webp 600w, https://azubiweb.com/media/cache/w900_webp/build/images/partner/yakamara-logo.03c71736.webp 900w, https://azubiweb.com/media/cache/w1200_webp/build/images/partner/yakamara-logo.03c71736.webp 1200w"
                        type="image/webp"
                      />
                      <img
                        alt="Yakamara Media GmbH &amp; Co. KG"
                        sizes="50vw"
                        src="https://azubiweb.com/media/cache/w300_default/build/images/partner/yakamara-logo.03c71736.png"
                        srcSet="https://azubiweb.com/media/cache/w300_default/build/images/partner/yakamara-logo.03c71736.png 300w, https://azubiweb.com/media/cache/w600_default/build/images/partner/yakamara-logo.03c71736.png 600w, https://azubiweb.com/media/cache/w900_default/build/images/partner/yakamara-logo.03c71736.png 900w, https://azubiweb.com/media/cache/w1200_default/build/images/partner/yakamara-logo.03c71736.png 1200w"
                        loading="lazy"
                      />
                    </picture>
                  </picture>
                </a>
              </div>
              <div className="col-span-8">
                <h3>Yakamara Media GmbH &amp; Co. KG</h3>
                <p>
                  Yakamara Media begleitet uns seit Beginn 2014 und zeichnet
                  sich für das Front-/Backend Design und unsere Apps
                  verantwortlich. Auf Basis kontinuierlicher Briefings wird
                  pizza:web permanent weiterentwickelt und mit einem
                  zielgruppenspezifischem Design versehen. Yakamara realisiert
                  anspruchsvolle Webseiten, komplexe Online-Anwendungen sowie
                  internetbasierte Softwareprodukte.
                </p>
                <p>
                  <a
                    className="text-generationl-primary"
                    href="https://www.yakamara.de"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.yakamara.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
