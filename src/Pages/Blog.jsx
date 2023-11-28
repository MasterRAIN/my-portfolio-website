import React, { useState } from 'react';

const postsData = [
  {
    title: 'Unleashing the Power of PHP: A Comprehensive Guide to Writing Code with PHP',
    author: 'Rainier',
    date: 'October 21, 2023',
    imageUrl: process.env.PUBLIC_URL + '/Images/php.jpg',
    content: 'PHP, a versatile and widely-used server-side scripting language, has been the backbone of dynamic web development for decades.',
  },
  {
    title: 'The Art and Science of Responsive Web Design',
    author: 'Rainier',
    date: 'October 22, 2023',
    imageUrl: process.env.PUBLIC_URL + '/Images/responsive.jpg',
    content: 'In our ever-evolving digital landscape, the way we access information has undergone a profound transformation.',
  },
  {
    title: 'Crafting Dynamic User Interfaces: Writing Code with React',
    author: 'Rainier',
    date: 'October 19, 2023',
    imageUrl: process.env.PUBLIC_URL + '/Images/react_code.jpg',
    content: 'React, a popular JavaScript library developed by Facebook, has revolutionized the way we build user interfaces for web applications.',
  },
  {
    title: 'Unveiling the Power of MySQL: A Comprehensive Guide to Database Management',
    author: 'Rainier',
    date: 'October 20, 2023',
    imageUrl: process.env.PUBLIC_URL + '/Images/mysql.jpg',
    content: 'Databases are the backbone of modern software applications, enabling the storage, retrieval, and management of vast amounts of data.',
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Posts() {
  
  shuffleArray(postsData);

  const randomPosts = postsData.slice(0, 3);
  const randomPosts2 = postsData.slice(3, 7);

  return (
    <div className="flex w-9/12 pt-10 pl-20 gap-10 pb-20">
      <div className="w-7/12">
        {randomPosts.map((random, index) => (
          <a href="" key={index}>
            <div className="mb-10 p-6 bg-white rounded-xl dark:bg-g shadow-md hover:scale-105 transition-all duration-300 post-card">
              <img className="h-form rounded-xl object-cover" src={random.imageUrl} alt="" loading="lazy" />
              <br />
              <h2 className="text-xl font-bold text-black dark:text-white post-title">{random.title}</h2>
              <h1 className="text-sm text-c font-bold flex gap-10">
                <div className="flex align-center">
                  <ion-icon name="person" class="h-4 w-4 mr-2"></ion-icon>
                  {random.author}
                </div>
                <div className="flex align-center">
                  <ion-icon name="calendar" class="h-4 w-4 mr-2"></ion-icon>
                  {random.date}
                </div>
              </h1>
              <br />
              <p className="dark:text-a">{random.content}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="w-5/12">
        {randomPosts2.map((random2, index) => (
          <a href="" key={index}>
            <div className="mb-10 p-6 bg-white rounded-xl dark:bg-g shadow-md hover:scale-105 transition-all duration-300 post-card">
              <img className="rounded-xl object-cover" src={random2.imageUrl} alt="" loading="lazy" />
              <br />
              <h2 className="text-xl font-bold text-black dark:text-white post-title">{random2.title}</h2>
              <h1 className="text-sm text-c font-bold mb-4 flex gap-10">
                <div className="flex align-center"><ion-icon name="person" class="h-4 w-4 mr-2"></ion-icon>{random2.author}</div>
                <div className="flex align-center"><ion-icon name="calendar" class="h-4 w-4 mr-2"></ion-icon>{random2.date}</div>
              </h1>
              <p className="dark:text-a">{random2.content}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function TrendingPosts() {
  const [search, setSearch] = useState('');
  const sortedPosts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const [filteredTrendingPosts, setFilteredTrendingPosts] = useState(sortedPosts);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    // Filter the trending posts based on the search input
    const filteredPosts = sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredTrendingPosts(filteredPosts);
  };

  const handleClear = () => {
    setSearch(''); 
    setFilteredTrendingPosts(postsData); 
  };

  return (
    <div className="w-4/12 h-fit sticky top-16 pt-10 pr-20">
      <div className="rounded-md h-10 flex shadow-md overflow-hidden bg-white dark:text-a dark:bg-g transition-colors duration-300">
        <div className="w-16 grid place-content-center text-c">
          <ion-icon name="search"></ion-icon>
        </div>
        <input
          className="w-full h-10 py-1 outline-none dark:bg-g transition-colors duration-300"
          type="text"
          placeholder="Search by title . . ."
          value={search}
          onChange={handleSearch}
        />
        <button className="w-16 grid place-content-center text-error" onClick={handleClear}>
          <ion-icon name="close"></ion-icon>
        </button>
      </div>
      <h2 className="text-xl font-bold dark:text-white p-4 overflow-auto">
        {search
          ? `Results for "${search}"`
          : "All Contents"
        }
      </h2>
      <div className="h-contents overflow-y-auto dark:text-white">
        {filteredTrendingPosts.map((trending, index) => (
          <a href="#" key={index}>
            <div className="flex gap-2 items-center mb-8 mr-2 post-card2">
              <div className="w-full">
                <h2 className="text-sm text-black font-bold post-title2">{trending.title}</h2>
                <h1>
                  <div className="flex align-center text-xs text-c">
                    <ion-icon name="person" class="h-3 w-3 mr-2"></ion-icon>
                    {trending.author}
                  </div>
                  <div className="flex align-center text-xs text-c">
                    <ion-icon name="calendar" class="h-3 w-3 mr-2"></ion-icon>
                    {trending.date}
                  </div>
                </h1>
              </div>
              <img className="rounded-md w-40 h-32 object-cover" src={trending.imageUrl} alt="" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div className="relative flex gap-10">
      {/* <Posts />
      <TrendingPosts /> */}
    </div>
  );
}

export default Blog;