import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        const data = await res.json();

        if (res.ok) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col items-center gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='hidden md:block text-3-xl font-bold lg:text-6xl'>
          Willkommen bei Eleni's <span className='text-yellow-400'>Bekery</span>
        </h1>

        <p className='text-gray-500 text-4xl sm:text-lg'>
          Willkommen in unserer Bäckerei! Entdecken Sie köstliche Leckereien und
          frisch zubereitete Versuchungen. Besuchen Sie uns noch heute!
        </p>
        <img className='w-13 h-13' src='/logo.png' alt='logo' />
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          Alle Posts anzeigen
        </Link>
      </div>



      <div className='max-w-[1400px] mx-auto p-3 flex flex-col gap-5 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>
              Aktuelle Beiträge
            </h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              {' '}
              Alle Posts anzeigen
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
