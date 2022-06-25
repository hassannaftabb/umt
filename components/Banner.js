import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="mt-4 relative bg-white">
      <div className="relative flex items-center justify-center w-[100vw] h-[40vh] sm:h-[90vh]">
        <div className="max-w-xl text-center sm:text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-black text-center">
            www.umt.sa
            <br />
            <strong className="font-extrabold  sm:block">
              <div className="inline text-blue-900">United</div>{' '}
              <div className="inline text-gray-700">Manarat</div>
            </strong>
            <div className="m-2">
              <Image alt="logo" src="/logo.png" width={100} height={100} />
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
