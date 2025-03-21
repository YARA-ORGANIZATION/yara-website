"use client";
import { useState, useEffect } from "react";
import { set } from "sanity";

const NewsletterSignup = () => {
   const [email, setEmail] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [applicantType, setApplicantType] = useState("Fellow");
   const [message, setMessage] = useState("");
   const [showPopup, setShowPopup] = useState(false);

   interface NewsletterResponse {
      message: string;
   }

   useEffect(() => {
      if (message) {
         setShowPopup(true);
         const timer = setTimeout(() => {
            setShowPopup(false);
            setMessage("");
         }, 5000);
         return () => clearTimeout(timer);
      }
   }, [message]);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      setMessage("");

      const response = await fetch("/api/newsletter", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ email, firstName, lastName, applicantType }),
      });

      const data: NewsletterResponse = await response.json();
      setMessage(data.message);
      setEmail("");
      setFirstName("");
      setLastName("");
      setApplicantType("Fellow");
   };

   return (
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 z-10">
         <div className="bg-white/50 rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign up to get the latest updates from YARA</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                     </label>
                     <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        required
                        className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black px-4 py-2 rounded-md outline-none transition-all"
                     />
                  </div>
                  <div className="relative">
                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                     </label>
                     <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        required
                        className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black px-4 py-2 rounded-md outline-none transition-all"
                     />
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                     </label>
                     <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black px-4 py-2 rounded-md outline-none transition-all"
                     />
                  </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <label className="flex items-center">
                           <input
                             type="radio"
                             name="role"
                             value="Fellow"
                             checked={applicantType === "Fellow"}
                             onChange={(e) => setApplicantType(e.target.value)}
                             className="mr-2"
                           />
                           Fellow
                        </label>
                        <label className="flex items-center">
                           <input
                             type="radio"
                             name="role"
                             value="Mentor"
                             checked={applicantType === "Mentor"}
                             onChange={(e) => setApplicantType(e.target.value)}
                             className="mr-2"
                           />
                           Mentor
                        </label>
                      </div>
                    </div>
               </div>
               <div className="flex justify-center mt-6">
                  <button
                     type="submit"
                     className="font-light px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                  >
                     Subscribe Now
                  </button>
               </div>
            </form>
         </div>

         {/* Popup Message */}
         {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
               <div className="absolute inset-0" onClick={() => setShowPopup(false)}></div>
               <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4 relative z-10 transform transition-all">
                  <button
                     onClick={() => setShowPopup(false)}
                     className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>
                  <div className="text-center">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto text-green-500 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <p className="text-lg font-medium">{message}</p>
                     <button
                        onClick={() => setShowPopup(false)}
                        className="mt-4 font-light px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
                     >
                        Close
                     </button>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default NewsletterSignup;