import type { NextFunction, Request, Response } from "express"
import type { defaultResponse } from "../../cases/types"
export type settingsLevel = "free" | "controlled" | "full"
export type attributesSettings = {
  action?: string
  featureCode?: string
  groupCode?: string[]
  level: settingsLevel
}
export type attributes = {
  handle: (
    req: Request,
    res: Response<defaultResponse>,
    next: NextFunction
  ) => Promise<void>
  settings: attributesSettings
}
