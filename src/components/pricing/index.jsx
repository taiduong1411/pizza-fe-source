import CustomButton from '../button/CustomButton';

export const LicensesPricingComp = () => {
  return (
    <div className="ym-content">
      <h3>For training companies</h3>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <p>
            pizza:web offers a variety of options to tailor our program to your
            needs. Depending on your wishes, modules such as the learning quiz,
            the digital training certificate or the entry of company-specific
            content can be combined. Put together your personal pizza:web and
            receive your personal offer.
          </p>
          <p>
            <CustomButton
              name={'Get in touch with us'}
              to={'/contact'}
              className={'bg-blue-600 hover:bg-blue-800'}
            />
          </p>
        </div>
        <div className="col-span-4">
          <picture>
            <img
              src="https://azubiweb.com/build/images/illustration/laptop.f9436fa5.svg"
              loading="lazy"
            />
          </picture>
        </div>
      </div>

      <h3>For trainees</h3>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <p>
            Please register via this website or your APP. You can then use
            pizza:web free of charge and without obligation for 5 days.
            Afterwards, you have the opportunity to continue using the app with
            the license provided to you by your training company (you will be
            informed about it by your trainer), or a personal license (€59.00
            for a quarter, €89.00 for a half-year).
          </p>
          <p>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href="/register"
            >
              <span>Register now</span>
            </a>
          </p>
        </div>
        <div className="col-span-4">
          <picture>
            <img
              src="https://azubiweb.com/build/images/illustration/login.2df0ea0f.svg"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
