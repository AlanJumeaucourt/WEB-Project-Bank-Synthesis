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
      // Récupérez les données de la réponse
      const data = response.data;

      // Traitez les données si nécessaire
      // ...

      // Retournez les données
      return data;
    })
    .catch((error) => {
      console.log(error);
      return null; // Retournez null ou une valeur par défaut en cas d'erreur
    });
};


const getListeComptes = () => {
    return instanceAxios.get("/comptes")
      .then((response) => {
        // Récupérez les données de la réponse
        const data = response.data;
  
        // Traitez les données si nécessaire
        // ...
  
        // Retournez les données
        return data;
      })
      .catch((error) => {
        console.log(error);
        return null; // Retournez null ou une valeur par défaut en cas d'erreur
      });
  };
const importsCsv = (payload) => {
    instanceAxios.post("/imports", payload).then((r) => { console.log(r) }).catch((e) => { console.log(e) })
}

export const Axios = {
    init,
    getHello,
    getSoldePeriode,
    getListeComptes,
    importsCsv

}