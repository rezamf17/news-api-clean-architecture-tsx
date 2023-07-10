import axios from 'axios';

class NewsAPI {
  private baseURL: string;

  constructor() {
    this.baseURL = 'https://newsapi.org/v2/everything?q=tesla&from=2023-06-10&sortBy=publishedAt&apiKey=4181684dadf2472491b737474702c653'; // Ubah URL API sesuai kebutuhan
  }

  async getAllNews() {
    try {
      const response = await axios.get(`${this.baseURL}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }
}

export default NewsAPI;