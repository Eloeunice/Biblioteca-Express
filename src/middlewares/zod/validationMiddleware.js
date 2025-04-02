import { z } from 'zod'

export function validateData(schema) {
  return (req, _, next) => {
    schema.parse(req.body), next()
  }
}
