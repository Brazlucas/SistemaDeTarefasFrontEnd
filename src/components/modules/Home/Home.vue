<template>
  <v-content class="main">
    <h1>Sistema de tarefas v BETA 0.1</h1>
    <v-row class="main__wrapper">
      <v-col
        @click="goToUsers()"
        class="main__wrapper__children"
      >
        <h1>Usuários</h1>
      </v-col>
      <v-col
        class="main__wrapper__children"
        @click="goToTasks()"
      >
        <h1>Tarefas</h1>
      </v-col>
    </v-row>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue{
  goToUsers() {
    const usuarios = this.$router.push('/users')
    return usuarios;
  }
  goToTasks() {
    const tarefas = this.$router.push('/tasks')
    return tarefas;
  }
}
</script>

<style lang="sass" scoped>
.main
  text-align: center
  margin: 0 auto
  max-width: 45%
  display: flex
  justify-content: center
  margin-top: 50px
  &__wrapper
    margin-top: 200px
    padding: 50px
    gap: 30px
    &__children
      outline: 2px solid black
      padding: 50px
      text-align: center
    &__children:hover
      background: #8F1923
      cursor: pointer
</style>
