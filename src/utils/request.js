import qs from 'qs'
import axios from 'axios'

export function loginByCode(url,data) {
  return axios.post(url, qs.stringify(data))
    .then(Res => Res.data)
    
}



    
    

  

