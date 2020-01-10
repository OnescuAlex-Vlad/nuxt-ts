import axios from 'axios';

const BASE_URL = 'http://192.168.100.18:3000';

export const USER_INFO_URL = BASE_URL + '/userinfo';
export const EVENTS_URL = BASE_URL + '/events';
export const FILES_URL = BASE_URL + '/files';
export const TAXES_URL = BASE_URL + '/taxes';

// export default class API {
//   url: string
//   constructor(endpoint: string) {
//     this.url = endpoint
//   }

//   getUserInfo() {
//   }
// }

export let genericAPICaller = (url: string): Promise<any> => {
  return axios.get(url)
}
