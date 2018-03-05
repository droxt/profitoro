<template>
  <div>
    <div v-show="isCreating" class="modal-wrapper">
      <div class="modal">
        <clip-loader/>
      </div>
    </div>
    <h2 class="title">Modify your workout</h2>
      <form>
        <input v-model="mode.workout.name" type="text" class="input" placeholder="Name it">
        <textarea v-model="mode.workout.description" type="text" class="input" placeholder="Describe it"></textarea>
        <div class="card-columns">
          <img class="card-img-top img-fluid" :src="mode.workout.pictures && mode.workout.pictures.length && mode.workout.pictures[0]" :alt="mode.workout.name">
        </div>
        <div class="image-upload">
          <label class="title" for="imageFile">Replace the image</label>
          <input @change="filesChange($event.target.files)" type="file" multiple class="form-control-file" ref="imageFile">
        </div>
        <div class="row">
          <div class="col">
            <button v-show="!isCreating" @click="onCancel" type="button" class="button button-primary">Cancel</button>
          </div>
          <div class="col">
            <button v-show="!isCreating" @click="onModify" :disabled="mode.workout.name === '' || mode.workout.description === ''" type="submit" class="button button-primary">Apply</button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

  export default {
    data () {
      return {
        isCreating: false,
        pictures: []
      }
    },
    components: {
      ClipLoader
    },
    computed: {
      ...mapState(['mode'])
    },
    methods: {
      ...mapActions(['modifyWorkout', 'uploadImages', 'setMode']),
      filesChange (files) {
        this.pictures = [...files]
      },
      reset () {
        this.setMode({state: 'add', workout: null})
      },
      onCancel (ev) {
        ev.preventDefault()
        ev.stopPropagation()
        this.reset()
      },
      onModify (ev) {
        this.isCreating = true
        ev.preventDefault()
        ev.stopPropagation()
        if (this.mode.workout.name.length > 0 && this.mode.workout.description.length > 0) {
          this.uploadImages(this.pictures).then(picUrls => {
            this.modifyWorkout({workout: this.mode.workout, picUrls}).then(() => {
              this.reset()
            })
          })
        } else {
          this.isCreating = false
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .image-upload {
    margin: 40px 0;
  }
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: 99999999;
    background-color:rgba(0,0,0,.2)
  }
  .modal-wrapper:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .modal {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;    
  }
  .button.button-primary:disabled {
    background-color: grey;
  }
</style>
