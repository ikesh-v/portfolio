// components/AboutMe.tsx
import {
  Code,
  Settings,
  Bike,
  Gamepad,
} from "lucide-react";

export default function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Image or Avatar */}
      <div className="flex justify-center">
        <img
          src="/profile.jpg" // Replace with your actual image path
          alt="Ikesh V"
          className="rounded-2xl shadow-xl w-64 h-64 object-cover"
        />
      </div>

      {/* Right: About Text */}
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          I'm <strong>Ikesh V</strong>, a frontend-focused web developer based in Bangalore with 4+ years of experience building high-performance, scalable apps.
        </p>
        <p className="text-gray-700 mb-4">
          I've worked on developing web framework-agnostic platforms that integrate and host multiple applications — like the Kyndryl Bridge — focusing on modular design and seamless UX.
        </p>
        <p className="text-gray-700">
          Outside of work, I love tinkering with electronics, 3D modeling, gaming, and riding motorcycles.
        </p>
      </div>

      {/* Bottom: Skills + Fun Facts */}
      <div className="md:col-span-2 grid md:grid-cols-2 gap-8 mt-12">
        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-800">
            <li>React & TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML/CSS</li>
            <li>CI/CD & GitHub Actions</li>
            <li>Webpack & Vite</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Fun Facts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Fun Facts</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3"><Settings className="w-5 h-5" /> Built apps across multiple stacks</li>
            <li className="flex items-center gap-3"><Bike className="w-5 h-5" /> Motorcycle enthusiast & modder</li>
            <li className="flex items-center gap-3"><Gamepad className="w-5 h-5" /> Gamer & 3D modeling hobbyist</li>
            <li className="flex items-center gap-3"><Code className="w-5 h-5" /> Passionate about clean, scalable code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
