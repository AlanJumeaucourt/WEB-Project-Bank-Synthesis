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

const importsCsv = (payload) => {
    instanceAxios.post("/imports", payload).then((r) => { console.log(r) }).catch((e) => { console.log(e) })
}

export const Axios = {
    init,
    getHello,
    importsCsv
}