import Image from "next/image";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function About() {
  return (
  <>
  <Navbar />
    <div className="font-outfit">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/about.png"
          alt="Laundry Equipment"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-lg md:text-xl font-light">
            Dedicated to keeping your laundry equipment running smoothly with expert care you can trust.
          </p>
        </div>
      </section>

{/* SECOND SECTION */}
<section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-10 bg-white font-outfit relative overflow-hidden">
  {/* Image Stack */}
  <div className="relative w-full md:w-1/2 flex justify-center items-center">
    {/* Back Image */}
    <div className="absolute top-0 left-0 md:left-16 transform md:-translate-y-10">
      <Image
        src="/tech1.png"
        alt="Technician working"
        width={350}
        height={350}
        className="rounded-xl shadow-xl object-cover"
      />
    </div>

    {/* Front Image */}
    <div className="relative z-10 translate-y-24 md:translate-x-20">
      <Image
        src="/tech2.png"
        alt="Technician repairing washer"
        width={350}
        height={350}
        className="rounded-xl shadow-xl object-cover"
      />
    </div>
  </div>

  {/* Text Content */}
  <div className="w-full md:w-1/2 space-y-6 text-gray-700 md:pl-10">
    <h3 className="text-lg font-semibold text-orange-500">About Us</h3>
    <p className="text-base leading-relaxed">
      At <span className="font-bold text-gray-800">Washer Tech</span>, we specialize in repairing and maintaining all laundry equipment, from washers and dryers to spin machines and ironers. Our goal is to keep your laundry running smoothly with fast, reliable, and professional service across Zimbabwe.
    </p>
    <div className="border-l-4 border-orange-500 pl-4 italic text-sm text-gray-600">
      We’re dedicated to keeping every laundry cycle stress-free with dependable repairs and regular maintenance. From homes to businesses, our focus is on quality, speed, and lasting solutions you can trust.
    </div>
    <h4 className="text-md font-semibold text-orange-500">
      Dedicated to Quality and Customer Satisfaction
    </h4>
    <p className="text-base leading-relaxed">
      We go beyond fixing machines—we restore your peace of mind. At Washer Tech, we believe every home and business deserves smooth-running laundry systems. That’s why we combine expert knowledge, advanced tools, and genuine care to deliver repair solutions that last.
    </p>
    <p className="text-base leading-relaxed">
      From your first call to the final test run, our focus is on reliability, transparency, and your complete satisfaction.
    </p>
    <Link href="#"><button className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition duration-300">
      Learn More
    </button></Link>
  </div>
</section>
<section className=" relative bg-white overflow-hidden flex flex-col md:flex-row">
  {/* Left Side with Clip-Path */}
  <div className="relative w-full md:w-1/2 bg-gray-800 text-white p-8 md:p-16 clip-diagonal">
    <div className="max-w-md">
      <h2 className="text-3xl font-bold mb-4">Built on Trust, Driven by Excellence</h2>
      <p className="text-base leading-relaxed mb-6">
        Every repair tells a story of reliability and commitment. Our mission and vision reflect our promise to deliver expert care, innovative solutions, and lasting value for every laundry system we touch.
      </p>

      {/* Video Placeholder */}
      <div className="bg-white p-2 rounded-lg shadow-lg inline-block">
        <Image src="/hero-bg.jpg" alt="Technician Video" width={250} height={150} className="rounded-md" />
        <div className="absolute -mt-20 ml-24">
          <div className="bg-red-600 rounded-full p-3">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side with Main Image and Cards */}
  <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center justify-center relative">
    <Image src="/tech1.png" alt="Technician Working" width={500} height={400} className="rounded-lg shadow-md" />

    {/* Cards Overlaid */}
    <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg w-64 z-10">
      <h4 className="text-orange-500 font-semibold mb-2">Our Vision</h4>
      <p className="text-sm text-gray-700">
        At Washer Tech, We specialize in repairing and maintaining all laundry equipment. From washers and dryers to spin machines and ironers. Our goal is to keep your laundry running smoothly with fast, reliable and professional service across Zimbabwe.
      </p>
    </div>
    <div className="absolute bottom-10 right-10 bg-white p-4 rounded-lg shadow-lg w-64 z-10">
      <h4 className="text-orange-500 font-semibold mb-2">Our Mission</h4>
      <p className="text-sm text-gray-700">
        At Washer Tech, We specialize in repairing and maintaining all laundry equipment. From washers and dryers to spin machines and ironers. Our goal is to keep your laundry running smoothly with fast, reliable and professional service across Zimbabwe.
      </p>
    </div>
  </div>
</section>
<section className="bg-gray-800 text-white py-16 px-6 md:px-20 font-outfit">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Text Content */}
    <div className="md:w-1/2 space-y-4">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Hands-On Expertise You Can Rely On
      </h2>
      <p className="text-base text-gray-300">
        From diagnosing faults to fine-tuning performance, our team ensures every repair meets professional standards and delivers lasting results.
      </p>
    </div>

    {/* Image Grid */}
    <div className="md:w-1/2 flex flex-col md:flex-row gap-6 items-center justify-center">
      <div className="flex flex-col gap-6">
        <Image
          src="/hero-bg.jpg"
          alt="Technician portrait"
          width={250}
          height={250}
          className="rounded-xl shadow-lg object-cover"
        />
        <Image
          src="/tech4.jpg"
          alt="Washing machine repair"
          width={250}
          height={250}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
      <div className="mt-6 md:mt-0">
        <Image
          src="/tech5.jpg"
          alt="Repairing washer"
          width={250}
          height={250}
          className="rounded-xl shadow-lg object-cover rotate-3"
        />
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-16 px-6 md:px-20 font-outfit">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Images */}
    <div className="flex gap-6 w-full md:w-1/2 justify-center">
      <Image
        src="/washer1.jpg"
        alt="Opened washing machine"
        width={250}
        height={300}
        className="rounded-xl shadow-lg object-cover"
      />
      <Image
        src="/washer2.jpg"
        alt="Tools and disassembled washer"
        width={250}
        height={300}
        className="rounded-xl shadow-lg object-cover"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 space-y-4 text-gray-700">
      <p className="uppercase text-sm text-gray-400">
        Durable. Dependable. Done Right.
      </p>
      <h2 className="text-3xl font-semibold text-gray-900">
        We Keep Your Machines Running Like New
      </h2>
      <p className="text-base leading-relaxed">
        Every washer has a story, and we make sure yours keeps going strong. Our expert care restores performance, extends lifespan, and gives your laundry the clean, effortless results you expect.
      </p>
      <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition duration-300">
        See How We Repair
      </button>
    </div>
  </div>
</section>
<section className="bg-gray-50 py-20 px-6 md:px-20 font-outfit text-center">
  <h2 className="text-3xl md:text-4xl font-semibold text-orange-500 mb-2">
    Our Services
  </h2>
  <p className="text-gray-500 mb-10">
    Keeping Every Laundry Machine at Its Best
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
    
    {/* Service Box */}
    <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-orange-500 text-2xl mb-3">🧺</div>
      <h3 className="font-semibold text-lg mb-2">Washing Machine Repair</h3>
      <p className="text-sm text-white">
        We fix all washer issues, from drainage problems to spin failures—ensuring your machine runs smoothly with lasting performance.
      </p>
    </div>

    <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-orange-500 text-2xl mb-3">🔥</div>
      <h3 className="font-semibold text-lg mb-2">Tumble Dryer Repair</h3>
      <p className="text-sm text-white">
        Quickly diagnose & resolve drying faults. Our expert care restores heat performance and safety for every load.
      </p>
    </div>

    <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-orange-500 text-2xl mb-3">⚙️</div>
      <h3 className="font-semibold text-lg mb-2">Spin Machine Maintenance</h3>
      <p className="text-sm text-white">
        We specialize in lubrication and balancing for quiet, vibration-free operation that extends your machine’s lifespan.
      </p>
    </div>

    <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-orange-500 text-2xl mb-3">🧼</div>
      <h3 className="font-semibold text-lg mb-2">Ironer & Press Repair</h3>
      <p className="text-sm text-white">
        From roller faults to heater issues, we restore flatwork ironers and roller presses to factory-finish smoothness.
      </p>
    </div>

    <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-orange-500 text-2xl mb-3">🛠️</div>
      <h3 className="font-semibold text-lg mb-2">Washing Machine Repair</h3>
      <p className="text-sm text-white">
        We fix all washer issues, from drainage problems to spin failures—ensuring your machine runs reliably and efficiently.
      </p>
    </div>

    <div className="bg-gray-500 p-6 rounded-lg shadow hover:shadow-lg transition">
      <div className="text-orange-500 text-2xl mb-3">🧺</div>
      <h3 className="font-semibold text-lg mb-2">Washing Machine Repair</h3>
      <p className="text-sm text-white">
        The full washer service: from diagnostic problems to spin failures and leaks—bringing it back to smooth operation.
      </p>
    </div>

  </div>
</section>
<Footer />
</div>
</>
  );
}
