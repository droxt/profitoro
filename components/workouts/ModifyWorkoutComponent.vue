<template>
  <div>
    <h2 class="title">Modify your workout</h2>
      <form>
        <input v-model="name" type="text" class="input" placeholder="Name it">
        <textarea v-model="description" type="text" class="input" placeholder="Describe it"></textarea>
        <div class="image-upload">
            <div class="images-container">
              <div class="img-container" v-for="(img, key) in pictures" :key="key">
                <img :src="img" class="img">
                <button class="delete" @click="deleteImageFromDB(key)">✗</button>
              </div>
          </div>
          <label class="title" for="imageFile">Add images</label>
        
        <div class="images-container">
          <div class="img-container" v-for="(newPic, key) in shownNewPictures" :key="key">
            <img :src="newPic" class="img">
            <button class="delete" @click="deleteNewImage(key)">✗</button>
          </div>
        </div>
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
        shownNewPictures: [],
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
        this.newPictures.push(...files)
        const self = this
        for (let i = 0; i < files.length; i++) {
          var reader = new FileReader()
          reader.onload = (event) => {
            self.shownNewPictures.push(event.target.result)
          }
          reader.readAsDataURL(files[i])
        }
      },
      update (ev) {
        this.isUpdating = true
        this.$emit('busy', true)
        let workoutToUpdate = this.workout
        workoutToUpdate.name = this.name
        workoutToUpdate.description = this.description
        if (this.newPictures.length > 0) {
          this.uploadImages(this.newPictures).then(picUrls => {
            workoutToUpdate.pictures = this.pictures + [...picUrls]
            this.updateWorkout(workoutToUpdate).then(() => {
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
        this.shownNewPictures = []
        this.$emit('toggleBack')
      }
    }
  }
</script>
<style scoped lang="scss">
  .image-upload {
    margin: 40px 0;
  }

  .images-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .img-container {
    position: relative;
    width: 25%;    
    margin: 5px;
  }

  .img {
    width: 100%;
    border-radius: 2.5px;
  }

  .delete {    
    position: absolute;
    top: 0;
    right: 0;
    margin: 2.5%;
    padding: 0px 5px;
    visibility: hidden;
    opacity: 0;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    color: grey;
    background-color: rgba(225, 225, 225, .9);
    transition: 250ms;
    transition-property: opacity, visibility;
  }

  .img-container:hover {
      .delete {
        visibility: visible;
        opacity: 1;
        cursor: pointer;
      }
  }
</style>
