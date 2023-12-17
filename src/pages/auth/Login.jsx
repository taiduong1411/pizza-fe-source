import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, } from 'react-router-dom';
import { FaEyeSlash, FaRegEye, FaRegUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/logo';
import AuthLayout from '../../layouts/AuthLayout';
import { ApiClient } from '../../interceptors/axios';
const Login = () => {
  const { register, handleSubmit } = useForm({});

  const [showPassword, setShowPassword] = useState(false);
  if (localStorage.getItem('level')) {
    localStorage.removeItem('level');
    localStorage.removeItem('accessToken');
  }
  const nav = useNavigate();
  const onSubmit = async (data) => {
    await ApiClient().post('account/login', data).then(res => {
      if (res.status == 200) {
        const level = res.data.level;
        localStorage.setItem('level', level);
        localStorage.setItem('accessToken', res.data.accessToken);
        if (level == '1') {
          nav('/')
        } else if (level == '2') {
          nav('/teacher')
        }
      } else {
        toast.error(`${res.data.msg}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
  };
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

                  <form method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <div className="input-group input-group-lg relative rounded-lg">
                        <div className="bg-neutral-600 absolute ring-0 inset-y-0 start-0 flex items-center p-3.5 pointer-events-none">
                          <FaRegUser />
                        </div>
                        <input
                          type="text"
                          id="username"
                          className="bg-gray-50 ring-0 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-2.5"
                          placeholder="Email"
                          name="email"
                          {...register('email', { required: true })}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="input-group input-group-lg relative rounded-lg overflow-hidden">
                        <div className="bg-neutral-600 absolute ring-0 start-0 flex items-center p-3.5 pointer-events-none">
                          <RiLockPasswordFill />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          id="password"
                          className="bg-gray-50 ring-0 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-2.5"
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
                    <div className="mb-4 flex justify-between">
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
                            Stay logged in
                          </label>
                        </span>
                      </div>
                      <div className="">
                        <a href="/password-forgotten">Forgot your password</a>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      name="_csrf_token"
                      value="e444fc.xRMa-FVGdJ6HAlqhudSYSExvV0H2fpYifWVSVpxTm2Q.kCNXoBohDurGXRTuwKLQBBVXZgC9H8VSPgAnOOgm6AWgVyOMMhwM7ehGMQ"
                    />

                    <div className="mb-4 flex justify-center">
                      <input
                        type="submit"
                        className="rounded-full bg-blue-500 hover:bg-blue-600 px-9 py-3 btn-primary"
                        value={'Login'}
                      />
                    </div>

                    <div className="mb-4 flex justify-center text-primary">
                      <a href="/register">
                        Dont have an account yet? Register here...
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthLayout>
  );
};
export default Login;
