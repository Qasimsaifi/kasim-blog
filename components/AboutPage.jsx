import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import {
  FaUser,
  FaLightbulb,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWeb } from "react-icons/md";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Bloggico - Web Development Blog</title>
        <meta
          name="description"
          content="Welcome to Bloggico - A blog dedicated to web development and technology. Learn from the passionate web developer, John Smith, and stay updated with the latest trends, tips, and tutorials in the world of web development."
        ></meta>
      </Head>
      <section className="mt-16">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 text-center">
              Welcome to Bloggico
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-48 h-48 overflow-hidden inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-75 rounded-full">
                <Image
                  src="/profile-image.png"
                  alt="John Smith"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              Hi there! Welcome to Bloggico - your go-to place for all things web development and technology. I'm John Smith, a passionate web developer, and I'm excited to share my knowledge and experiences with you.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              In this fast-paced digital era, staying up-to-date with the latest advancements in web development is crucial for professionals in the industry. With technology constantly evolving, keeping track of the newest tools, frameworks, and techniques can be overwhelming. That's where Bloggico comes to your rescue. I curate high-quality content that simplifies complex concepts, making it easier for you to grasp and implement in your projects.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              My goal is not just to teach you how to code but to inspire you to become an innovative and creative web developer who can build exceptional digital experiences. I believe that sharing knowledge is key to fostering a vibrant and inclusive developer community, and I encourage you to actively participate in discussions, ask questions, and learn together with me.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 mt-12">
              What You'll Find on Bloggico
            </h2>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              At Bloggico, I cover a broad spectrum of topics related to web development and technology. Some of the categories you'll find include:
            </p>
            <ul className="text-gray-600 dark:text-white text-lg mb-8 text-left list-disc list-inside ml-8">
              <li className="mb-2">Frontend Development: Dive into HTML, CSS, and JavaScript tutorials, and explore popular frontend libraries and frameworks like React.js, Vue.js, and Angular.</li>
              <li className="mb-2">Backend Development: Learn about server-side technologies like Node.js, Django, Ruby on Rails, and more, and understand how to build robust APIs and backend systems.</li>
              <li className="mb-2">Full Stack Development: Discover the art of connecting frontend and backend technologies to create seamless and dynamic web applications.</li>
              <li className="mb-2">Web Design: Explore the principles of UI/UX design and how to craft visually appealing and user-friendly interfaces.</li>
              <li className="mb-2">Performance Optimization: Find out how to optimize your websites for speed, performance, and better search engine rankings.</li>
              <li className="mb-2">Latest Trends and Tools: Stay updated with the latest trends, tools, and technologies in the ever-evolving web development landscape.</li>
              <li className="mb-2">Industry Insights: Gain valuable insights from interviews with industry experts and thought leaders in web development.</li>
            </ul>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 mt-12">
              Join Our Web Development Community
            </h2>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              Are you ready to embark on a journey of continuous learning and growth in web development? Join the Bloggico community today! Stay updated with my latest articles by subscribing to our newsletter and following me on social media. I promise to deliver valuable content right to your inbox and keep you informed about web development events, workshops, and opportunities.
            </p>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              Thank you for being a part of Bloggico's mission to empower web developers and technology enthusiasts worldwide. Let's explore the exciting world of web development together and build a brighter future for the digital landscape!
            </p>
            <div className="flex justify-center items-center space-x-12 mb-8">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <FaUser className="text-3xl text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
