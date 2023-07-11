import React from 'react';

interface NewsEntity {
  title: string;
  content: string;
}
interface Header {
  key: string;
  label: string;
}
interface NewsItemProps {
  news: NewsEntity[];
  headers : Header[];
}

const NewsItem: React.FC<NewsItemProps> = ({ news, headers }) => {
  return (
    <div>
      <table className='border-collapse border border-slate-400'>
        <thead>
          <tr>
          {headers.map((header) => (
            <th className='border border-slate-300' key={header.key}>{header.label}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {news.map((items, index) => (
            <tr key={index++}>
              <td className='border border-slate-300'>{index+1}</td>
              <td className='border border-slate-300'>{items.title}</td>
              <td className='border border-slate-300'>{items.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default NewsItem;