import Logo from '../../components/logo';
import AuthLayout from '../../layouts/AuthLayout';

export const Login = () => {
  return (
    <AuthLayout bgColor={'bg-gradient-to-b from-[#0441ac] to-[#00b9fd]'}>
      <section className="section text-neutral-50 !pt-40">
        <div className="container">
          <div className="mx-auto flex justify-center items-center">
            <div className="col col-lg-10 col-xl-6">
              <div className="rounded-lg bg-neutral-900 border-0">
                <div className="p-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-8">
                      <h1 className="h2">
                        <span className="text-primary">Anmelden</span>
                      </h1>
                      <div className="lead">
                        <p className="mt-3 mb-4">and clever learning</p>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <Logo />
                    </div>
                  </div>

                  <form method="post" action="/login">
                    <div className="mb-4">
                      <div className="input-group input-group-lg">
                        <div className="input-group-text">
                          <i className="icon-user3"></i>
                        </div>
                        <input
                          type="text"
                          name="_username"
                          className="form-control"
                          placeholder="Benutzername"
                          aria-label="Benutzername"
                          autoComplete="username"
                          required=""
                          value=""
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div
                        className="input-group input-group-lg"
                        data-password=""
                      >
                        <div className="input-group-text">
                          <i className="icon-key5"></i>
                        </div>
                        <input
                          type="password"
                          name="_password"
                          className="form-control"
                          placeholder="Passwort"
                          aria-label="Passwort"
                          autoComplete="current-password"
                          required=""
                        />
                        <button
                          className="btn btn-neutral-300 border-neutral-900 rounded-0"
                          type="button"
                          tabIndex="-1"
                        >
                          <span data-password-blocked="">
                            {' '}
                            <svg className="icon">
                              <use xlinkHref="#svg-icon-eye-blocked"></use>
                            </svg>
                          </span>
                          <span data-password-visible="" className="d-none">
                            {' '}
                            <svg className="icon">
                              <use xlinkHref="#svg-icon-eye"></use>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="mb-4 flex justify-content-between">
                      <div className="form-check">
                        <input
                          id="login-remember-me"
                          type="checkbox"
                          className="form-check-input"
                          name="_remember_me"
                          value="1"
                          tabIndex="-1"
                        />
                        <span className="ym-form-check-symbol"></span>
                        <span className="ym-form-check-label">
                          <label
                            className="form-check-label"
                            htmlFor="login-remember-me"
                            tabIndex="0"
                            data-toggle="check"
                          >
                            Eingeloggt bleiben
                          </label>
                        </span>
                      </div>
                      <div>
                        <a href="/password-forgotten">Passwort vergessen?</a>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      name="_csrf_token"
                      value="e444fc.xRMa-FVGdJ6HAlqhudSYSExvV0H2fpYifWVSVpxTm2Q.kCNXoBohDurGXRTuwKLQBBVXZgC9H8VSPgAnOOgm6AWgVyOMMhwM7ehGMQ"
                    />

                    <div className="mb-4 flex justify-center">
                      <button
                        type="submit"
                        className="rounded-full bg-blue-500 hover:bg-blue-600 px-9 py-3 btn-primary"
                      >
                        <span>Announce</span>
                        <i className="icon-enter"></i>
                      </button>
                    </div>

                    <div className="mb-4 flex justify-center text-primary">
                      <a href="/register">
                        Don't have an account yet? Register here...
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};
