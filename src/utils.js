import { useState, useEffect } from 'react';

function useConnection(url) {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch(url, {
      headers: {
        'X-Auth-Token': '00bfed46cf23480fba53fc0ebb56f3d7',
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default useConnection;
