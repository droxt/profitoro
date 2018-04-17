<template>
  <div>
    <h2 class="title">Manage your workouts</h2>
    <div class="form-group">
      <input :disabled="wMode == 'modify' ? true : false" v-model="searchTerm" class="input" type="search" placeholder="Search for workouts">
    </div>
    <div class="card-columns">
      <div v-for="workout in workoutsToDisplayPaginated" :key="workout['.key']" :class="selected == workout['.key'] ? ['card', 'maximizedCard'] :  selected == '' ? 'card' : ['card', 'minimizedCard']" @click="selectedWorkout(workout)">
        <img class="card-img-top img-fluid" :src="workout.pictures && workout.pictures.length && workout.pictures[0]" :alt="workout.name">
        <div class="card-block">
          <p class="card-text">{{ workout.name }}</p>
        </div>
          <button class="delete" v-show="wMode == 'add' ? true : false" @click="deleteTheWorkout(workout)"><span>&#735;</span></button>
      </div>
    </div>
    <workouts-pagination-component @loadMore="onLoadMore" :hasMore="hasMore"></workouts-pagination-component>
  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  import WorkoutsPaginationComponent from '~/components/workouts/WorkoutsPaginationComponent'

  export default {
    props: ['wMode'],
    data () {
      return {
        selected: '',
        searchTerm: '',
        pageSize: 3,
        actualWorkoutsSize: 3
      }
    },
    watch: {
      wMode: function (val) {
        val === 'add' ? this.selected = '' : false
      }
    },
    computed: {
      ...mapState(['workouts']),
      workoutsToDisplay () {
        return this.workouts.filter(workout => {
          let name = workout.name.toLowerCase()
          let description = workout.description.toLowerCase()
          let username = workout.username.toLowerCase()
          let term = this.searchTerm.toLowerCase()
          return name.indexOf(term) >= 0 || description.indexOf(term) >= 0 || username.indexOf(term) >= 0
        })
      },
      workoutsToDisplayPaginated () {
        return this.workoutsToDisplay.slice(0, this.actualWorkoutsSize)
      },
      hasMore () {
        return this.workoutsToDisplay.length > this.actualWorkoutsSize
      }
    },
    components: {
      WorkoutsPaginationComponent
    },
    methods: {
      ...mapActions(['deleteWorkout']),
      selectedWorkout (workout) {
        this.selected = workout['.key']
        this.$emit('selectedWorkout', workout)
      },
      deleteTheWorkout (workout) {
        event.stopPropagation()
        this.deleteWorkout(workout)
      },
      onLoadMore () {
        this.actualWorkoutsSize = this.actualWorkoutsSize + this.pageSize
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";
  .card-columns {
    .card {
      position: relative;
      transition: width 500ms;
      transition: padding 500ms;
      cursor: pointer;
      border: none;
    }
    .card:hover {
      .delete {
        visibility: visible;
        opacity: 1;
        cursor: pointer;
      }
    }
    .maximizedCard {
      width: 105%;
      padding: -10% 0% 0% -10%;
      font-size: 1.1em;
    }
    .minimizedCard {
      width: 95%;
      padding: 10% 0% 0% 10%;
      filter: opacity(0.5);
    }
    .delete {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      margin: 2.5%;
      width: 12%;
      height: 15%;
      padding: 0;
      border: none;
      border-radius: 5px;
      background-color: rgba(225, 225, 225, .9);
      transition: opacity 250ms, visibility 250ms;
      span {
        display: block;
        margin-top: -115%;
        font-size: 3.45em;
        color: grey;
      }
    }
    @include media-breakpoint-only(lg) {
      column-count: 3;
    }
    @include media-breakpoint-only(xl) {
      column-count: 4;
    }
    p.card-text {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
