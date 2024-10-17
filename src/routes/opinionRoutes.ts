import express from "express"
import OpinionService from "../cases/services/Opnion"
import OpinionController from "../cases/controllers/Opnion"
import wrapper from "../lib/wrapper"
const opinionRoute = express.Router()
const opinionService = new OpinionService()
const opinionController = new OpinionController(opinionService)

opinionRoute.get(
  "/",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await opinionController.opinionContent({
          limit: req.query.limit ? +req.query.limit : 12,
          page: req.query.page ? +req.query.page : 0
        })
      )
      next()
    },
    settings: {
      level: "free"
    }
  })
)

opinionRoute.get(
  "/:id",
  wrapper({
    handle: async (req, res, next) => {
      res.status(200).json(
        await opinionController.getOpinionById({
          id: +req.params.id,
          client: req.user.idcliente
        })
      )
      next()
    },
    settings: {
      level: "full"
    }
  })
)

export default opinionRoute
