import Ajv, {Options} from 'ajv'
import addFormats from 'ajv-formats'

export class AjvSingleton {
  private static instance: Ajv | null = null

  private constructor() {}

  public static getInstance(options?: Options) {
    if (!this.instance) {
      this.instance = new Ajv(options)
      addFormats(this.instance)
    }
    return this.instance
  }
}
