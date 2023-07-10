import React, { useEffect, useState } from 'react';
import NewsService from '../../domains/useCases/NewsService';
import NewsItem from '../components/NewsItems';
import NewsEntity from '../../domains/entities/NewsEntity';

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

  return (
    <div>
      <h1>Berita</h1>
      {news.map((item, index) => (
        <NewsItem key={index++} news={item} number={index + 1} />
      ))}
    </div>
  );
};

export default NewsContainer;