import React from 'react';

function LinkProfileBadge({ profileUrl, name, description1, description2, imageUrl, logoUrl }) {
  return (
    <div className="fb-badge bg-white shadow">
      <div className="badge-head flex gap-1 px-4 items-center">
        <img className="h-5" src={process.env.PUBLIC_URL + logoUrl} alt="logo" loading="lazy" />
      </div>
      <div className="px-4 py-3">
        <img className="h-14 rounded-full" src={process.env.PUBLIC_URL + imageUrl} alt={name} loading="lazy" />
        <h1 className="pt-2 font-sans text-black font-semibold hover:underline">
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h1>
        <h1 className="pt-1 font-sans text-black text-sm">{description1}</h1>
        <h1 className="pt-1 pb-2 font-sans text-black text-xs">{description2}</h1>
        <button className="font-sans px-4 py-1 rounded-full border-2 border-c hover:shadow-md">
          <a className="text-c font-bold" href={profileUrl} target="_blank" rel="noopener noreferrer">
            View profile
          </a>
        </button>
      </div>
    </div>
  );
}

export default LinkProfileBadge;