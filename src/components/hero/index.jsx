import clsx from 'clsx';

const Hero = () => {
  return (
    <section
      className={clsx(
        'bg-gradient-to-b from-[#0441ac] to-[#00b9fd] text-neutral-50',
        'pb-32 pt-0'
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div
          className="text-lg order-last md:order-first md:text-3xl p-10 self-center bg-neutral-900 mr-auto relative"
          style={{
            backgroundColor:
              'rgba(var(--bs-neutral-900-rgb),var(--bs-bg-opacity))!important',
          }}
        >
          <a
            href="/register"
            className="flex justify-center items-center md:text-xl h-32 w-32 md:h-48 md:w-48
            p-4 absolute top-0 right-0 md:left-full rotate-12 z-[1] rounded-[50%]  
            transform -translate-y-1/2 -translate-x-1/2 
            bg-[--ym-primary-color] text-white hover:bg-neutral-900 ring-1 hover:ring-white"
          >
            <div className="text-center md:text-2xl">
              <p>Register now & try it for free</p>
            </div>
          </a>
          <div className="card bg-transparent border-0 rounded-0">
            <div className="card-body">
              <h1>
                Pizza:<span className="text-primary">web</span>
              </h1>
              <p>
                Digital durch die Ausbildung – pizza:web begleitet Sie und Ihre
                Auszubildenden durch den Ausbildungsalltag.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto">
          <img
            src="https://azubiweb.com/build/images/illustration/books-signet.92aa7c0b.svg"
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-12 grid-row-1 gap-9">
        <div className="col-span-12 md:col-span-5">
          <div className="grid grid-cols-12 relative">
            <div className=" py-72 md:p-0">
              <div className="absolute top-12 md:top-0 left-[15%] z-[1]">
                <picture>
                  <img
                    alt="Educational game"
                    sizes="(min-width: 768px) 17vw, 50vw"
                    src="https://azubiweb.com/media/cache/w300_default/build/images/mobile/overview.96f0e9a4.png"
                    srcSet="https://azubiweb.com/media/cache/w300_default/build/images/mobile/overview.96f0e9a4.png 300w, https://azubiweb.com/media/cache/w600_default/build/images/mobile/overview.96f0e9a4.png 600w, https://azubiweb.com/media/cache/w900_default/build/images/mobile/overview.96f0e9a4.png 900w"
                  />
                </picture>
              </div>
              <div className="absolute top-24 md:top-12 right-[10%]">
                <picture>
                  <img
                    alt="Educational game"
                    sizes="(min-width: 768px) 17vw, 50vw"
                    src="https://azubiweb.com/media/cache/w300_default/build/images/mobile/question.fb4e739e.png"
                    srcSet="https://azubiweb.com/media/cache/w300_default/build/images/mobile/question.fb4e739e.png 300w, https://azubiweb.com/media/cache/w600_default/build/images/mobile/question.fb4e739e.png 600w, https://azubiweb.com/media/cache/w900_default/build/images/mobile/question.fb4e739e.png 900w"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <article className="col-span-12 md:col-span-7 xl:col-span-5 px-4 md:ps-0">
          <div className="ym-content">
            <header>
              <h2 className="h1">
                Fun for the trainee, time saving for the trainer.
              </h2>
            </header>
            <div className="lead">
              <p>
                pizza:web accompanies you as a company and your trainees through
                everyday training, starting with the digital report booklet and
                the playful transfer of knowledge through games and duels. Fun
                for your trainee, time savings for your trainer.
              </p>
            </div>

            <div className=" py-4 flex flex-col">
              <a
                className="text-white bg-transparent ring-blue-50 ring-1 hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                href="/demo"
              >
                <span>Test match (10 questions)</span>
              </a>
              <a
                className="text-white bg-transparent ring-blue-50 ring-1 hover:bg-white hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                href="/register"
              >
                <span>Register now and try it for free</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
