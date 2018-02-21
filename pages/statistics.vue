<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height">
      <div class="main-content row">
        <div class="col-sm-12">
          <h2 class="title">Statistics</h2>
          <p>Total Pomodoros: {{totalPomodoros}}</p>
          <p>Workouts Done:</p>
          <ul>
            <li v-for="(workout, index) in workouts" :key="workout.key">              
              <div class="progressbar">
                <div class="progress" :style="{width: workout.count * 50 / maxWorkoutCount + '%', backgroundColor: colors[index % colors.length]}">                  
                </div>
                <span class="workout">{{ workout.name }}</span>
                <span v-if="showCount" class="workout count">{{ workout.count }}</span>
              </div>
            </li>
          </ul>
        </div>        
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import {mapGetters} from 'vuex'
  import { setTimeout } from 'timers'
  export default {
    data () {
      return {
        colors: ['red', 'blue', 'green', 'brown'],
        initRender: true,
        showCount: false,
        timeoutId: null
      }
    },
    middleware: 'authenticated',
    computed: {
      ...mapGetters({
        totalPomodoros: 'getTotalPomodoros',
        getWorkoutsDone: 'getWorkoutsDone'
      }),
      maxWorkoutCount () {
        return this.getWorkoutsDone && this.getWorkoutsDone.reduce((max, {count}) => Math.max(max, count), 0)
      },
      workouts () {
        return this.getWorkoutsDone.map(({name, count, key}) => ({name, count: this.initRender ? 0 : count, key}))
      }
    },
    mounted () {
      setTimeout(() => {
        this.showCount = true
      }, 3000)
    },
    updated () {
      this.initRender = false
    },
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style scoped lang="scss">

  .progressbar {
    width: 100%;
    height: 50px;
    border-radius: 4px;
    background-color: lightgrey;
    padding: 10px;
  }
  .progressbar .progress {
    border-radius: 4px;
    transition: width 2000ms ease-in-out 1000ms;
    height: 100%;
  }
  .progressbar .workout {
    color: white;
    font-size: 18px;
    font-weight: 1000;
    position: relative;
    top: -30px;
    left: 10px;
  }
  .progressbar .count {
    float: right;
    padding-right: 10px;
  }
</style>
