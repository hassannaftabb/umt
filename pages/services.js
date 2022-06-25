import React from 'react';
import Image from 'next/image';

const services = () => {
  return (
    <section className="mt-20">
      <h1 className="w-[100vw] text-center mx-auto mt-40">
        <div className="inline  text-2xl sm:text-4xl text-blue-800 font-extrabold">
          Services &
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-cyan-500 font-extrabold">
          Maintenance
        </div>
        <p className="text-center px-8 sm:px-24 p-2">
          We supply our product to a wide list of customers. Below names are
          some of our major clients in Saudi market
        </p>
      </h1>
      <div className="w-full flex items-center justify-center mt-2 p-4">
        <Image
          alt="pic_1"
          src="/service.jpg"
          width={800}
          height={400}
          className="border rounded-lg"
        />
      </div>
      <div className="flex items-center mx-auto text-center w-[60vw] mb-20">
        <p className="font-semibold">
          We provide our clients with services for Maintenance, Testing and
          Repairs and are always happy to advise them on the best course of
          action. <br />
          We also offer service contracts after the warranty period in order to
          guarantee the optimal performance of medical devices. These contracts
          will include many important services such as regular inspection
          visits, preventive maintenance and corrective maintenance procedures.
        </p>
      </div>
    </section>
  );
};

export default services;
