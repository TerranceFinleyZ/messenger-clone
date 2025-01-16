import React, { useState, ChangeEvent } from 'react';



const Max = ({ placeholder = 'Ask Meta AI or Search' }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit} className="w-full"> {/* Added form for submission */}
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          className="w-full bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
        <button type="submit" className="absolute right-0 top-0 mt-1 mr-2 p-1 rounded-md text-gray-200 hover:text-gray-800 focus:outline-none">
          {/* Search Icon (You can replace this with an actual icon) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Max;