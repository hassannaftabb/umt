import React from 'react';
import { FaHands } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';
import { MdOutlineIntegrationInstructions } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';
import { FaUsers } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';

const Values = () => {
  return (
    <section className="text-black bg-white  mb-24 z-10">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl ">United Manarat</h2>

          <p className="mt-4 ">
            Our values have been defined with a large employee involvement
            through various sales and marketing activities. They represent our
            core strengths and are a guiding compass towards the realisation of
            our strategy and vision.
            <br />
            Our 5 corporate values define what we stand for at United Manarat:-
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block p-8 transition  bg-blue-700  shadow-xl rounded-xl hover:shadow-blue-900 hover:border-pink-500/10"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <FaHands className="text-2xl text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">Passion</h3>

            <p className="mt-1 text-sm text-gray-300">
              We care and champion United Manarat in everything that we do. We
              work with energy, determination and commitment to be the best. We
              believe that what we do matters and are proud to make a valuable
              contribution to the comfort of our customers lives.
            </p>
          </a>

          <a
            data-aos="flip-up"
            data-aos-duration="1000"
            className="block p-8 transition bg-blue-700 shadow-xl rounded-xl hover:shadow-blue-900 hover:border-pink-500/10"
          >
            <AiFillBank className="text-2xl text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">Reliability</h3>

            <p className="mt-1 text-sm text-gray-300">
              We deliver on expectations. We are trusted to produce and deliver
              high quality products for our customers and consumers and to
              provide outstanding service. We are always here to help.
            </p>
          </a>

          <a
            data-aos="flip-up"
            data-aos-duration="1000"
            className="block p-8 transition bg-blue-700 shadow-xl rounded-xl hover:shadow-blue-900 hover:border-pink-500/10"
          >
            <MdOutlineIntegrationInstructions className="text-2xl text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">Integrity</h3>

            <p className="mt-1 text-sm text-gray-300">
              We each take responsibility for doing the right thing. We are
              committed to the highest standard of behaviour and ethics for the
              business as a whole and as individuals. We treat our customers,
              suppliers and each other with fairness, honesty and respect.
            </p>
          </a>

          <a
            data-aos="flip-up"
            data-aos-duration="1000"
            className="block p-8 transition bg-blue-700 shadow-xl rounded-xl hover:shadow-blue-900 hover:border-pink-500/10"
          >
            <HiDocumentText className="text-2xl text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">
              Drive for Results
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              Only our very best is ever good enough. We all share a great
              can-do mentality and we encourage each other in our
              entrepreneurship. We recognize that each of us must play our part
              in making United Manarat an organisation with a high-performance
              culture.
            </p>
          </a>

          <a
            data-aos="flip-up"
            data-aos-duration="1000"
            className="block p-8 transition bg-blue-700 shadow-xl rounded-xl hover:shadow-blue-900 hover:border-pink-500/10"
          >
            <FaUsers className="text-2xl text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">Team Work</h3>

            <p className="mt-1 text-sm text-gray-300">
              We work together to achieve our shared goals. We are working
              collaboratively with our customers and suppliers. We share ideas
              and use our diverse talents, backgrounds and experiences to handle
              challenging business opportunities that make us a more innovative
              and successful organization.
            </p>
          </a>

          <a
            className="block p-8 transition bg-blue-700 shadow-xl rounded-xl hover:shadow-blue-900 hover:border-pink-500/10"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <BsFillEyeFill className="text-2xl text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">Vision</h3>

            <p className="mt-1 text-sm text-gray-300">
              Our vision is to be choice number one and must trusted business
              partners to Healthcare providers when they seek a high quality
              diagnostic instruments and medical devices.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Values;
