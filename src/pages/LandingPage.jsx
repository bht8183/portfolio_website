// src/pages/LandingPage.js
import React from 'react';
import Starfield from '../components/Starfield';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center z-10">
        <div className="bg-gray-900/60 p-12 rounded-lg space-y-7 text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-white">Hi, I’m Brian H. Tokumoto</h1>
          <p className="text-lg text-gray-200">
            Computer Science Graduate @ RIT • Building AI & Web Apps
          </p>
          <div className="space-x-4">
            <a href="#experience" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
              Experience
            </a>
            <a href="#certifications" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
              Certifications
            </a>
            <a href="#projects" className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
              Projects
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="AboutMe" className="relative min-h-screen flex items-center justify-center z-10">
        <div className="bg-gray-900/60 p-12 rounded-lg space-y-7 text-center max-w-2xl">
          <h1 className="text-2xl font-bold text-white">About Me</h1>
          <img 
            src={"/Me.jpeg"} 
            alt="Brian Tokumoto" 
            className="mx-auto rounded-full object-cover shadow-lg"
            style={{ width: "150px", height: "190px" }}
          />
          <p className="text-white text-sm leading-relaxed">
            I graduated with a Bachelor's degree in Computer Science at RIT with a strong passion for software development, 
            AI, and cloud solutions. I’ve worked on projects ranging from building AI assistants and 
            data-driven tools to developing APIs and embedded systems. Skilled in Java, Python, 
            C#, React, and SQL, I enjoy tackling problems across full-stack, cloud, and machine 
            learning domains. Beyond coding, I’m fluent in English, Spanish, and intermediate French, 
            and I thrive in collaborative, innovative environments.
          </p>
        </div>
      </section>


      {/* Experience Section */}
      <section id="expTitle" className="relative h-screen flex items-center justify-center z-10">
        <div className="bg-gray-900/60 p-12 rounded-lg space-y-7 text-center max-w-2xl">
        <h1 className="text-2xl font-bold text-white">Experience</h1>
        </div>
      </section>

<section
  id="experience"
  className="relative min-h-screen z-10 flex items-center justify-center py-20"
>
  {/* ⬅️ narrowed container: max-w-2xl */}
  <div className="bg-gray-900/70 p-8 rounded-lg max-w-2xl w-full space-y-8 text-white">

    <div className="space-y-7">
      {/* Job 1 */}
      <div className=" rounded-lg p-6 hover:bg-gray-800 transition">
        <h3 className="text-xl font-semibold">
          Software Development Intern – Central National Gottesman
        </h3>
        <p className="text-gray-400 italic text-sm">
          May 2024 – Mar 2025 | Hybrid
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm leading-relaxed">
          <li>
            Engineered a demo AI assistant leveraging internal documents with NLP to improve productivity.
          </li>
          <li>
            Built an Azure-hosted web scraper for tax exemption applications to identify department trends.
          </li>
          <li>
            Developed an RSS-based tool for news aggregation and metal price trend predictions.
          </li>
        </ul>
      </div>

      {/* Job 2 */}
      <div className="rounded-lg p-6 hover:bg-gray-800 transition">
        <h3 className="text-xl font-semibold">
          Software Development Intern – Quad Graphics
        </h3>
        <p className="text-gray-400 italic text-sm">
          May 2023 – Aug 2023 | Remote
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm leading-relaxed">
          <li>
            Developed a location-based notification mobile app with Kivy libraries.
          </li>
          <li>
            Implemented Firebase-based user location system with real-time data retrieval.
          </li>
          <li>
            Used Pandas for modeling, visualization, and data-driven insights for decision-making.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section id="ProjpTitle" className="relative h-screen flex items-center justify-center z-10">
        <div className="bg-gray-900/60 p-12 rounded-lg space-y-7 text-center max-w-2xl">
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        </div>
      </section>

      {/*Projects section*/}

{/* Projects Section */}
<section
  id="projects"
  className="relative min-h-screen z-10 flex items-center justify-center py-20">

  <div className="bg-gray-900/70 p-12 rounded-lg max-w-6xl w-full space-y-8 text-white">

    <div className="space-y-7">

      {/* Project 1 */}
      <div className="rounded-lg p-8 hover:bg-gray-800 transition">
        <h3 className="text-xl font-semibold">IT Electric Vehicle Team (Telemetry Team)</h3>
        <ul className="list-disc list-outside text-gray-300 mt-4 space-y-2 text-base leading-relaxed pl-6">
          <li>Designed and implemented RESTful API endpoints to enable efficient management and retrieval of sensor
          configurations and real-time telemetry data, ensuring scalable and maintainable backend services.</li>
          <li>Developed and integrated a secure token-based authentication system using industry-standard protocols to safeguard
          access to the telemetry team’s web platform.</li>
          <li>Executed a database migration from a traditional relational schema to a flexible, document-oriented NoSQL model
          leveraging MongoDB, significantly enhancing data scalability and schema adaptability for ongoing and future
          telemetry applications.</li>
        </ul>
      </div>
      {/* Project 2 */}
      <div className="rounded-lg p-8 hover:bg-gray-800 transition">
        <h3 className="text-xl font-semibold">RIT Launch Initiative Avionics</h3>
        <ul className="list-disc list-outside text-gray-300 mt-4 space-y-2 text-base leading-relaxed pl-6">
          <li>Optimized system boot-up performance by designing and implementing a multi-threaded initialization routine for the
            sensor module, reducing startup latency and improving overall system responsiveness.
          </li>
          <li>Engineered low-level device drivers for current and temperature sensors interfaced with the flight computer
            backplane, ensuring accurate real-time data acquisition and robust hardware integration.
          </li>
        </ul>
      </div>

      {/* Project 3 */}
      <div className="rounded-lg p-8 hover:bg-gray-800 transition">
        <h3 className="text-xl font-semibold">MNIST Digit Recognizer</h3>
        <ul className="list-disc list-outside text-gray-300 mt-4 space-y-2 text-base leading-relaxed pl-6">
          <li>Developed and evaluated machine learning classification models using K-Nearest Neighbor and Support Vector 
            Machine (SVM) algorithms, achieving a classification accuracy of 97.35% with the SVM model through
            training and hyperparameter tuning
          </li>
          <li>Achieved 97.35% accuracy with SVM.</li>
        </ul>
      </div>

      {/* Project 4 */}
      <div className="rounded-lg p-8 hover:bg-gray-800 transition">
        <h3 className="text-xl font-semibold">Database Application</h3>
        <ul className="list-disc list-outside text-gray-300 mt-4 space-y-2 text-base leading-relaxed pl-6">
          <li>Collaborated in the design and implementation of a multi-user database application for managing bibliographic data
            including books, authors, and ratings, facilitating concurrent access and data integrity.
          </li>
          <li>Employed Enhanced Entity-Relationship (EER) modeling to structure complex relational data, and implemented the 
            backend using PostgreSQL, ensuring scalable and efficient data management.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>




      <section id="expTitle" className="relative h-screen flex items-center justify-center z-10">
        <div className="bg-gray-900/60 p-12 rounded-lg space-y-7 text-center max-w-2xl">
        <h1 className="text-2xl font-bold text-white">Certifications</h1>
        </div>
      </section>

      

      {/* Certifications Section */}
      <section id="certifications" className="relative min-h-screen flex items-center justify-center z-10 p-12">
        <div className="bg-gray-900/70 p-10 rounded-lg max-w-3xl w-full space-y-8 text-white">
          <h2 className="text-4xl font-bold text-center">Certifications</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>MIT - Cloud & DevOps: Continuous Transformation</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>CIBERTEC - Visual Studio .NET CORE Fundamentals</li>
            <li>EDUCBA - Embedded Systems using C</li>
            <li>UPC - intermediate UI/UX design</li>
          </ul>
        </div>
      </section>






      <section id="expTitle" className="relative h-screen flex items-center justify-center z-10">
        <div className=" p-12 rounded-lg space-y-7 text-center max-w-2xl">
        <h1 className="text-2xl font-bold text-white">:D</h1>
        </div>
      </section>

      
    </div>
  );
}