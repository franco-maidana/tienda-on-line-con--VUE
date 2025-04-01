import { reactive, onMounted } from 'vue'

export function useFetch(apiUrl = '', onSuccess = () => {}) {
  const state = reactive({
    error: null,
    isLoading: false,
    data: [],
  })

  const fetchGame = async () => {
    try {
      state.isLoading = true
      const response = await fetch(apiUrl)
      const datosDeLaApi = await response.json()
      state.data = datosDeLaApi
      onSuccess(datosDeLaApi)
    } catch (error) {
      console.error(error)
      state.error = error
    } finally {
      state.isLoading = false
    }
  }

  onMounted(() => {
    fetchGame()
  })

  return { state }
}
