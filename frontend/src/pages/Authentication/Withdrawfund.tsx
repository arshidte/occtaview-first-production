import React from 'react';
import Headers from '../../components/Layouts/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../Slice';
import { setPageTitle, toggleRTL } from '../../Slice/themeConfigSlice';
import { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import i18next from 'i18next';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconUser from '../../components/Icon/IconUser';
import IconMail from '../../components/Icon/IconMail';
import IconLockDots from '../../components/Icon/IconLockDots';
import IconInstagram from '../../components/Icon/IconInstagram';
import IconFacebookCircle from '../../components/Icon/IconFacebookCircle';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconGoogle from '../../components/Icon/IconGoogle';

const Withdrawfund = () => {
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Register Boxed'));
    }, [dispatch]);

    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        //         // Perform any form submission logic here
        console.log('Amount:', amount);
        //         // Redirect to another page
        navigate(`/qr-page?amount=${amount}`); // Change '/your-target-page' to the desired path
    };
    return (
        <div>
            <Headers />
            <div className="panel mt-6">
                <div>
                    <h2 className="text-xl text-white">Withdraw Fund</h2>
                </div>
            </div>
            <div className="mb-5 flex flex-col sm:flex-row items-center justify-center mt-10">
                <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none flex flex-col justify-center items-center mb-5 sm:mb-0">
                    <h1 className="text-white">Available Balance</h1>
                    <div className="py-7 px-6">
                        {' '}
                        <div className="bg-[#3b3f5c] mb-5 inline-block p-3 text-[#f1f2f3] rounded-full">0</div>
                        <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">0</h5>
                    </div>
                </div>

                <div className="max-w-[19rem] ml-0 sm:ml-10 w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div className="flex flex-col">
                        <h1 className="text-white">You can only transfer TRON-Based Tokens </h1>
                    </div>
                    <form className="py-5" onSubmit={handleSubmit}>
                        <label htmlFor="fullname">Add Amount</label>
                        <input type="number" placeholder="Amount" className="form-input" required />
                        <label htmlFor="fullname">Transaction Password</label>
                        <input type="number" placeholder="*******" className="form-input" required />
                        <p className="text-red-600">Minimum withdrawal $50.</p>
                        <div className="flex justify-center items-center">
                            <button type="submit" className="btn btn-primary mt-6">
                                Withdraw
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Withdrawfund;
