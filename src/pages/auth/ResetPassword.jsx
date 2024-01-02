import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, } from 'react-router-dom';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/logo';
import AuthLayout from '../../layouts/AuthLayout';
import { ApiClient } from '../../interceptors/axios';
const ResetPassword = () => {
    const { register, handleSubmit } = useForm({});

    const [showPassword, setShowPassword] = useState(false);
    const nav = useNavigate();
    const onSubmit = async (data) => {
        const body = {
            email: localStorage.getItem('email'),
            password: data.newPassword,
        }
        await ApiClient().post('account/reset-password', body).then(res => {
            if (res.status == 200) {
                localStorage.removeItem('email');
                return nav('/login')
            } else {
                toast.error(`${res.message}`);
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
                                                <span className="text-primary">Reset Password</span>
                                            </h1>
                                            {/* <div className="lead">
                                                <p className="mt-3 mb-4">and clever learning</p>
                                            </div> */}
                                        </div>
                                        <div className="col-span-4">
                                            <Logo />
                                        </div>
                                    </div>

                                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-4">
                                            <div className="input-group input-group-lg relative rounded-lg overflow-hidden">
                                                <div className="bg-neutral-600 absolute ring-0 start-0 flex items-center p-3.5 pointer-events-none">
                                                    <RiLockPasswordFill />
                                                </div>
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="newPassword"
                                                    className="bg-gray-50 ring-0 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-2.5"
                                                    placeholder="New Password"
                                                    name="newPassword"
                                                    {...register('newPassword', { required: true })}
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
                                        <div className="mb-4">
                                            <div className="input-group input-group-lg relative rounded-lg overflow-hidden">
                                                <div className="bg-neutral-600 absolute ring-0 start-0 flex items-center p-3.5 pointer-events-none">
                                                    <RiLockPasswordFill />
                                                </div>
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="confirmPassword"
                                                    className="bg-gray-50 ring-0 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-2.5"
                                                    placeholder="Confirm Password"
                                                    name="confirmPassword"
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
                                        <div className="mb-4 flex">
                                            <input
                                                type="submit"
                                                className="rounded-full bg-blue-500 hover:bg-blue-600 px-9 py-3 btn-primary"
                                                value={'Submit'}
                                            />
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
export default ResetPassword;
