import { useForm } from 'react-hook-form';
import { FaMailBulk } from 'react-icons/fa';
import Logo from '../../components/logo';
import AuthLayout from '../../layouts/AuthLayout';
import { ApiClient } from '../../interceptors/axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = () => {
    const { register, handleSubmit } = useForm({});
    const nav = useNavigate();
    const onSubmit = async (data) => {

        await ApiClient().post('account/forgot-password', data).then(async res => {
            if (res.status == 200) {
                await localStorage.setItem('email', data.email);
                return nav('/otp');
            } else {
                return toast.error(`${res.data.msg}`, {
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
                                                <span className="text-primary">Forgot Password</span>
                                            </h1>
                                        </div>
                                        <div className="col-span-4">
                                            <Logo />
                                        </div>
                                    </div>

                                    <form method="post" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="my-10">
                                            <div className="input-group input-group-lg relative rounded-lg">
                                                <div className="bg-neutral-600 absolute ring-0 inset-y-0 start-0 flex items-center p-3.5 pointer-events-none">
                                                    <FaMailBulk />
                                                </div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="bg-gray-50 ring-0 outline-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-14 p-2.5"
                                                    placeholder="email"
                                                    name="email"
                                                    {...register('email', { required: true })}
                                                    required
                                                />
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
                                                value={'Reset Password'}
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
export default ForgotPassword;