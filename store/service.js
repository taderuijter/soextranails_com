export const state = () => ({
  service: [],
  loaded: '0',
})

export const mutations = {
  setService (state, entries) {
    state.service = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}