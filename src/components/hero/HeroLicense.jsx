import clsx from 'clsx';

export const HeroLicense = () => {
  return (
    <section className={clsx('bg-white text-neutral-50', 'pb-32 pt-0')}>
      <div className="grid grid-cols-1 relative md:grid-cols-2">
        <div
          className="text-lg absolute md:relative md:text-3xl p-10 self-center bg-neutral-900 mr-auto -bottom-40"
          style={{
            backgroundColor:
              'rgba(var(--bs-neutral-900-rgb),var(--bs-bg-opacity))!important',
          }}
        >
          <div className="card bg-transparent border-0 rounded-0">
            <div className="card-body">
              <h1>
                <span className="text-primary">Licenses & Pricing</span>
              </h1>
              <p>
                We offer companies individual pricing models. Trainees who do
                not receive a licence from their company can also obtain a
                licence.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto ">
          <img
            className="z-[0]"
            src="https://azubiweb.com/build/images/illustration/laptop-signet.0ac0d137.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
