import axios from 'axios'

export default {
  namespaced: true,

  actions: {
    async getAllComments ({ commit }, data = {}) {
      const url = 'http://127.0.0.1:8000/api/comments'

      let resp = null
      resp = await axios({
        url,
        data,
        method: 'POST'
      })
      this.state.comments = resp.data
      console.log(this.state.comments)
    },
    async addComment ({ commit }, data = {}) {
      let url = 'http://127.0.0.1:8000/api/addComment'

      await axios({
        url,
        data,
        method: 'POST'
      })

      url = 'http://127.0.0.1:8000/api/comments'

      let resp = null
      resp = await axios({
        url,
        data,
        method: 'POST'
      })
      this.state.comments = resp.data
      console.log(this.state.comments)
    },
    async editComment ({ commit }, data = {}) {
      let url = 'http://127.0.0.1:8000/api/editComment'

      await axios({
        url,
        data,
        method: 'POST'
      })

      url = 'http://127.0.0.1:8000/api/comments'

      let resp = null
      resp = await axios({
        url,
        data,
        method: 'POST'
      })
      this.state.comments = resp.data
      console.log(this.state.comments)
    },
    async deleteComment ({ commit }, data = {}) {
      let url = 'http://127.0.0.1:8000/api/deleteComment'

      await axios({
        url,
        data,
        method: 'POST'
      })

      url = 'http://127.0.0.1:8000/api/comments'

      let resp = null
      resp = await axios({
        url,
        data,
        method: 'POST'
      })
      this.state.comments = resp.data
      console.log(this.state.comments)
    }
  }
}
