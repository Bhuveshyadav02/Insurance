import React, { useEffect, useRef } from 'react';

const Contact = () => {
    const iframeRef = useRef(null);
    const formContainerRef = useRef(null);

    const updateFormHeight = () => {
        if (iframeRef.current && formContainerRef.current) {
            // Set the height of the form container based on iframe's content height
            const height = iframeRef.current.contentWindow.document.body.scrollHeight;
            formContainerRef.current.style.height = `${height + 20}px`; // Adding extra padding
        }
    };

    useEffect(() => {
        const iframe = iframeRef.current;

        if (iframe) {
            iframe.onload = updateFormHeight; // Update height when the iframe loads
        }

        window.addEventListener('resize', updateFormHeight); // Update height on window resize

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateFormHeight);
        };
    }, [iframeRef]);

    return (
        <section id='contact' className="relative bg-gradient-to-r from-gray-900 to-blue-900">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-300 md:text-3xl dark:text-white">Chat to our friendly team</h1>
                    <p className="mt-3 text-gray-200 dark:text-gray-300">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2 " >
    {/* Contact info sections */}
    <div className="flex flex-col gap-6 md:gap-6 lg:gap-10">
        {/* Email Section */}
        <div id="service" className="p-4 w-full max-w-sm mx-auto">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {/* SVG for Email */}
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-200 dark:text-white">Email</h2>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-400">Our friendly team is here to help.</p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">asramanish@gmail.com</p>
        </div>

        {/* Phone Section */}
        <div id="service" className="p-4 w-full max-w-sm mx-auto">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {/* SVG for Phone */}
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-200 dark:text-white">Phone</h2>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-400">You can reach us via phone.</p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+91 7999600984</p>
        </div>

        {/* Office Address Section */}
        <div id="service" className="p-4 w-full max-w-sm mx-auto">
            <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                {/* SVG for Location */}
            </span>
            <h2 className="mt-4 text-base font-medium text-gray-200 dark:text-white">Office Address</h2>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-400">Visit us at our office location.</p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Ujjain Madhya Pradesh, India</p>
        </div>
    </div>

    {/* Google Form Section */}
    <div ref={formContainerRef} className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8 w-full max-w-2xl mx-auto">
        <iframe 
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSeC-4TN56gwVtKEMY8zSlvLH3E9OjJ-Ijv8F_HdaUk9146T5w/viewform?embedded=true" 
            width="100%" 
            height="954" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="rounded-lg"
        >
            Loading…
        </iframe>
    </div>
</div>

            </div>
        </section>
    );
};

export default Contact;
