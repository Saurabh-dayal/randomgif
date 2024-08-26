import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');
  const [gif, setGif] = useState("");
  const [loading, setLoading ] = useState(false);
  async function fetchData() {
    setLoading(true);
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data} = await axios.get(url);
      const gifUrl = data.data.images.downsized_large.url;
      setGif(gifUrl);
      setLoading(false)   
    } catch (error) {
      console.error('Error fetching the GIF:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading ?(<Spinner/>) : (gif && <img src={gif} alt="Random Gif" width='450' />)
      }
      <input
      className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={(event) => setTag(event.target.value)}
      value={tag}
      />
     
      <button onClick={clickHandler} className='bg-blue-200 w-10/12 text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  );
};

export default Tag;
