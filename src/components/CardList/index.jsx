import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getImages } from '../../api';
import { Card } from '../Card';

import './CardList.css';

const loaderData = () => new Array(10).fill({});
const EXTRA_DELAY = parseInt(process.env.REACT_APP_EXTRA_DELAY?? 1000);

export const CardList = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      getImages().then(res => {
        setData(res);
      });
    }, EXTRA_DELAY);
    return () => {
      setData([]);
      setCount(1);
    }
  }, [])

  const fetchImages = () => {
    setTimeout(() => {
      getImages(count+1).then(res => {
        setCount(count+1);
        setData([...data, ...res])
      });
    }, EXTRA_DELAY);
  };

  return (
    <InfiniteScroll
      initialScrollY={0}
      scrollThreshold={1}
      style={{overflow: 'hidden'}}
      className="card-list"
      dataLength={data.length}
      next={fetchImages}
      hasMore={true}
      loader={loaderData().map((card, index) => (<Card key={card.id?? index} data={card} />))}
    >
      {data.map((card, index) => (<Card key={card.id? `${index}-${card.id}` : index} data={card} />))}
    </InfiniteScroll>
  )
}
