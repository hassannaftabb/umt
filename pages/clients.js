import React from 'react';
import Image from 'next/image';
import { MdDoubleArrow } from 'react-icons/md';

const clients = () => {
  const clients = [
    'King Faisal Specialist Hospital and Research Centre',
    'King Abdulaziz City for Science and Technology',
    'King Abdullah International Medical Research Center',
    'King Fahad Medical City',
    'King Saud University',
    'King Khalid University Hospital',
    'National Guard Hospital',
    'Ministry of Health General Labs',
    'Dr. Suliman Habib Medical Group Hospitals',
    'Specialized Medical Centre Hospital',
    'Imam Mohamed bin Saud Islamic university',
    'Imam Abdulrahman bin Faisal University',
    'Al-Jubeel General Hospital',
    'King Faisal University',
    'Shaqra University',
    'King Khaled University- Abha',
    'Aramco Hospital - Dhahran',
    'Taibah University',
  ];
  return (
    <section className="mt-20">
      <h1 className="w-[100vw] text-center mx-auto mt-40">
        <div className="inline  text-2xl sm:text-4xl text-blue-800 font-extrabold">
          Our
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-cyan-500 font-extrabold">
          Clients
        </div>
        <p className="text-center px-8 sm:px-24 p-2">
          We supply our product to a wide list of customers. Below names are
          some of our major clients in Saudi market
        </p>
      </h1>
      <div className="w-full flex items-center justify-center mt-2 p-4">
        <Image
          alt="pic_1"
          src="/crm.png"
          width={800}
          height={400}
          className="border rounded-lg"
        />
      </div>
      <div className="flex items-center justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 p-8">
          {clients.map((client) => {
            return (
              <li key={client} className="flex m-2">
                <MdDoubleArrow className="text-blue-500" />
                {client}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default clients;
