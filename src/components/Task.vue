<template>
    <div @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder': '', 'task']">
        <h3>
            {{ task.text }}
            <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    methods: {
        
    }
}
</script>

<style scope>
.fas {
  color: rgb(255, 174, 0);
}

.task {
  background: #ececec;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


</style>