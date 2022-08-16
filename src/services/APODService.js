import { APOD } from "../models/APOD.js"
import { AppState } from "../AppState.js"
import { APODApi } from "./AxiosService.js"

class APODService{

  async getAPOD() {
    const res = await APODApi.get('', {
      params: {
        date: AppState.date
      }
    })
    console.log(res);
    AppState.APOD = new APOD(res.data)
  }
}
export const apodService = new APODService()