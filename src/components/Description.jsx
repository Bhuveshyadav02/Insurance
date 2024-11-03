import React from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import '../App.css'
import { useParams,Link } from 'react-router-dom'
const Description = () => {
  const services = [
    { title: "Health Insurance", description: "Comprehensive health insurance plans for you and your family.",image :img5, details: [
      "Coverage for hospitalization expenses",
      "Pre and post hospitalization coverage",
      "Cashless treatment at network hospitals",
      "No claim bonus"
  ] },
    { title: "Life Insurance", description: "Secure your family's future with our life protection plans.",image :img7,details: [
      "Life cover for policy term",
      "Flexible premium payment options",
      "Tax benefits under Section 80C",
      "Option to add riders for additional coverage"
  ]},
    { title: "Mutual Funds", description: "Invest in mutual funds for long-term financial growth." ,image :img4, details: [
      "Diversified investment portfolio",
      "Professional fund management",
      "Potential for higher returns",
      "Liquidity and flexibility"
  ]},
    { title: "SIPs", description: "Systematic Investment Plans for disciplined investing." ,image :img6, details: [
      "Regular and disciplined investment",
      "Rupee cost averaging",
      "Power of compounding",
      "Flexibility to invest small amounts"
  ]},
    { title: "Auto Insurance", description: "Get personal loans with flexible repayment options." ,image :img3,details: [
      "Coverage for damages to your vehicle",
      "Third-party liability coverage",
      "Personal accident cover",
      "Cashless claims at network garages"
  ]},
    { title: "Vehicle Insurance", description: "Secure your dream vehicle with our vehicle ." ,image :img1, details: [
      "Coverage for two-wheelers and four-wheelers",
      "Third-party liability coverage",
      "Personal accident cover",
      "Cashless claims at network garages"
  ]},
    { title: "Buisness Insurance", description: "Secure your Buisness with our Insurances ." ,image :img8,details: [
      "Property insurance",
      "Liability insurance",
      "Business interruption insurance",
      "Employee benefits"
  ]},
    { title: "Home Insurance", description: "Exclusive credit card options tailored for you." ,image :img2,details: [
      "Coverage for damages to the structure",
      "Coverage for personal belongings",
      "Protection against natural calamities",
      "Liability coverage"
  ]}
];

const {idx} = useParams(); 
const id = parseInt(idx,10);
  return (
    <div className='bg-gradient-to-r from-gray-900 to-blue-900 text-white w-full flex'>
       <div   key={id} className="p-10 w-full" >
                        <h1 className="text-3xl font-bold mb-4">{services[id].title}</h1>
                        <h1 className="text-gray-100">{services[id].description}</h1>
                        <br />
                        <h1 className='text-4xl '>Policy Details</h1>
                        <br />
      {services[id].details.map((detail,id)=>{
        return (
        <li className='text-2xl ' key={id}>{detail} </li>
        )
      })}
<br />
<button 
                    className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-4"
                    onClick={() => window.location.href = '/services'}
                >
                   Back 
                </button>
        <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-4 mx-8"
                >
                    Get Now
                </button>
                <br />
                
      </div>
      <div className='p-10 w-full'>
      <img className='w-100 h-90' src={services[id].image} />
      </div>
    </div>
  )
}

export default Description
