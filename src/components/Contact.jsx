import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

import { BackgroundGradient } from "./ui/background-gradient";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl sm:px-8 gap-6">
      <h1 className="text-4xl font-semibold text-center text-white">Contact</h1>
      <p className="text-lg text-center max-w-lg text-gray-400">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <BackgroundGradient className="rounded-[22px] w-full sm:p-10 bg-white dark:bg-zinc-900">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl px-4 py-2 flex flex-col gap-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-3">Email Me 🚀</h2>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-[20rem] bg-transparent border border-gray-500 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 "
          />
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold p-3 rounded-md cursor-pointer hover:shadow-lg transition duration-300"
          />
        </form>
      </BackgroundGradient>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
        severity="success"
      />
    </div>
  );
};

export default Contact;
