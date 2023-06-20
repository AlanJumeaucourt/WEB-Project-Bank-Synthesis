import axios from "axios"

const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
  }
)

//automatically add the token to our requests
const init = (keycloak) => {
    instanceAxios.interceptors.request.use(
        (config) => {
            const token = keycloak.token
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        }
    )
}

const getHello = () => {
    instanceAxios.get("/").then((r) => { console.log(r) }).catch((e) => { console.log(e) })
}

const getSoldePeriode = (accountId) => {
  return instanceAxios.get(`/comptes/${accountId}/soldeperiode`)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

const getListeComptes = () => {
  return instanceAxios.get("/comptes")
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

const importsCsv = (payload) => {
  return instanceAxios.post("/imports", payload)
    .then((r) => { return r.data })
    .catch((e) => { console.log(e); return null })
}

export const Axios = {
    init,
    getHello,
    getSoldePeriode,
    getListeComptes,
    importsCsv
}