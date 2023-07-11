import React, { useEffect, useState } from 'react';
import NewsService from '../../domains/useCases/NewsService';
import NewsItem from '../components/NewsItems';
import NewsSearchBar from '../components/NewsSearchBar';
import NewsEntity from '../../domains/entities/NewsEntity';
import HeaderNewsEntity from '../../domains/entities/HeaderNewsEntity';
import SearchNewsEntity from '../../domains/entities/SearchNewsEntity';

const NewsContainer: React.FC = () => {
  const [news, setNews] = useState<NewsEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resetData, setResetData] = useState<SearchNewsEntity | null>(null);
  useEffect(() => {
    const fetchNews = async () => {
      const newsService = new NewsService();
      const fetchedNews = await newsService.getAllNews('biden', '2023-06-11' , 'publishedAt');
      setNews(fetchedNews);
      setIsLoading(false)
    };

    fetchNews();
  }, []);
  const handleResetData = (data: SearchNewsEntity) => {
    setResetData(data);
  };
  const tableHeaders: HeaderNewsEntity[] = [
    { key: 'no', label: 'No' },
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
  ];
  if (isLoading) {
    return <label>Loading...</label>;
  }
  return (
    <div>
      <h1>Berita</h1>
      <div className="container">
        <NewsSearchBar reset={handleResetData} />
        <NewsItem news={news} headers={tableHeaders} />
      </div>
    </div>
  );
};

export default NewsContainer;