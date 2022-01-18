export const state = () => ({
  coupons: [],
  loaded: '0',
})

export const mutations = {
  setCoupons (state, entries) {
    state.coupons = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  }
}