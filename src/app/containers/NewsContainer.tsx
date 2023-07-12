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
  const [sortBy, setSortBy] = useState('relevancy');
  const [date, setDate] = useState('2023-07-12');
  const [q, setQ] = useState('biden');
  // const [resetData, setResetData] = useState<SearchNewsEntity>();
  const handleResetData = (data: SearchNewsEntity) => {
    // setResetData(data);
    console.log('reset',data)
  };
  const handleSearchData = (data: SearchNewsEntity) => {
    setSortBy(data.sortBy)
    setDate(data.date)
    setQ(data.search)
    console.log(data)
    // fetchNews()
  }
  const fetchNews = async () => {
    const newsService = new NewsService();
    const fetchedNews = await newsService.getAllNews(q, date , sortBy);
    setNews(fetchedNews);
    setIsLoading(false)
  };
  useEffect(() => {
    fetchNews();
  }, [sortBy, date, q]);

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
        <NewsSearchBar reset={handleResetData} search={handleSearchData} />
        <NewsItem news={news} headers={tableHeaders} />
      </div>
    </div>
  );
};

export default NewsContainer;