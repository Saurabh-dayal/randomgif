// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGIF = () => {
    
    // const [gif, setGif] = useState("");
    // const [loading, setLoading ] = useState(false);

    // async function fetchData(tag) {
    //   setLoading(true);
    //   try {
        
    //     const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url );
    //     const gifUrl = data.data.images.downsized_large.url;
    //     setGif(gifUrl);
    //     setLoading(false)   
    //   } catch (error) {
    //     console.error('Error fetching the GIF:', error);
    //   }
    // }
  
    // useEffect(() => {
    //   fetchData('car');
    // }, []);

    // return {gif, loading, fetchData};
}

export default useGIF
