<template>
  <div>
    <div :key="task.id" v-for="task in tasks" >
      <Task 
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)" 
        :task="task" 
      />
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder'] // why does it have to be here and not on Task?
}
</script>
