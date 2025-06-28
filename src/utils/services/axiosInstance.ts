import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://game-store-kappa-woad.vercel.app",
  headers: {
    "Content-Type": "application/json",
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.log("Unauthorized! شاید نیاز به ورود مجدد باشد.")
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
