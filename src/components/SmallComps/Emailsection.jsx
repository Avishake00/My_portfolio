"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


const Emailsection = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_msm594f", "template_zsmgb0s", e.target, {
				publicKey: "Mb9RFxx7emvO1CM-K",
			})
			.then(
				() => {
					toast.success("Email sent successfully")
				},
				(error) => {
					toast.error("Something error")
				}
			);

		e.target.reset();
	};

	return (
		<form className="flex flex-col gap-4 lg:w-[60%] mt-12" onSubmit={sendEmail}>
			
			<div className="mb-2">
				<label className="text-white block mb-1 text-sm font-medium">
				Your Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					placeholder="John Doe..."
					className="bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
				/>
			</div>

            <div className="mb-2">
				<label className="text-white block mb-1 text-sm font-medium">
					Your email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					placeholder="john123@gmail.com"
					className="bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
				/>
			</div>
			<div className="mb-2">
				<label className="text-white block mb-1 text-sm font-medium">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					required
					placeholder="Just saying hi.."
					className="bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
				/>
			</div>
			<div className="mb-2">
				<label
					htmlFor="message"
					className="text-white block mb-1 text-sm font-medium"
				>
					Message
				</label>
				<textarea
					id="message"
					name="message"
					required
					placeholder="Let's talk about..."
					className="bg-[#18191E] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
					rows={5}
				/>
			</div>
			<button
				type="submit"
				className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
			>
				Send Message
			</button>
		</form>
	);
};

export default Emailsection;
