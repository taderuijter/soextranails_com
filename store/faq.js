export const state = () => ({
  faq: [],
  loaded: '0',
})

export const mutations = {
  setFaq (state, entries) {
    state.faq = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}