import clsx from 'clsx';

export default function HeroRegister() {
  return (
    <section className={clsx('bg-neutral-900 text-neutral-900', 'pb-32 pt-0')}>
      <div className="grid gird-cols-1 md:grid-cols-2">
        <div
          className="text-3xl order-last md:order-first p-10 self-center bg-white mr-auto relative"
          style={{
            backgroundColor:
              'rgba(var(--bs-neutral-900-rgb),var(--bs-bg-opacity))!important',
          }}
        >
          <div className="card bg-transparent border-0 rounded-0">
            <div className="card-body">
              <h1>
                <span className="text-primary">Registration</span>
              </h1>
              <p>Simply create a free account.</p>
            </div>
          </div>
        </div>

        <div className="ml-auto">
          <img
            src="https://azubiweb.com/build/images/illustration/login-signet-dark.123f73bc.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
