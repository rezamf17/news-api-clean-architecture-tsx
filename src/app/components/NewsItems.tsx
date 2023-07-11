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
    console.log(headers)
  return (
    <div>
      {/* <h2>{number}.{news.title}</h2>
      <p>{news.content}</p> */}
      <table>
        <thead>
          <tr>
          {headers.map((header) => (
            <th key={header.key}>{header.label}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {news.map((items, index) => (
            <tr key={index++}>
              <td>{index+1}</td>
              <td>{items.title}</td>
              <td>{items.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default NewsItem;