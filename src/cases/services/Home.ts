import type BannerRepository from "../repositories/Banner"
import type HomeRepository from "../repositories/Home"
import type LinkRepository from "../repositories/Link"
import type { defaultResponse } from "../types"

export default class HomeService {
  constructor(
    private bannerRepository: BannerRepository,
    private linkRepository: LinkRepository,
    private homeRepository: HomeRepository
  ) {}

  async homeContent(): Promise<defaultResponse> {
    try {
      let links: any = await this.linkRepository.getLinks()
      let generic: Record<string, number[]> = {}

      for (let i = 0; i < links.length; i++) {
        if (!generic[links[i].tipo]) generic[links[i].tipo] = []
        generic[links[i].tipo].push(links[i].id)
      }

      const list = Object.entries(generic)

      let dataTransporter: {
        id: number
        titulo: string
        img: string
        nome?: string
        numero_processo?: string
        ano_processo?: string
        link?: string
        numero_programa?: number
      }[] = []

      for (let i = 0; i < list.length; i++) {
        switch (list[i][0]) {
          case "CO":
            dataTransporter = await this.homeRepository.getCO(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "CO" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Cursos"
                  if (!links[y].content) links[y].content = []
                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "NO":
            dataTransporter = await this.homeRepository.getNO(list[i][1])
            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "NO" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Notícias"
                  if (!links[y].content) links[y].content = []
                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "JR":
            dataTransporter = await this.homeRepository.getJR(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "JR" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Jurisprudência"
                  if (!links[y].content) links[y].content = []
                  else links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "LG":
            dataTransporter = await this.homeRepository.getLG(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "LG" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Legislação"
                  if (!links[y].content) links[y].content = []
                  else links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "OP":
            dataTransporter = await this.homeRepository.getOP(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "OP" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Opnião"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "PA":
            dataTransporter = await this.homeRepository.getPA(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "PA" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Pereceres CGJ SP"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "PR":
            dataTransporter = await this.homeRepository.getPR(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "PR" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Perguntas e Respostas"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "ME":
            dataTransporter = await this.homeRepository.getME(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "ME" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Mensagens dos Editores"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "CLPR":
            dataTransporter = await this.homeRepository.getCLPR(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "CLPR" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Clasificadores PR"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "CLRS":
            dataTransporter = await this.homeRepository.getCLRS(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "CLRS" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Clasificadores RS"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "CLSP":
            dataTransporter = await this.homeRepository.getCLSP(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "CLSP" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "Clasificadores SP"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
          case "TV":
            dataTransporter = await this.homeRepository.getTV(list[i][1])

            for (let y = 0; y < links.length; y++) {
              for (let k = 0; k < dataTransporter.length; k++) {
                if (
                  links[y].tipo === "TV" &&
                  links[y].id === dataTransporter[k].id
                ) {
                  links[y].label = "TV INR"
                  if (!links[y].content) links[y].content = []

                  links[y].content.push(dataTransporter[k])
                }
              }
            }
            break
        }
      }

      const banners = await this.bannerRepository.getBanners()

      // https://inrpublicacoes.com.br/site/banners/

      return {
        success: true,
        data: {
          banners,
          links
        }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
