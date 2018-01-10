<template>
  <div class="container">
    <h2 class="title text-center mb-5">Set your pomodoro timer</h2>
    <div class="mt-5 row justify-content-center align-items-center">
      <div class="set-timer-container col-sm-8 col-md-5">
        <clip-loader v-show="loading.setWorkingPomodoro"></clip-loader>
        <set-timer class="set-timer set-timer-1" v-show="!loading.setWorkingPomodoro" :value="config.workingPomodoro" @valueChanged="setWorkingPomodoro"></set-timer>
        <div class="figure-caption">Pomodoro</div>
      </div>
      <div class="set-timer-container col-sm-8 col-md-4">
        <clip-loader v-show="loading.setLongBreak"></clip-loader>
        <set-timer class="set-timer set-timer-2" v-show="!loading.setLongBreak" :value="config.longBreak" @valueChanged="setLongBreak"></set-timer>
        <div class="figure-caption">Long break</div>
      </div>
      <div class="set-timer-container col-sm-8 col-md-3">
        <clip-loader v-show="loading.setShortBreak"></clip-loader>
        <set-timer class="set-timer set-timer-3" v-show="!loading.setShortBreak" :value="config.shortBreak" @valueChanged="setShortBreak"></set-timer>
        <div class="figure-caption">Short break</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapState} from 'vuex'
  import SvgCircleSector from '~/components/timer/SvgCircleSector'
  import SetTimer from '~/components/settings/SetTimer'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  export default {
    computed: {
      ...mapGetters({
        config: 'getConfig'
      }),
      ...mapState(['loading'])
    },
    components: {
      SvgCircleSector,
      SetTimer,
      ClipLoader
    },
    methods: {
      ...mapActions(['setWorkingPomodoro', 'setShortBreak', 'setLongBreak'])
    }
  }
</script>
<style lang="scss">
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";

  .container {
    @include media-breakpoint-down(sm) {
      margin-top: 50px;
    }
  }
  .set-timer-container {
    @include media-breakpoint-down(sm) {
      margin-bottom: 20px;
    }
  }
  .figure-caption {
    text-align: center;
  }
</style>
