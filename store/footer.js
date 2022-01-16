export const state = () => ({
  footer: [],
  loaded: '0',
})

export const mutations = {
  setFooter (state, entries) {
    state.footer = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}