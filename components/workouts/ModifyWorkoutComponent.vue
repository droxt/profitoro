<template>
  <div>
    <h2 class="title">Modify your workout</h2>
      <form>
        <input v-model="name" type="text" class="input" placeholder="Name it">
        <textarea v-model="description" type="text" class="input" placeholder="Describe it"></textarea>
        <div class="image-upload">
          <div class="uploaded-images">
            <img :src="this.pictures[0]" style="width: 35%; border-radius: 2.5px">
          </div>
          <label class="title" for="imageFile">Replace the image</label>
          <input @change="filesChange($event.target.files)" type="file" multiple class="form-control-file" ref="imageFile">
        </div>
        <div class="row">
          <div class="col">
            <button v-show="!isUpdating" type="button" class="button button-primary" @click="toggleBack">Cancel</button>
          </div>
          <div class="col">
            <button v-show="!isUpdating"
              :disabled="name && description ? false : true"
              :style="{background: name && description ? '#f15d59' : 'lightgrey'}"
              type="button"
              class="button button-primary"
              data-toggle="modal"
              data-target="#confirmChanges">
              Apply
            </button>
          </div>
        </div>
      </form>
    <div class="modal fade" id="confirmChanges" tabindex="-1" role="dialog" aria-labelledby="confirmChangesLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmChangesLabel">Confirm changes?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="update">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'

  export default {
    props: ['workout'],
    data () {
      return {
        name: this.workout.name,
        description: this.workout.description,
        pictures: this.workout.pictures,
        newPictures: [],
        isUpdating: false
      }
    },
    watch: {
      isUpdating: function (val) {

      },
      workout: function (val) {
        this.name = val.name
        this.description = val.description
        this.pictures = val.pictures
      }
    },
    methods: {
      ...mapActions(['updateWorkout', 'uploadImages']),
      filesChange (files) {
        this.newPictures = [...files]
      },
      update (ev) {
        this.isUpdating = true
        this.$emit('busy', true)
        let workoutToUpdate = this.workout
        workoutToUpdate.name = this.name
        workoutToUpdate.description = this.description
        if (this.newPictures.length > 0) {
          this.uploadImages(this.newPictures).then(picUrls => {
            workoutToUpdate.pictures = picUrls
            this.updateWorkout(workoutToUpdate).then(() => {}).then(() => {
              this.isUpdating = false
              this.$emit('busy', false)
              this.toggleBack()
            })
          })
        } else {
          this.updateWorkout(workoutToUpdate).then(() => {
            this.isUpdating = false
            this.$emit('busy', false)
            this.toggleBack()
          })
        }
      },
      toggleBack () {
        this.name = ''
        this.description = ''
        this.pictures = []
        this.newPictures = []
        this.$emit('toggleBack')
      }
    }
  }
</script>
<style scoped lang="scss">
  .image-upload {
    margin: 40px 0;
  }
</style>
