<template>
    <header>
        <h1 style="text-align: center;">Task Tracker of {{ title }}</h1>
        <Button :text="showAddTask ? 
        'Close':'Add Task'" 
        @btn-click="$emit('toggle-add-task')" 
        :color="showAddTask ? 'gold' : 'green'"></Button>
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components: {
        Button
    }
}
</script>

<style scoped>
 header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
 }
</style>