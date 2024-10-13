import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './card';

function App() {
  const [data, setdate] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        const resData = response.data;
        // Check if we already have the data to prevent duplicates
        setdate((prev) => [...prev, ...resData]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

   return ()=> fetchData();
  }, [page]);

  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='max-w-7xl py-8 mx-auto'>
        <h1 className='text-center text-2xl font-bold'>List Of Cards</h1>
        <div className='grid grid-cols-3 gap-8'>
          {data.map((item) => (
            <Card key={item.id} data={item}></Card>
          ))}
        </div>
        {loading && <p>Loading more...</p>}
      </div>
    </>
  );
}

export default App;
