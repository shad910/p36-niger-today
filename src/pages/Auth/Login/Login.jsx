import React from 'react';
import hero from '../../../assets/Frame 2.png';

const Login = () => {
    return (
        <section className=" flex">
            <div className='hidden md:flex flex-1'>
                <img src={hero} alt="Hero" className="w-full h-screen " />
            </div>

            <div className='flex-1 md:flex justify-center items-center'>
                <div class="card xl:w-1/2 shrink-0">
                    <div class="card-body space-y-2.5">
                        <div className='space-y-1'>
                            <h3 className='text-3xl font-bold'>Welcome back</h3>
                            <p className='text-[#64748B]'>Log in to manage your customers.</p>
                        </div>
                        <fieldset class="fieldset">
                            <div class="mb-2">
                                <label class="label">Email or username</label>
                                <input type="email" class="input" placeholder="Email" />
                            </div>
                            <div class="mb-2">
                                <label class="label">Password</label>
                                <input type="password" class="input" placeholder="Password" />
                            </div>
                            <div className='text-right mr-3.5'><a class="link link-hover">Forgot password?</a></div>
                            <button class="btn btn-primary mt-2">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Login;