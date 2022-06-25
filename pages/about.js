import React from 'react';
import Image from 'next/image';
import Values from '../components/Values';

const about = () => {
  return (
    <section className="mt-20">
      <h1
        className="w-[100vw] text-center mx-auto mt-40"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="inline  text-2xl sm:text-4xl text-gray-400 font-extrabold">
          About
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-blue-800 font-extrabold">
          United
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-cyan-500 font-extrabold">
          Manarat
        </div>
      </h1>
      <p
        className="w-[90vw] text-center font-semibold text-black mx-auto mt-8 font-roboto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        United Manarat is part of UMT Group which has an affiliated offices in
        Australia and Sudan. Companies within UMT group work collaboratively
        with each other to provide a high quality services to our valuable
        customers. United Manarat is a Saudi owned and run Company with a head
        office based in Riyadh which was established in <strong>2008</strong>.
        It is fully registered in Saudi Food & Drug Authority{' '}
        <strong>(SFDA)</strong>, <b>Registration No. MDEL IDL-2020-MD-1448</b>.{' '}
        <strong>Commercial Registration certificate No. 1010292230.</strong> We
        at UMT strive to provide premium healthcare solutions and technologies
        to its valued customers. We specialise in selling and distributing
        diagnostics medical and scientific devices to customers in Saudi Arabia
        and other neighboring countries. Our customers vary from across the
        health care profession and research scientists working in Laboratories,
        Medical centres, and Hospitals, Universities and Governmental
        organizations. Our products portfolio consists of high-quality, globally
        recognised devices as we import them from leading manufacturers in
        different parts of the world. We have passionate and highly trained
        staff who have extensive experience globally in the Sales and Medical
        industry. We are committed in providing a professional service
        throughout our entire company. At UMT our clients are our main priority,
        we pride ourselves on our client focused customised after-sales support.
        Our experience service team is dedicated to providing exceptional
        maintenance programs that ensure your devices are well maintained at all
        times. United Manarat looks forward to bringing you access to the latest
        and most innovative international technologies as they are produced.
      </p>
      <div
        className="w-[20vw] ml-10 sm:ml-20 mt-8 font-roboto flex flex-col items-start"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Yours Faithfully,
        <Image
          alt="signature"
          src="/signature.jpg"
          width={100}
          height={100}
          className="block"
        />
        <strong className="font-bold">Kamil Tahir</strong>{' '}
        <p>Business Development Manager</p>
      </div>

      <h1
        className="w-[100vw] text-center mx-auto mt-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="inline  text-2xl sm:text-4xl text-blue-800 font-extrabold">
          Our
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-cyan-500 font-extrabold">
          Vision
        </div>
      </h1>
      <p
        className="w-[90vw] text-center font-semibold text-black mx-auto mt-8 font-roboto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Our vision is to be choice number one and must trusted business partners
        to Healthcare providers when they seek a high quality diagnostic
        instruments and medical devices.
      </p>

      <h1
        className="w-[100vw] text-center mx-auto mt-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="inline  text-2xl sm:text-4xl text-blue-800 font-extrabold">
          Our
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-cyan-500 font-extrabold">
          Mission
        </div>
      </h1>
      <p
        className="w-[90vw] text-center font-semibold text-black mx-auto mt-8 font-roboto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        We are a successful entity and pride ourselves in providing personalised
        assistance along with simple and cost-efficient solutions to our valued
        clients. <br /> Much of our success is attribute to the fact that we
        provide high quality service and fast delivery. We maintain a large
        stockholding of medical and IVD supplies ready to dispatch when orders
        are placed.
        <br /> We are the preferred company for our consumers, customers,
        employees. We are a socially responsible company.
        <br /> United Manarat is a reliable partner, creating long-term joint
        value. We support and accelerate our customers growth offering smart
        choice solutions that improve the lives of our consumers. We thrive to
        deliver break-through, innovative, exceptional quality and high
        performing products that people trust and can afford. We respect, value
        and take care of our employees. Our staff share our vision and work
        towards achieving this in everything they do.
      </p>
      <h1 className="w-[100vw] text-center mx-auto mt-24 mb-12">
        <div className="inline  text-2xl sm:text-4xl text-blue-800 font-extrabold">
          Our
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-cyan-500 font-extrabold">
          Values
        </div>
      </h1>
      <Values />
    </section>
  );
};

export default about;
