import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import Section from '../../components/section/Section';
import { DashboardLayout } from '../../layouts/DashboardLayout';

export default function Profile() {
  const { register, handleSubmit } = useForm({});

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <DashboardLayout>
      <Section title={'My Profile'} className={'!pt-40 px-6'} fluid>
        <form action="" className="mt-16">
          <div className="flex justify-between items-center">
            <h3>Baseline</h3>
            <p className="text-neutral-600">
              * Mandatory; otherwise voluntary information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Username*
              </label>
              <input
                type="text"
                {...register('username')}
                className="form-control"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
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
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Forename*
              </label>
              <input
                type="text"
                {...register('forename')}
                className="form-control"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Surname*
              </label>
              <input
                type="text"
                {...register('surname')}
                className="form-control"
              />
            </div>
            <div className="col-span-2 py-2">
              <h3>Contact details</h3>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Email*
              </label>
              <input
                type="email"
                {...register('email')}
                className="form-control"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Telephone*
              </label>
              <input
                type="text"
                {...register('telephone')}
                className="form-control"
              />
            </div>
            <div className="col-span-2 py-2">
              <h3>Address</h3>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Street*
              </label>
              <input
                type="text"
                {...register('street')}
                className="form-control"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Address
              </label>
              <input
                type="text"
                {...register('address')}
                className="form-control"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Zip code*
              </label>
              <input
                type="text"
                {...register('zipcode')}
                className="form-control"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Place*
              </label>
              <input
                type="text"
                {...register('place')}
                className="form-control"
              />
            </div>

            <div className="col-span-2 py-2">
              <h3>Duel Profile</h3>
            </div>

            <div className="">
              <div className="ym-form-group mb-8">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="profile_showRealName"
                    name="profile[showRealName]"
                    className="form-check-input"
                    value="1"
                    checked="checked"
                  />
                  <span className="ym-form-check-symbol"></span>
                  <span className="ym-form-check-label">
                    <label
                      className="form-checkmb-2 -label"
                      tabIndex="0"
                      data-toggle="check"
                      htmlFor="profile_showRealName"
                    >
                      Real name visible
                    </label>
                  </span>
                </div>{' '}
              </div>

              <div className="ym-form-group mb-8">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="profile_showAwards"
                    name="profile[showAwards]"
                    className="form-check-input"
                    value="1"
                    checked="checked"
                  />
                  <span className="ym-form-check-symbol"></span>
                  <span className="ym-form-check-label">
                    <label
                      className="form-checkmb-2 -label"
                      tabIndex="0"
                      data-toggle="check"
                      htmlFor="profile_showAwards"
                    >
                      Awards visible
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Profile Avatar
              </label>
              <input
                type="file"
                {...register('avatar')}
                className="form-control"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Place
              </label>
              <input
                type="text"
                {...register('place')}
                placeholder=""
                className="form-control"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Motto
              </label>
              <input
                type="text"
                placeholder=""
                {...register('motto')}
                className="form-control"
              />
            </div>

            <div className="col-span-2">
              <h3>Password</h3>
            </div>
            <div className=" flex flex-col ">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="bg-gray-50 ring-1 ring-neutral-900 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  name="password"
                  {...register('password', { required: true })}
                />
              </div>
            </div>

            <div className=" flex flex-col">
              <label htmlFor="" className="mb-2 text-neutral-600">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirm-password"
                  className="bg-gray-50 ring-1 ring-neutral-900 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  name="password"
                  {...register('confirmPassword', { required: true })}
                />

                <button
                  className="bg-neutral-600 text-white hover:bg-neutral-500 border-neutral-900 rounded-0 absolute inset-y-0 right-0 p-2.5"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="rounded-full text-white bg-blue-500 hover:bg-blue-600 px-9 py-3 btn-primary"
              >
                <span>Register</span>
                <i className="icon-enter"></i>
              </button>
            </div>
          </div>
        </form>
      </Section>
    </DashboardLayout>
  );
}
