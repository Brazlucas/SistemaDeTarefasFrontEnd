<template>
  <div class="content">
    <div class="content__wrap-title">
      <h1 class="content__title">Lista de Usuários</h1>
      <v-icon large>mdi-account</v-icon>
    </div>
    <v-row class="content__wrapper">
      <v-col>
        <v-btn outlined @click="newUser()">
          <v-icon>mdi-plus</v-icon>
          Novo usuário
        </v-btn>
      </v-col>
      <v-col>
        <v-data-table
          :items="users"
          :headers="headers"
        >
           <template
              v-slot:item.actions="{ item }"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    rounded
                    icon
                    @click="goToEditUser(item)"
                  >
                    <v-icon
                      size="large"
                    >
                      mdi-pencil-outline
                    </v-icon>
                  </v-btn>
                </template>
                Editar usuário
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    rounded
                    icon
                    color="#ff0000"
                    @click="deleteUser(item)"
                  >
                    <v-icon
                      color="#ff0000"
                      size="large"
                    >
                      mdi-trash-can-outline
                    </v-icon>
                  </v-btn>
                </template>
                Excluir usuário
              </v-tooltip>
           </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserService from './services/user.service'
import { User } from './models/user.entity'

@Component
export default class Users extends Vue {
  public users: Array<User> = [];

  private get headers(): any {
    const headers = [
      {
        text: 'Nome',
        align: 'start',
        value: 'name',
      },
      {
        text: 'ID',
        value: 'id',
      },
      {
        text: 'Email',
        value: 'email',
      },
      {
        text: 'Ações',
        value: 'actions',
        sortable: false,
      },
    ];

    return headers;
  }

  public async getAllUsers() {
    UserService.getAll()
      .then((data: any[]) => {
        this.users = data
          .map((user: User) => new User(user));
      })
      .catch((err: any) => { console.log(err) });
  }

  public newUser() {
    console.log("aqui ficará a lógica para abrir um modal e criar usuário");
  }

  public deleteUser(item: User) {
    UserService.delete(item.id.toString())
      .then((item) => {
        console.log(item);
        this.getAllUsers();
      })
      .catch((err) => { console.log(err); });
  }

  created() {
    this.getAllUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.content
  margin: 0 auto
  width: 85%
  &__wrap-title
    display: flex
    justify-content: center
  &__wrapper
    flex-direction: column
  &__title
    display: flex
    justify-content: center
    padding: 80px 15px 80px 0px
    align-items: center
</style>
