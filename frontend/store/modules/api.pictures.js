import axios from 'axios'

export default {
  namespaced: true,

  actions: {
    async getAllPictures ({ commit }, data) {
      const url = 'http://127.0.0.1:8000/api/pictures'

      let resp = null
      resp = await axios({
        url
      })
      this.state.pictures = resp.data
      console.log(this.state.pictures)
    }
  }
}
