import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGlobeAsia } from 'react-icons/fa';

const contact = () => {
  return (
    <section className="mt-28 w-[100vw] h-[80vh] sm:h-[100vh] flex items-center justify-center">
      <div
        className="bg-gray-200 p-8 text-center w-[80vw] flex flex-col items-center  justify-center rounded-lg shadow-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="p-4 sm:p-8  ">
          <h3>
            <p className="inline text-blue-900 font-bold text-xl">U</p>
            <p className="inline font-bold text-xl text-cyan-500">M</p>
            <p className="inline font-bold text-xl text-gray-500">T</p>
            <p className="inline font-bold text-xl text-gray-500">
              &nbsp;Group | &nbsp;
            </p>
            <p className="inline font-bold text-xl text-blue-900">United</p>
            <p className="inline font-bold text-xl text-cyan-500">Manarat</p>
          </h3>
          <p className="text-black font-bold text-sm">
            211 Alaziza Building, King Faisal Street | Dirah, Riyadh, Saudi
            Arabia
          </p>
        </div>
        <div className="p-4 sm:p-8">
          <a className="flex  text-blue-900 font-bold" href="tel:+966114113006">
            <BsFillTelephoneFill className="text-blue-600 mr-1" /> +966 11 411
            3006
          </a>
          <div className="flex text-blue-900 font-bold">
            <p className="inline mr-1 text-blue-600">CRN</p> 10 10 29 22 30
          </div>
        </div>
        <div className="p-4 sm:p-8 sm:px-16">
          <a
            className="flex  text-blue-900 font-bold"
            href="mailto:info@umt.sa"
          >
            <AiOutlineMail className="text-blue-600 mr-1" /> info@umt.sa
          </a>
          <a className="flex text-blue-900 font-bold" href="http://www.umt.sa">
            <FaGlobeAsia className="text-blue-600 mr-1" />
            www.umt.sa
          </a>
        </div>
      </div>
    </section>
  );
};

export default contact;
