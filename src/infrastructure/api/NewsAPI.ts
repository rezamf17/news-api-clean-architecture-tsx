import axios from 'axios';

class NewsAPI {
  private baseURL: string;

  constructor() {
    // this.baseURL = 'https://newsapi.org/v2/everything?q=tesla&from=2023-06-11&sortBy=publishedAt&apiKey=4181684dadf2472491b737474702c653'; // Ubah URL API sesuai kebutuhan
    this.baseURL = 'https://newsapi.org/v2/everything'; // Ubah URL API sesuai kebutuhan
  }
  private apiKey: string = '4181684dadf2472491b737474702c653'
  async getAllNews(q:string, from:string, sortBy:string) {
    try {
      const response = await axios.get(`${this.baseURL}?q=${q}&from=${from}&sortBy=${sortBy}&apiKey=${this.apiKey}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }
}

export default NewsAPI;