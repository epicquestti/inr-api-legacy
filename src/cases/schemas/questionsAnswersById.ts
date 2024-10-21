import { z } from "zod"
export const questionsAnswersByIdValidation = z.object({
  id: z.number({
    message: "O parametro id é obrigatório e deve ser um número."
  }),
  client: z.number({
    message: "O parametro client é obrigatório e deve ser um número."
  })
})

export type questionsAnswersByIdControllerProps = z.input<
  typeof questionsAnswersByIdValidation
>
export type questionsAnswersByIdServiceProps = z.output<
  typeof questionsAnswersByIdValidation
>