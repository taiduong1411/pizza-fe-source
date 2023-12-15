import PostCard from '../components/card/PostCard';
import Hero from '../components/hero';
import { LicensesPricingComp } from '../components/pricing';
import MainLayout from '../layouts/MainLayout';
const Home = () => {
  return (
    <MainLayout>
      <Hero />

      <section className="section bg-neutral-100">
        <div className="container">
          <article className="grid grids-cols-12 gap-6">
            <div className="col-span-12 xl:col-span-8 xl:col-start-3 px-4">
              <div className="text-sm">
                <header>
                  <h2>What can pizza:web do?</h2>
                </header>
                <div className="lead">
                  <p className="leading-9">
                    pizza:web is a learning system consisting of an application
                    and a website that enables trainees to prepare for their
                    exams and exams regardless of time and place.
                  </p>
                </div>

                <div
                  className="ratio ratio-16x9 ym-video w-full h-[500px] bg-black"
                  data-video='<iframe src="https://player.vimeo.com/video/247122403?title=0&amp;amp;byline=0&amp;amp;portrait=0&amp;amp;autoplay=1&amp;amp;dnt=1&amp;amp;app_id=122963" width="2000" height="1125" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="pizza:web Imagefilm / Moxy Hotels"></iframe>'
                  data-consent-url="/video-consent"
                >
                  {/* <iframe
                    src="https://player.vimeo.com/video/247122403?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;dnt=1&amp;app_id=122963"
                    width="2000"
                    height="1125"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="pizza:web Imagefilm / Moxy Hotels"
                  ></iframe> */}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="row">
            <div className="col-12 col-xl-8 offset-xl-2 px-4">
              <div className="ym-content">
                <header>
                  <h2>Our Service</h2>
                </header>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-neutral-100">
        <div className="container-fluid">
          <header>
            <h2 className="h4 !mb-12 text-center">
              pizza:web honored as an outstanding digital educational medium
            </h2>
          </header>

          <div className="grid grid-cols-8 gap-6">
            <div className=" g-start-lg-2">
              <picture
                title="Comenius EduMedia Siegel 2018"
                className="img-fluid"
              >
                <img
                  alt="Comenius EduMedia Siegel 2018"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2018.f149bdb5.png"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2018.f149bdb5.png"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="">
              <picture
                title="Comenius EduMedia Siegel 2019"
                className="img-fluid"
              >
                <img
                  alt="Comenius EduMedia Siegel 2019"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2019.d5c8a589.png"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2019.d5c8a589.png"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="">
              <picture
                title="Comenius EduMedia Siegel 2020"
                className="img-fluid"
              >
                <img
                  alt="Comenius EduMedia Siegel 2020"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2020.b1ca0475.png"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2020.b1ca0475.png"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="">
              <picture
                title="Comenius EduMedia Siegel 2021"
                className="img-fluid"
              >
                <img
                  alt="Comenius EduMedia Siegel 2021"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2021.8fa7b5bb.png"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2021.8fa7b5bb.png"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="">
              <picture
                title="Comenius EduMedia Siegel 2022"
                className="img-fluid"
              >
                <img
                  alt="Comenius EduMedia Siegel 2022"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2022.36ab0f36.png"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2022.36ab0f36.png"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="">
              <picture
                title="Comenius EduMedia Siegel 2023"
                className="img-fluid"
              >
                <img
                  alt="Comenius EduMedia Siegel 2023"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2023.e5bb8438.png"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/award/comenius-edumedia-siegel-2023.e5bb8438.png"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className=" align-self-center">
              <picture
                title="Deutscher Demografie Preis 2022"
                className="img-fluid"
              >
                <img
                  alt="Deutscher Demografie Preis 2022"
                  src="https://azubiweb.com/media/cache/w300_default/build/images/award/deutscher-demografie-preis-2022.69ed1a0c.png"
                  srcSet="https://azubiweb.com/media/cache/w300_default/build/images/award/deutscher-demografie-preis-2022.69ed1a0c.png"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-100">
        <div className="container-fluid">
          <article className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 xl:col-start-3 px-4">
              <header>
                <h2>Licenses &amp; Pricing Models</h2>
              </header>
              <LicensesPricingComp />
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container-fluid">
          <header className="d-flex justify-content-between align-items-center mb-4">
            <h2>Pizza:web News</h2>
            <a className="btn btn-link pe-0" href="/news">
              <span>Alle News</span>
            </a>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section>

      <section className="section bg-neutral-100">
        <div className="container">
          <article className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 xl:col-start-3 px-4">
              <div className="ym-content">
                <header>
                  <h2>Do you have any questions about our offer?</h2>
                </header>

                <div className="lead">
                  <p>
                    Then give us a call or send us a message.
                    <br />
                    We can be reached by phone Mon.–Fri. from 9:00 a.m. to 18:00
                    p.m.
                  </p>
                </div>
              </div>

              <div className="ym-contact">
                <div className="ym-contact--media"></div>
                <div className="ym-contact--body">
                  <h3>Heike Peters</h3>
                  <p>Project Manager pizza:web</p>
                  <p>
                    Phone:{' '}
                    <a href="tel:+4969999993251">+49 (0) 69 999 993 251</a>
                    <br />
                    E-Mail:{' '}
                    <a href="mailto:info@azubiweb.com">info@azubiweb.com</a>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header>
            <h2 className="h4 mb-5 text-center">
              These customers trust pizza:web for their training{' '}
            </h2>
          </header>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
