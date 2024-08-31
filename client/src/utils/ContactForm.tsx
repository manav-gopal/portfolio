import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(
        (response) => {
          console.log("result:", response);
          (document.getElementById("contact_form") as HTMLFormElement)?.reset();
          setIsSent(true);
          toast.success("Massage is sent successfully!");
        },
        (error) => {
          console.error(error);
          setIsSent(false);
          toast.error("Massage is not sent!");
        }
      );
  };

  return (
    <div
      className="w-full h-full bg-grayscale rounded-xl pb-10 pl-8 pr-8 shadow-2xl"
    >
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your First Name"
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="lastname">Last Name</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your Last Name"
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your E-mail"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>Message</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder="Enter your message..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[8rem] h-[3rem] bg-primary-600 rounded-xl cursor-pointer hover:bg-primary-700"
              type="submit"
              value={!isSent ? "Send" : "Done!"}
            />
          </div>
        </form>
      </div>
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
        theme="dark"
      />
    </div>
  );
};

export default ContactForm;
