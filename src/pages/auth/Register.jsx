import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import HeroRegister from '../../components/hero/HeroRegister';
import AuthLayout from '../../layouts/AuthLayout';
import { ApiClient } from '../../interceptors/axios';
const Register = () => {
  const { register, handleSubmit } = useForm({});

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const nav = useNavigate();
  const onSubmit = async (data) => {
    if (data.password != data.confirmPassword) {
      setError("Password and Confirm Password Incorrect. Please try again !")
    } else {
      await ApiClient().post('account/register', data).then(res => {
        if (res.status == 200) {
          nav('/login')
        } else {
          setError(`${res.data.msg}`)
        }
      })
    }
  };
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-12 md:gap-10">
                <div className="col-span-12">
                  <h3>Baseline</h3>
                </div>
                <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Email*
                  </label>
                  <input
                    type="text"
                    {...register('email')}
                    className="form-control"
                  />
                </div>

                {/* <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Salutation
                  </label>
                  <select
                    name=""
                    className="form-select tomselected ts-hidden-accessible"
                    id=""
                    {...register('Salutation')}
                  >
                    <option value="">Lord</option>
                    <option value="">Wife</option>
                  </select>
                </div> */}

                <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Fullname*
                  </label>
                  <input
                    type="text"
                    {...register('fullname')}
                    className="form-control"
                  />
                </div>

                {/* <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Surname*
                  </label>
                  <input
                    type="text"
                    {...register('surname')}
                    className="form-control"
                  />
                </div> */}

                {/* <div className="col-span-12 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Apprenticeship*
                  </label>
                  <select
                    name=""
                    className="form-select tomselected ts-hidden-accessible"
                    id=""
                    {...register('apprenticeship')}
                  >
                    <option value="">Lord</option>
                    <option value="">Wife</option>
                  </select>
                </div> */}
              </div>

              <div className="grid grid-cols-12 md:gap-10">
                {/* <div className="col-span-12">
                  <h3>Address</h3>
                </div>
                <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Street*
                  </label>
                  <input
                    type="text"
                    {...register('street')}
                    className="form-control"
                  />
                </div> */}

                {/* <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Address
                  </label>
                  <input
                    type="text"
                    {...register('address')}
                    className="form-control"
                  />
                </div> */}

                {/* <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Zip code*
                  </label>
                  <input
                    type="text"
                    {...register('zipcode')}
                    className="form-control"
                  />
                </div> */}

                {/* <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Place*
                  </label>
                  <input
                    type="text"
                    {...register('place')}
                    className="form-control"
                  />
                </div> */}
              </div>

              <div className="grid grid-cols-12 md:gap-10">
                <div className="col-span-12">
                  <h3>Password</h3>
                </div>
                <div className="col-span-12 md:col-span-6 mb-8 flex flex-col ">
                  <label htmlFor="" className="text-primary">
                    Password*
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="bg-gray-50 ring-0 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Password"
                      name="password"
                      {...register('password', { required: true })}
                    />

                    <button
                      className="bg-neutral-600 hover:bg-neutral-500 border-neutral-900 rounded-0 absolute inset-y-0 right-0 p-2.5"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex="-1"
                    >
                      {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-6 mb-8 flex flex-col">
                  <label htmlFor="" className="text-primary">
                    Confirm Password*
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirm-password"
                      className="bg-gray-50 ring-0 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Password"
                      name="password"
                      {...register('confirmPassword', { required: true })}
                    />

                    <button
                      className="bg-neutral-600 hover:bg-neutral-500 border-neutral-900 rounded-0 absolute inset-y-0 right-0 p-2.5"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex="-1"
                    >
                      {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
              </div>
              {error && (
                <p className="text-[red] text-sm">{error}</p>
              )}
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
                        I have read and accept the End User License Agreement.
                      </label>
                    </span>
                  </div>{' '}
                  <p className="form-text">
                    Read the{' '}
                    <a href="/eula">End User License Agreement</a>{' '}
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
export default Register;
