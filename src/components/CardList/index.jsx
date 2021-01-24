import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getImages } from '../../api';
import { Card } from '../Card';

import './CardList.css';

const initialData = () => new Array(10).fill({});
const DELAY = 1000;

export const CardList = () => {
  const [data, setData] = useState(initialData());
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      getImages().then(res => {
        setData(res);
      });
    }, DELAY);
    return () => {
      setData([]);
    }
  }, [])

  const fetchImages = () => {
    setTimeout(() => {
      getImages(count+1).then(res => {
        setCount(count+1);
        setData([...data, ...res])
      });
    }, DELAY);
  };

  return (
    <InfiniteScroll
      initialScrollY={0}
      scrollThreshold={1}
      className="card-list"
      dataLength={data.length}
      next={fetchImages}
      hasMore={true}
      loader={initialData().map((card, index) => (<Card key={card.id?? index} data={card} />))}
    >
      {data.map((card, index) => (<Card key={card.id? `${index}-${card.id}` : index} data={card} />))}
    </InfiniteScroll>
  )
}
