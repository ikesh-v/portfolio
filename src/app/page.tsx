// /* eslint-disable react/no-unescaped-entities */
// import {
//   Code,
//   Settings,
//   Bike,
//   Gamepad,
// } from "lucide-react";
'use client'
import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: "FlipCart",
    tags: ["MongoDB", "Express.js", "Angular", "Node.Js"],
    description: "A FlipKart clone using MEAN stack",
    github: "https://github.com/ikesh-v/FlipCart",
  },
  // {
  //   title: "Shared Auth-Aware Header",
  //   tags: ["Microfrontend", "Angular"],
  //   description: "Cut session creation time by 80% with an optimized shared header across applications.",
  //   github: "https://github.com/ikesh-v",
  // },
  // {
  //   title: "CI/CD Optimizer",
  //   tags: ["Docker", "CI/CD"],
  //   description: "Streamlined pipelines, reducing lead time for hotfixes by 70%.",
  //   github: "https://github.com/ikesh-v",
  // },
];

export default function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans space-y-12">
      <div className='gradient-background'></div>
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Hello There.</h1>
        {/* <p className="text-xl text-gray-500">Frontend Engineer – Angular, React, SvelteKit</p> */}
        <p className="dark:text-slate-400 light:text-gray-500 max-w-xl mx-auto">
           I'm <b>Ikesh</b>, a <b>web engineer</b> with 4+ years of experience building performant, scalable frontend applications. Adept at CI/CD,
          clean architectures, and UX-focused development.
        </p>
        {/* <div className="flex justify-center gap-4">
          <a href="mailto:ikeshyadav1@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Me</a>
          <a href="/Ikesh-V-Frontend-Engineer-Resume-4Y.pdf" download className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Download Resume</a>
        </div> */}
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Kyndryl – Senior Associate II (2021–Present)</h3>
            <ul className="list-disc ml-5 mt-2 text-sm dark:text-slate-400 light:text-gray-500 space-y-1">
              <li>Improved dashboard architecture (SvelteKit), reduced load time by 60%.</li>
              <li>Built production-grade order status widget in 2 weeks (Angular).</li>
              <li>Enhanced shared auth-aware header, reducing session creation time by 80%.</li>
              <li>Optimized CI/CD pipelines, reduced critical fix lead time by 70%.</li>
            </ul>
          </div>
          <div className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Schneider Electric – Software Engineer Intern (2021)</h3>
            <p className="text-sm dark:text-slate-400 light:text-gray-500">Built a ReactJS-based UI for a network device, improving usability and UX.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm dark:text-slate-400 light:text-gray-500 mb-2">{project.description}</p>
              <div className="flex gap-2 flex-wrap mb-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="bg-gray-200 px-2 py-0.5 rounded text-xs">{tag}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" className="text-blue-600 text-sm underline">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm dark:text-slate-400 text-gray-500">
          <span>Angular</span><span>React.js</span><span>SvelteKit</span>
          <span>TypeScript</span><span>Redux</span><span>Node.js</span>
          <span>MongoDB</span><span>MySQL</span><span>HTML/CSS</span>
          <span>Jest</span><span>Playwright</span><span>Vite</span>
          <span>Docker</span><span>GitHub</span><span>CI/CD</span>
          <span>Cypress</span><span>Webpack</span><span>Responsive Design</span>
        </div>
      </section>

      {/* Achievements and Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Achievements & Education</h2>
        <ul className="list-disc ml-5 text-sm dark:text-slate-400 light:text-gray-500 space-y-1">
          <li>Published papers in Springer ICICC and IEEE GCAT (2021).</li>
          <li>Ranked 997 out of 180,000+ in KCET 2017.</li>
          <li>B.E. in Computer Science, MSRIT Bangalore (2017–2021), CGPA: 9.16</li>
        </ul>
      </section>
    </div>
  );
}
