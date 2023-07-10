import NewsAPI from '../../infrastructure/api/NewsAPI';
import NewsEntity from '../entities/NewsEntity';

class NewsService {
  private newsAPI: NewsAPI;

  constructor() {
    this.newsAPI = new NewsAPI();
  }

  async getAllNews(): Promise<NewsEntity[]> {
    const news = await this.newsAPI.getAllNews();
    return news.articles.map((article:any) => ({
      title: article.title,
      content: article.content,
    }));
  }
}

export default NewsService;