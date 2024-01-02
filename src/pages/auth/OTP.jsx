import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/logo';
import AuthLayout from '../../layouts/AuthLayout';
import { ApiClient } from '../../interceptors/axios';
import { useNavigate } from 'react-router-dom';
const OTPPage = () => {
    const [otpValues, setOTPValues] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (index, event) => {
        const value = event.target.value;

        // Update the OTP value
        const newOTPValues = [...otpValues];
        newOTPValues[index] = value;
        setOTPValues(newOTPValues);

        // Move focus to the next input
        if (index < inputRefs.length - 1 && value !== '') {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleBackspace = (index, event) => {
        // Move focus to the previous input on backspace
        if (index > 0 && event.key === 'Backspace' && otpValues[index] === '') {
            inputRefs[index - 1].current.focus();
        }
    };
    const { handleSubmit } = useForm({});
    const nav = useNavigate();
    const onSubmit = async () => {
        const code = otpValues.join('');
        // console.log(localStorage.getItem('email'));
        const data = {
            email: localStorage.getItem('email'),
            code: code
        }
        await ApiClient().post('account/check-otp', data).then(res => {
            if (res.status == 200) {
                nav('/reset-password')
            } else {
                alert("Invalid Code")
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

                                    <form
                                        action=""
                                        className="my-8"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <div className="flex flex-col space-y-16">
                                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                                {otpValues.map((value, index) => (
                                                    <div key={index} className="w-16 h-16">
                                                        <input
                                                            ref={inputRefs[index]}
                                                            className="text-neutral-900 w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                            type="text"
                                                            value={value}
                                                            onChange={(event) => handleChange(index, event)}
                                                            onKeyDown={(event) =>
                                                                handleBackspace(index, event)
                                                            }
                                                            maxLength="1"
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-col space-y-5">
                                                <div>
                                                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                                        Verify Account
                                                    </button>
                                                </div>

                                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                                    <span>Didnt receive code?</span>
                                                    <a
                                                        className="flex flex-row items-center text-white"
                                                        href="http://"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Resend
                                                    </a>
                                                </div>
                                            </div>
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
export default OTPPage;