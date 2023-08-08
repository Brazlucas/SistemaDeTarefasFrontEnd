<template>
  <div class="content">
    <dialog-edit
        :task="this.task"
        :value="openDialog"
        :getItemStatus="itemStatus"
        :getIcon="icon"
        @emitTask="updateTask"
        @input="closeModal"
    />
    <div class="content__wrap-title">
      <h1 class="content__title">Lista de Tarefas</h1>
      <v-icon large>mdi-account</v-icon>
    </div>
    <v-row class="content__wrapper">
      <div class="content__wrapper__actions">
        <v-btn outlined @click="newTask()">
          <v-icon>mdi-plus</v-icon>
          Nova Tarefa
        </v-btn>
        <v-btn outlined @click="goToHome()">
          <v-icon>mdi-arrow-left</v-icon>
          Voltar para o menu
        </v-btn>
      </div>
      <v-col>
        <v-data-table
          :items="tasks"
          :headers="headers"
          hide-default-footer
        >
          <template v-slot:item.userId="{ item }">
            <v-chip
              :color="getColor(item.userId)"
            >
              {{ item.userId !== null ? "Sim" : "Não"}}
            </v-chip>
          </template>
          <template v-slot:item.status="{ item }">
            <v-chip
              :color="getColorStatus(item.status)"
            >
              {{ getItemStatus(item.status) }}
              <v-icon small class="ml-1">{{ getIcon(item.status) }}</v-icon>
            </v-chip>
          </template>
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
                    @click="editTask(item)"
                >
                  <v-icon
                      size="large"
                  >
                    mdi-pencil-outline
                  </v-icon>
                </v-btn>
              </template>
              Editar tarefa
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    rounded
                    icon
                    color="#ff0000"
                    @click="deleteTask(item)"
                >
                  <v-icon
                      color="#ff0000"
                      size="large"
                  >
                    mdi-trash-can-outline
                  </v-icon>
                </v-btn>
              </template>
              Excluir tarefa
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TaskService from "@/components/modules/Tasks/services/task-service";
import Task from "@/components/modules/Tasks/models/task.entity";
import DialogEdit from './modals/dialog-edit.component.vue';

@Component({
  components: {
    DialogEdit,
  },
})
export default class Tasks extends Vue {
  public tasks: Array<Task> = [];

  public task: Task = new Task();

  public openDialog: boolean = false;

  public itemStatus: string = '';

  public icon: string = '';

  private get headers(): any {
    const headers = [
      {
        text: 'ID',
        value: 'id',
      },
      {
        text: 'Nome',
        align: 'start',
        value: 'name',
      },
      {
        text: 'Descrição',
        value: 'description',
      },
      {
        text: 'Possuí usuário vínculado?',
        value: 'userId',
      },
      {
        text: 'Status',
        value: 'status',
      },
      {
        text: 'Ações',
        value: 'actions',
        sortable: false,
      }
    ];

    return headers;
  }

  public async getAllTasks() {
    TaskService.getAll()
      .then((data: any[]) => {
        this.tasks = data
            .map((user: Task) => new Task(user));
      })
      .catch((err: any) => { console.log(err) });
  }

  private getItemStatus(status: number) {
    if (status === 1) {
      return this.itemStatus = 'A fazer';
    }
    if (status === 2) {
      return this.itemStatus = 'Em andamento';
    } else {
      return this.itemStatus = 'Concluído';
    }
  }

  public newTask() {
    console.log("aqui ficará a lógica para abrir um modal e criar tarefa");
  }

  public getColor(item: any): string {
    if (item !== null) return 'green'
    return 'gray'
  };

  public getIcon(item: any): string {
    if (item === 1) {
      return this.icon = 'mdi-pencil'
    }
    if (item === 2) {
      return this.icon = 'mdi-loading';
    }
    if (item === 3) {
      return this.icon = 'mdi-checkbox-marked-circle-outline';
    }
    return '';
  }

  public getColorStatus (item: number): string {
    if (item === 1) return 'brown';
    if (item === 2) return 'blue';
    if (item === 3) return 'green';
    return '';
  };

  public closeModal() {
    this.openDialog = !this.openDialog;
  }

  public editTask(item: Task) {
    this.openDialog = true;
    this.getTask(item);
    this.getIcon(item.status);
    this.getItemStatus(item.status);
  }

  public getTask(item: Task) {
    TaskService.getById(item.id.toString())
      .then((data: any[]) => {
        this.task = new Task(data);
        console.log(this.task);
      })
  }

  public updateTask() {
    TaskService.update(this.task)
      .then(() => {
        this.getAllTasks();
        this.openDialog = false;
      })
      .catch((err) => { console.log(err); });
  }

  public deleteTask(item: Task) {
    TaskService.delete(item.id.toString())
      .then((item) => {
        console.log(item);
        this.getAllTasks();
      })
      .catch((err) => { console.log(err); });
  }

  public goToHome() {
    return this.$router.push('/');
  }

  created() {
    this.getAllTasks();
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
    &__actions
      display: flex
      gap: 30px
      margin-bottom: 30px
  &__title
    display: flex
    justify-content: center
    padding: 80px 15px 80px 0px
    align-items: center
</style>
