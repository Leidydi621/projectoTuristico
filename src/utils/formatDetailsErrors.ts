import { ZodIssue } from "zod";


export default function formatDetailsErrors(errors: ZodIssue[]) {
  const objErros: any = {};
  return errors.reduce((obj, error) => {
    const stash = error.path[0]
    obj[stash] = { ...obj[stash], [error.code]: error.message }
    return obj
  }, objErros)
}