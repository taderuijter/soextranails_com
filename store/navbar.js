export const state = () => ({
  navbar: [],
  loaded: '0',
})

export const mutations = {
  setNavbar (state, entries) {
    state.navbar = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}