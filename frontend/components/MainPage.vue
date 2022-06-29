<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MainPage',
  data () {
    return {
      comment: null,
      currentIndexPicture: null,
      currentIndexComment: null,
      editCom: false,
      show: false
    }
  },
  computed: {
    ...mapState([
      'pictures',
      'comments'
    ])
  },
  mounted () {
    this.getPicturesAction()
  },
  methods: {
    ...mapActions('apiPictures', {
      getPicturesAction: 'getAllPictures'
    }),
    ...mapActions('apiComments', {
      getCommentsAction: 'getAllComments',
      addCommentAction: 'addComment',
      editCommentAction: 'editComment',
      deleteCommentAction: 'deleteComment'
    }),
    async addNewComment (id) {
      if (this.comment != null) {
        try {
          await this.addCommentAction({
            comment: this.comment,
            image_id: id
          })
        } finally {
          this.comment = null
        }
      } else {
        try {
          await this.getCommentsAction({
            image_id: id
          })
        } finally {
          this.show = true
          this.currentIndexPicture = id
        }
      }
    },
    editComment (picId, id) {
      this.editCom = true
      this.currentIndexPicture = picId
      this.currentIndexComment = id
    },
    async editCommentRequest (com) {
      try {
        await this.editCommentAction({
          comment_id: this.currentIndexComment,
          comment: this.comment == null ? com : this.comment,
          image_id: this.currentIndexPicture
        })
      } finally {
        this.comment = null
        this.currentIndexComment = null
        this.editCom = false
      }
    },
    async deleteComment (id) {
      try {
        await this.deleteCommentAction({
          comment_id: id,
          image_id: this.currentIndexPicture
        })
      } finally {
        this.comment = null
        this.currentIndexComment = null
        this.editCom = false
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="block">
      <b-card v-for="picture in pictures" :key="picture.image_id" style="width: 1200px;">
        <b-row>
          <b-col md="6">
            <b-card-img :src="picture.image_path" alt="Image" class="rounded-0" />
          </b-col>
          <b-col md="6">
            <b-card-body :title="'Picture ' + picture.image_id">
              <b-card-text>
                {{ picture.author_fullname }}
              </b-card-text>
              <div v-if="show == true && picture.image_id == currentIndexPicture" class="block">
                <b-card
                  class="scroll"
                  border-variant="dark"
                  header="Comments"
                  style="width: 500px;"
                >
                  <div
                    v-for="com in comments"
                    :key="com.comment_id"
                  >
                    <div v-if="currentIndexComment != com.comment_id" class="block">
                      <b-card-text>
                        {{ com.comment }}
                      </b-card-text>
                    </div>
                    <input v-if="currentIndexComment == com.comment_id && editCom == true" v-model="com.comment" :placeholder="com.comment">
                    <div class="block">
                      <b-icon
                        v-if="editCom == false"
                        icon="pencil-square"
                        @click="
                          editComment(picture.image_id, com.comment_id)
                        "
                      />
                      <div class="block">
                        <b-icon
                          v-if="currentIndexComment == com.comment_id && editCom == true"
                          icon="check-lg"
                          @click="
                            editCommentRequest(com.comment)
                          "
                        />
                      </div>
                      <div class="block">
                        <b-icon
                          v-if="currentIndexComment == com.comment_id && editCom == true"
                          icon="x-lg"
                          @click="
                            deleteComment(com.comment_id)
                          "
                        />
                      </div>
                    </div>
                  </div>
                </b-card>
              </div>
              <textarea v-if="picture.image_id == currentIndexPicture" v-model="comment" placeholder="Type something text..." style="margin-right: 20px; margin-top: 20px; width: 500px;" />
              <br>
              <b-button style="margin-top: 20px;" variant="info" @click="addNewComment(picture.image_id)">
                {{ show == true && picture.image_id == currentIndexPicture ? 'Add comment' : 'Show all comments' }}
              </b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<style>
.block {
  display: inline-block;
}
.scroll {
    max-height: 200px;
    overflow-y: auto;
}
</style>
