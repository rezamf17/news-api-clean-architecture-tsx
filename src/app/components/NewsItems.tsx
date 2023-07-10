import React from 'react';

interface NewsItemProps {
  news: {
    title: string;
    content: string;
  };
number : number
  
}

const NewsItem: React.FC<NewsItemProps> = ({ news, number }) => {
  return (
    <div>
      <h2>{number}.{news.title}</h2>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsItem;