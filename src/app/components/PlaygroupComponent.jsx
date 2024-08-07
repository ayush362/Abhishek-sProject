// components/PlaygroupComponent.js

import React from 'react';

const ProgramsComponent = ({ title, ageGroup, duration, description, keyAreas, sessions, specials }) => {
  return (
    <div className="bg-purple-100 p-6 rounded-lg text-purple-800 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex gap-4 text-sm text-gray-700">
            <span>{ageGroup}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
      <p className="mb-6">{description}</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Key Areas in Playgroup Curriculum</h3>
          <ul className="list-disc list-inside">
            {keyAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Kidzee Sessions</h3>
          <ul className="list-disc list-inside">
            {sessions.map((session, index) => (
              <li key={index}>{session}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Kidzee Special</h3>
          <ul className="list-disc list-inside">
            {specials.map((special, index) => (
              <li key={index}>{special}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramsComponent;
