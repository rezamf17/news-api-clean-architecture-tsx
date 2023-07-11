import React, { useEffect, useState } from 'react';
import NewsService from '../../domains/useCases/NewsService';
import NewsItem from '../components/NewsItems';
import NewsEntity from '../../domains/entities/NewsEntity';
import HeaderNewsEntity from '../../domains/entities/HeaderNewsEntity';

const NewsContainer: React.FC = () => {
  const [news, setNews] = useState<NewsEntity[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsService = new NewsService();
      const fetchedNews = await newsService.getAllNews();
      setNews(fetchedNews);
    };

    fetchNews();
  }, []);
  const tableHeaders: HeaderNewsEntity[] = [
    { key: 'no', label: 'No' },
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
  ];
  return (
    <div>
      <h1>Berita</h1>
      {/* {news.map((item, index) => (
        <NewsItem key={index++} news={item} number={index + 1} headers={headers} />
      ))} */}
      <NewsItem news={news} headers={tableHeaders} />
    </div>
  );
};

export default NewsContainer;