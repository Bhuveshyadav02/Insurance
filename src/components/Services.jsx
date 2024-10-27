import React from 'react'
import imgBg from '../assets/images/imgBg.jpg'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import '../App.css'
export default function Services() {
    const services = [
        { title: "Health Insurance", description: "Comprehensive health insurance plans for you and your family.",image :img5 },
        { title: "Life Insurance", description: "Secure your family's future with our life protection plans.",image :img7 },
        { title: "Mutual Funds", description: "Invest in mutual funds for long-term financial growth." ,image :img4},
        { title: "SIPs", description: "Systematic Investment Plans for disciplined investing." ,image :img6},
        { title: "Auto Insurance", description: "Get personal loans with flexible repayment options." ,image :img3},
        { title: "Vehicle Insurance", description: "Secure your dream vehicle with our vehicle ." ,image :img1},
        { title: "Buisness Insurance", description: "Secure your Buisness with our Insurances ." ,image :img8},
        { title: "Home Insurance", description: "Exclusive credit card options tailored for you." ,image :img2}
    ];

    return (
        <body className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <section className="w-full py-10 bg-gradient-to-r from-gray-900 to-blue-900 text-white" >
            <h2 className="text-4xl font-bold text-center mb-12">Our Services, What you want to secure today ?</h2>
            <br />
            <br />
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20">
                {services.map((service, index) => (
                    <div id='service' key={index} className="bg-gradient-to-r from-gray-900 to-blue-900 p-9 rounded-lg shadow-lg text-center" style={{opacity:'0.9', cursor:'pointer'}} >
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <img src={service.image} />
                        <p className="text-gray-100">{service.description}</p>
                        <br />
                        <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
                  >
                   Secure Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                    </div>
                ))}
            </div>
        </section>
        </body>
    );
}
