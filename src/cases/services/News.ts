import NewsRepository from "../repositories/News"
import { getNewsByIdServiceProps } from "../schemas/getNewsById"
import { newsHomeServiceProps } from "../schemas/newsHome"
import { defaultResponse } from "../types"

export default class NewsService {
  constructor(private newsRepository: NewsRepository) {}

  async newsHome(params: newsHomeServiceProps): Promise<defaultResponse> {
    try {
      let transporter = []
      const response = await this.newsRepository.getNews(params)

      for (let i = 0; i < response.length; i++) {
        transporter.push({
          id: response[i].idnoticia,
          tipo: "news",
          titulo: response[i].titulo,
          fonte: response[i].fonte,
          datacad: response[i].datacad
        })
      }
      return { success: true, data: transporter }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async getNewsById(params: getNewsByIdServiceProps): Promise<defaultResponse> {
    try {
      const response = await this.newsRepository.getNewsById(params)
      return { success: true, data: response }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
