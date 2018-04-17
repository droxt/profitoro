<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height clearfix">
      <div class="main-content row">
        <div class="section-left col-sm-12 col-md-6 col-lg-6 float-left">
          <workouts-component :wMode="workoutsMode" @selectedWorkout="modifySelected"></workouts-component>
        </div>
        <div class="section-right col-sm-12 col-md-6 col-lg-6 float-right">
          <new-workout-component v-if="workoutsMode === 'add' || workoutsMode == null"></new-workout-component>
          <modify-workout-component v-if="workoutsMode === 'modify'" :workout="selectedWorkout" @busy="isBusy" @toggleBack="toggleToAdd"></modify-workout-component>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
      <div class="busy" v-show="busy">
        <clip-loader/>
      </div>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import { NewWorkoutComponent, ModifyWorkoutComponent, WorkoutsComponent } from '~/components/workouts'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  export default {
    data () {
      return {
        workoutsMode: 'add',
        busy: false,
        selectedWorkout: {}
      }
    },
    methods: {
      modifySelected (workout) {
        this.selectedWorkout = workout
        this.workoutsMode = 'modify'
      },
      toggleToAdd () {
        this.workoutsMode = 'add'
        this.busy = false
      },
      isBusy (busy) {
        this.busy = busy
      }
    },
    middleware: 'authenticated',
    components: {
      HeaderComponent,
      FooterComponent,
      NewWorkoutComponent,
      ModifyWorkoutComponent,
      WorkoutsComponent,
      ClipLoader
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/vendors/bootstrap/functions";
  @import "../assets/styles/vendors/bootstrap/variables";
  @import "../assets/styles/vendors/bootstrap/mixins/breakpoints";
  .busy {
    display: table;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
      * {
        display: table-cell;
        vertical-align: middle;
      }
  }
  .section-left {
    @include media-breakpoint-up(lg) {
      padding-right: 30px;
    }
    @include media-breakpoint-down(sm) {
      margin: 10px 0;
    }
  }
  .section-right {
    @include media-breakpoint-up(lg) {
      padding-left: 30px;
    }
    @include media-breakpoint-down(sm) {
      margin: 10px 0;
    }
  }
</style>
