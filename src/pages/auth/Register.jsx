import HeroRegister from '../../components/hero/HeroRegister';
import AuthLayout from '../../layouts/AuthLayout';

export const Register = () => {
  return (
    <AuthLayout bgColor={'bg-neutral-900'}>
      <HeroRegister />

      <section className="section">
        <div className="container">
          <div className=" text-white">
            <div className="ym-content">
              <header>
                <h2>
                  <span className="text-primary">Welcome to</span> Pizza:web
                </h2>
              </header>
              <div className="lead">
                <p>
                  As a trainee, simply create a free account and test the app
                  for 5 days without obligation. Afterwards, you have the
                  opportunity to continue using the app with the license
                  provided to you by your training company (you will be informed
                  about this by your trainer), or a personal license (€59.00 for
                  a quarter, €89.00 for a half-year).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className=" text-white">
            <form action="">
              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12">
                  <h3>Baseline</h3>
                </div>
                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Username*
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Salutation
                  </label>
                  <select
                    name=""
                    className="form-select tomselected ts-hidden-accessible"
                    id=""
                  >
                    <option value="">Lord</option>
                    <option value="">Wife</option>
                  </select>
                </div>

                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Forename*
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Surname*
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-span-12 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Apprenticeship*
                  </label>
                  <select
                    name=""
                    className="form-select tomselected ts-hidden-accessible"
                    id=""
                  >
                    <option value="">Lord</option>
                    <option value="">Wife</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12">
                  <h3>Address</h3>
                </div>
                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Street*
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Address
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Zip code*
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Place*
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12">
                  <h3>Address</h3>
                </div>
                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Password*
                  </label>
                  <input type="password" className="form-control" />
                </div>

                <div className="col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Confirm Password*
                  </label>
                  <input type="password" className="form-control" />
                </div>
              </div>

              <div className="">
                <div className="ym-form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="register_privacyAccepted"
                      name="register[privacyAccepted]"
                      required="required"
                      className="form-check-input"
                      value="1"
                    />
                    <span className="ym-form-check-symbol"></span>
                    <span className="ym-form-check-label">
                      <label
                        className="form-check-label required"
                        tabIndex="0"
                        data-toggle="check"
                        htmlFor="register_privacyAccepted"
                      >
                        I have read and accept the privacy policy.
                      </label>
                    </span>
                  </div>{' '}
                  <p className="form-text">
                    Read our <a href="/datenschutz">privacy policy</a> here.
                  </p>
                </div>

                <div className="ym-form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="register_eulaAccepted"
                      name="register[eulaAccepted]"
                      required="required"
                      className="form-check-input"
                      value="1"
                    />
                    <span className="ym-form-check-symbol"></span>
                    <span className="ym-form-check-label">
                      <label
                        className="form-check-label required"
                        tabIndex="0"
                        data-toggle="check"
                        htmlFor="register_eulaAccepted"
                      >
                        I have read and accept the End User License Agreement
                        ("EULA").
                      </label>
                    </span>
                  </div>{' '}
                  <p className="form-text">
                    Read the{' '}
                    <a href="/eula">End User License Agreement ("EULA")</a>{' '}
                    here.
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="">
                  Do you already have an account?{' '}
                  <span className="text-primary">Login</span>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="rounded-full bg-blue-500 hover:bg-blue-600 px-9 py-3 btn-primary"
                  >
                    <span>Register</span>
                    <i className="icon-enter"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};
