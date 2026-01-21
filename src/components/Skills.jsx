import React from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-serif font-bold">Skills</h1>
          <button onClick={() => navigate(-1)} className="px-3 py-1 bg-gray-100 rounded">Back</button>
        </div>

        <div className="space-y-8">
          <p className="text-base leading-relaxed">I am a passionate and driven developer with a strong foundation in building innovative software solutions. Whether it’s coding a mobile app, designing a user-friendly interface, or developing a scalable backend, I thrive on creating seamless, functional, and efficient systems that make a real impact.</p>

          <section>
            <h2 className="text-xl font-semibold mb-2">Programming & Development</h2>
            <div className="bg-gray-50 border border-gray-100 rounded p-4 space-y-3">
              <p><strong>Languages & Frameworks:</strong> Dart (Flutter), Python, JavaScript, HTML, CSS, React.</p>
              <p><strong>Mobile App Development:</strong> Flutter-focused mobile-first apps with emphasis on performance, animations, and responsive UI.</p>
              <p><strong>Backend & Databases:</strong> Firebase (Auth, Firestore, Storage, Cloud Functions) for scalable backend features.</p>
              <p><strong>APIs & Integrations:</strong> RESTful API design and integrations emphasizing performance and security.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">UI/UX Design & Frontend</h2>
            <div className="bg-gray-50 border border-gray-100 rounded p-4 space-y-3">
              <p><strong>Designing Clean Interfaces:</strong> User-centered, minimalistic interfaces focused on clarity and usability.</p>
              <p><strong>Animations & Interactions:</strong> Smooth transitions and responsive feedback using Flutter's animation tools.</p>
              <p><strong>Responsive Design:</strong> Consistent experiences across mobile, tablet, and desktop.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Version Control & Collaboration</h2>
            <div className="bg-gray-50 border border-gray-100 rounded p-4 space-y-3">
              <p><strong>Git & GitHub:</strong> Branching, PRs, and collaborative workflows.</p>
              <p><strong>Project Management:</strong> Agile methodologies, iterative delivery, backlog management.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Problem Solving & Continuous Learning</h2>
            <div className="bg-gray-50 border border-gray-100 rounded p-4 space-y-3">
              <p><strong>Critical Thinking:</strong> Break down complex problems and design systematic solutions.</p>
              <p><strong>Debugging & Optimization:</strong> Profiling and performance tuning across frontend and backend.</p>
              <p><strong>Continuous Learning:</strong> Quickly adopt new tools, frameworks, and best practices.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Other Skills & Interests</h2>
            <div className="bg-gray-50 border border-gray-100 rounded p-4 space-y-3">
              <p><strong>Technical Writing:</strong> Clean documentation and tutorials.</p>
              <p><strong>Teaching & Mentoring:</strong> Helping others learn and grow via mentoring and workshops.</p>
              <p><strong>Engineering Mindset:</strong> Architecture, reliability, and scalable design.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
