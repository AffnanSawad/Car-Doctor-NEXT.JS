"use client";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are driven by innovation, excellence, and a passion for delivering top-tier solutions.
          </p>
        </div>
      </div>

      {/* Company Mission & Story */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/assets/images/team/3.jpg"
            width={500}
            height={500}
            alt="Team photo"
            className="rounded-xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg mb-4">
              We’re a team of designers, developers, and strategists committed to crafting exceptional digital experiences.
              With a focus on user-centric design and powerful technology, we help businesses achieve their goals online.
            </p>
            <p className="text-lg">
              From startups to established enterprises, our mission is to deliver high-quality solutions tailored to each client's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Features / Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We embrace cutting-edge technology and creativity in every project.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p>Building strong, transparent relationships with clients is our top priority.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p>We never compromise on delivering flawless, user-friendly solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Card */}
            {[
              { name: "Affnan Sawad", title: "Full Stack Developer", image: "/assets/images/team/155246631.jpeg" },
              { name: "Nusrat Jerin Tushi", title: "UI/UX Designer", image: "/assets/images/team/photo_2025-04-30_00-17-19.jpg" },
              { name: "Rafiul Hasan", title: "Frontend Engineer", image: "/assets/images/team/images.jpeg" },
            ].map((member, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
