'use client';
import { dancingscript } from "@/app/fonts/fonts";
import { sendEmail } from "./utils/send-email";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const [showAlert, setShowAlert] = useState(false);
    const [showFailAlert, setShowFailAlert] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { isSubmitSuccessful },
    } = useForm<FormData>()

    function onSubmit(data: FormData) {
        let result = sendEmail(data);
        if (result) {
            setShowAlert(true);
        } else {
            setShowFailAlert(true);
        }


    }
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset])
    return (
        <>
            
            <form onSubmit={handleSubmit(onSubmit)} className="ml-auto space-y-4">
                <h2 style={dancingscript.style} className="mt-8 sm:mt-0 text-2xl text-left sm:hidden text-darkgreen font-extrabold">Message</h2>

                <input type='text' placeholder='Name'
                    className="w-full py-2.5 px-4 border-b text-sm outline-green"
                    {...register('name', { required: true })} />
                <input type='email' placeholder='Email'
                    className="w-full  py-2.5 px-4 border-b text-sm outline-green"
                    {...register('email', { required: true })} />
                <input type='text' placeholder='Subject'
                    className="w-full py-2.5 px-4 border-b text-sm outline-green"
                    {...register('subject', { required: true })} />
                <textarea placeholder='Message' rows={6}
                    className="w-full  px-4 border-b text-sm pt-2.5 outline-green"
                    {...register('message', { required: true })} ></textarea>
                <button type='submit'
                    className="text-white bg-green hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
            {showAlert ? (
                <div
                    className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green"
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">blueGray!</b> This is a blueGray alert -
                        check it out!
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}
            {showFailAlert ? (
                <div
                    className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-midpink"
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">blueGray!</b> This is a blueGray alert -
                        check it out!
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowFailAlert(false)}
                    >
                        <span>×</span>
                    </button>
                </div>
            ) : null}

            </form>
        </>
    )
}