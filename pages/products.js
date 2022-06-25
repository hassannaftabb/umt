import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdDoubleArrow } from 'react-icons/md';
const products = () => {
  const instruments = [
    'Ovens',
    'Stirrers',
    'Shakers',
    'Sterilizers',
    'Autoclaves',
    'Incubators',
    'Centrifuges',
    'Microscopes',
    'Waterbaths',
    'Refrigerators',
    'Laboratory Freezers',
    'Safety Cabinets',
    'Slide Stainers',
    'Digital pipettes',
    'Plasma Thawers',
    'Platelet Agitators',
    'ELISA Reader & Washer',
    'Blood Donation and Therapy Chairs',
  ];
  const dispcons = [
    'Gloves',
    'Lab coats',
    'Face masks',
    'Test tubes',
    'Cuvettes',
    'Coverslips',
    'Glass Slides',
    'Glassware',
    'Rapid tests',
    'Lab reagents',
    'Culture media',
    'Transport media',
    'Disposable pipettes',
  ];
  return (
    <section className="mt-20">
      <h1 className="w-[100vw] text-center mx-auto mt-40">
        <div className="inline  text-2xl sm:text-4xl text-blue-800 font-extrabold">
          Our
        </div>
        &nbsp;
        <div className="inline  text-2xl sm:text-4xl text-cyan-500 font-extrabold">
          Products
        </div>
        <p className="text-center px-8 sm:px-24 p-2">
          United Manarat is a valuable business partners for many local and
          international suppliers. We work as a sub-distributor for many
          well-established Companies in Saudi market. We also import many
          products from international manufacturers based in US, Europe and
          Asia.
        </p>
      </h1>
      <div className="w-100vw flex flex-col items-center justify-center">
        <div>
          <section>
            <div className="px-4 mx-auto max-w-screen-2xl mt-10">
              <h1 className="sm:text-2xl text-xl font-bold text-blue-900 p-10 underline">
                Automated Chemistry Analyzer
              </h1>

              <div
                className="grid grid-cols-1 lg:grid-cols-2 mt-10"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="relative z-10 ">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/pentra_c2200.png"
                        alt="product"
                        width={300}
                        height={300}
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">
                        Pentra C2200
                      </p>
                    </h2>

                    <p className="mt-4 text-gray-600">
                      A fully automated chemistry analyzer designed for small to
                      medium size Laboratory setting. It can provide faster,
                      easier, more accurate medical diagnosis using different
                      sample types.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-4 mx-auto max-w-screen-2xl sm:px-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/pentra_c400.png"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">
                        Pentra C400
                      </p>
                    </h2>

                    <p className="mt-4 text-gray-600">
                      A fully automated chemistry analyzer designed for small to
                      medium size Laboratory setting. It can provide faster,
                      easier, more accurate medical diagnosis using different
                      sample types.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-screen-2xl mt-10">
              <h1 className="sm:text-2xl text-xl font-bold text-blue-900 p-10 underline">
                Automated Electrolyte Analyzer:
              </h1>

              <div
                className="grid grid-cols-1 lg:grid-cols-2 mt-10"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="relative z-10 ">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/automated_electrolyte_analyzer.jpg"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">
                        Automated Electrolyte Analyzer
                      </p>
                    </h2>

                    <p className="mt-4 text-gray-600">
                      A fully automated electrolyte analyzer that measures Na+,
                      K+, Cl-, Ca++ and Li+ in whole blood, serum, plasma and
                      urine utilizing Ion Selective Electrode (ISE) technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-screen-2xl mt-10">
              <h1 className="sm:text-2xl text-xl font-bold text-blue-900 p-10 underline">
                Automated Hematology Analyzer:
              </h1>

              <div
                className="grid grid-cols-1 lg:grid-cols-2 mt-10"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="relative z-10 ">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/3_part_hematology.png"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">
                        3-Part Hematology Analyzer
                      </p>
                    </h2>

                    <p className="mt-4 text-gray-600">
                      A fully automated hematology analyzer which rapidly
                      analyzes whole blood specimen for the complete blood count
                      (CBC). Results include red blood cell (RBC) count, white
                      blood cell (WBC) count, platelet count, hemoglobin
                      concentration, hematocrit, RBC indices, and a leukocyte
                      differential. We sell two different types of Hematology
                      Analyzer, 3-part leukocytes differential and 5-part
                      leukocytes differential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-4 mx-auto max-w-screen-2xl sm:px-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/5_part_hematology.jpg"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">
                        5-Part Hematology Analyzer
                      </p>
                    </h2>

                    <p className="mt-4 text-gray-600">
                      A fully automated hematology analyzer which rapidly
                      analyzes whole blood specimen for the complete blood count
                      (CBC). Results include red blood cell (RBC) count, white
                      blood cell (WBC) count, platelet count, hemoglobin
                      concentration, hematocrit, RBC indices, and a leukocyte
                      differential. We sell two different types of Hematology
                      Analyzer, 3-part leukocytes differential and 5-part
                      leukocytes differential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-screen-2xl mt-10">
              <h1 className="sm:text-2xl text-xl font-bold text-blue-900 p-10 underline">
                Urea Breath Test Analyzer:
              </h1>

              <div
                className="grid grid-cols-1 lg:grid-cols-2 mt-10"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="relative z-10 ">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute rounded-lg"
                        src="/products/urea_breath_analyzer.png"
                        alt="product"
                        width={600}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">
                        Urea Breath Test Analyzer
                      </p>
                    </h2>

                    <p className="mt-4 text-gray-600">
                      A non-invasive Urea Breath Test analyzer used for
                      detection the presence of a current infection of
                      Helicobacter pylori in the human stomach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-screen-2xl mt-10">
              <h1 className="sm:text-2xl text-xl font-bold text-blue-900 p-10 underline">
                Point of Care Testing Analyzer:
              </h1>

              <div
                className="grid grid-cols-1 lg:grid-cols-2 mt-10"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="relative z-10 ">
                  <div className="relative h-52 flex items-center justify-center sm:h-80">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/poc_analyzer.png"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">
                        Point of Care Testing Analyzer
                      </p>
                    </h2>

                    <p className="mt-4 text-gray-600">
                      Our point-of-care (PoC) analyzer is for use within
                      clinics, hospitals and laboratories to provide fast and
                      accurate results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="sm:text-lg text-sm p-8 font-semibold text-blue-900">
              Our point of care range includes the following tests:
            </h1>

            <div
              className="px-4 mx-auto max-w-screen-2xl sm:px-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/hba1c.png"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>
                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">HbA1c</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-4 mx-auto max-w-screen-2xl sm:px-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/crp.png"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>
                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">CRP</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="px-4 mx-auto max-w-screen-2xl sm:px-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative z-10">
                  <div className="relative h-64 sm:h-80 flex items-center justify-center">
                    <div className="inline">
                      <Image
                        className="absolute"
                        src="/products/iFOBT.png"
                        alt="product"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>
                  <div className="p-10 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      <p className="font-bold text-blue-600 inline">iFOBT</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 mx-auto max-w-screen-2xl mt-10">
              <h1 className="sm:text-2xl text-xl font-bold text-blue-900 p-10 underline">
                Scientific and Research Instruments:
              </h1>
              <div className="flex flex-col items-center justify-center">
                <div className="relative z-10 ">
                  <div className="inline">
                    <div className="w-full flex items-center justify-center mt-2 p-4">
                      <Image
                        alt="pic_1"
                        src="/products/instruments.png"
                        width={1000}
                        height={500}
                        className="border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <ul className="grid  grid-cols-1 sm:grid-cols-4 p-10">
                  {instruments.map((instrument) => {
                    return (
                      <li key={instrument} className="flex m-2 items-center">
                        <MdDoubleArrow className="text-blue-600" />
                        {instrument}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-screen-2xl mt-10 mb-20">
              <h1 className="sm:text-2xl text-xl font-bold text-blue-900 p-10 underline">
                Disposable and Consumables:
              </h1>
              <div className="flex flex-col items-center justify-center">
                <div className="relative z-10 ">
                  <div className="inline">
                    <div className="w-full flex items-center justify-center mt-2 p-4">
                      <Image
                        alt="pic_1"
                        src="/products/disp_cons.png"
                        width={800}
                        height={400}
                        className="border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-4 p-8">
                  {dispcons.map((dispcon) => {
                    return (
                      <li key={dispcon} className="flex m-2 items-center">
                        <MdDoubleArrow className="text-blue-600" />
                        {dispcon}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex">
                  <div className="inline mx-4">
                    <Image
                      alt="pic_1"
                      src="/products/dispcon_2.jpg"
                      width={350}
                      height={250}
                      className="border rounded-lg p-4 inline"
                    />
                  </div>
                  <div className="inline mx-4">
                    <Image
                      alt="pic_1"
                      src="/products/dispcon_3.jpg"
                      width={350}
                      height={250}
                      className="border rounded-lg p-4 inline"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default products;
