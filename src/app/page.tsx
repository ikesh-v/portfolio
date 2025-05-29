// /* eslint-disable react/no-unescaped-entities */
// import {
//   Code,
//   Settings,
//   Bike,
//   Gamepad,
// } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="flex flex-col gap-[32px]">
//       <div className="flex row-start-2 columns-2 gap-36 justify-center">
//         <section className="flex flex-col gap-4 basis-6/10 flex-0">
//           <span className="text-8xl">
//             Hello there,
//           </span>
//           <div className="flex gap-8">
//             <div className="w-2 bg-(--ascent-1)"></div>
//             <section className="text-xl">
//               <p>
//                 I'm <span className="text-(--ascent-1)">Ikesh</span> — a web developer who loves building fast, clean, and responsive apps. I specialize in frontend development with a focus on high-performance, scalable architecture and smooth, user-friendly experiences.
//               </p>
//               <p>
//                 I've worked on developing a web framework-agnostic platform that integrates and hosts multiple applications, built for scalability and seamless interoperability.
//               </p>
//               <p>
//                 Read more <a href="/about">About Me</a>
//               </p>
//             </section>
//           </div>
//         </section>
//       </div>
//       <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
//       {/* Left: Image or Avatar */}
//       {/* <div className="flex justify-center">
//         <img
//           src="/profile.jpg" // Replace with your actual image path
//           alt="Ikesh V"
//           className="rounded-2xl shadow-xl w-64 h-64 object-cover"
//         />
//       </div> */}

//       {/* Right: About Text */}
//       <div>
//         <h2 className="text-3xl font-bold mb-4">About Me</h2>
//         <p className="text-gray-700 mb-4">
//           I'm <strong>Ikesh V</strong>, a frontend-focused web developer based in Bangalore with 4+ years of experience building high-performance, scalable apps.
//         </p>
//         <p className="text-gray-700 mb-4">
//           I've worked on developing web framework-agnostic platforms that integrate and host multiple applications — like the Kyndryl Bridge — focusing on modular design and seamless UX.
//         </p>
//         <p className="text-gray-700">
//           Outside of work, I love tinkering with electronics, 3D modeling, gaming, and riding motorcycles.
//         </p>
//       </div>

//       {/* Bottom: Skills + Fun Facts */}
//       <div className="md:col-span-2 grid md:grid-cols-2 gap-8 mt-12">
//         {/* Skills */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Skills</h3>
//           <ul className="grid grid-cols-2 gap-2 text-gray-800">
//             <li>React & TypeScript</li>
//             <li>JavaScript (ES6+)</li>
//             <li>HTML/CSS</li>
//             <li>CI/CD & GitHub Actions</li>
//             <li>Webpack & Vite</li>
//             <li>Responsive Design</li>
//           </ul>
//         </div>

//         {/* Fun Facts */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
//           <ul className="space-y-3 text-gray-700">
//             <li className="flex items-center gap-3"><Settings className="w-5 h-5" /> Built apps across multiple stacks</li>
//             <li className="flex items-center gap-3"><Bike className="w-5 h-5" /> Motorcycle enthusiast & modder</li>
//             <li className="flex items-center gap-3"><Gamepad className="w-5 h-5" /> Gamer & 3D modeling hobbyist</li>
//             <li className="flex items-center gap-3"><Code className="w-5 h-5" /> Passionate about clean, scalable code</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     </main>
//   );
// }
'use client'
import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className='gradient-background'></div>
      <section className="flex flex-row justify-between items-center flex-wrap mb-12 gap-16">
        <div className='max-w-150'>
          <h1 className="text-6xl font-bold">Hello There.</h1>
          <p className="text-lg">I'm <b>Ikesh</b>, a <b>web engineer</b> and <b>frontend developer</b>, with 4+ years of expirence building scalable and performance oriented web applications</p>
        </div>
        <div className="flex items-center gap-4">

          <Image
            src="/hero-image.svg"
            width={400}
            height={400}
            alt='hero-image'
          >
          </Image>
        </div>
      </section>

      <section className="mb-12 h-96 w-full">
        <p>
          
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Frontend: HTML, CSS, JavaScript, React, Tailwind</li>
          <li>DevOps: Docker, Jenkins, GitHub Actions, CI/CD</li>
          <li>Tools: Figma, Postman, Webpack, VSCode</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Kyndryl</strong> – Improved dashboard performance and optimized pipelines.</li>
          <li><strong>Schneider Electric</strong> – Developed responsive apps and implemented testing workflows.</li>
        </ul>
      </section>
    </div>
  );
}
