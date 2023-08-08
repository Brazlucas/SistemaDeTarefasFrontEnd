<template>
  <div>
    <v-dialog
      :value="value"
      @input="closeModal"
    >
      <v-card class="observation">
        <v-row>
          <v-card-title class="observation__close">
            <h3>Editar tarefa</h3>
            <v-btn icon v-on:click="closeModal">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-col cols="5">
            <v-card-text
              class="observation__text"
              aria-required="true"
            >
              <span>Nome da tarefa</span>
              <br>
            </v-card-text>
            <v-text-field
              type="text"
              validate-on-blur
              outlined
              placeholder="Nome"
              v-model="task.name"
              id="subject"
            />
          </v-col>
          <v-col cols="5">
            <v-card-text
                class="observation__text"
                aria-required="true"
            >
              <span>Status atual</span>
              <br>
            </v-card-text>
            <v-text-field
              disabled
              type="text"
              validate-on-blur
              outlined
              placeholder="Nome"
              v-model="getItemStatus"
              :item-text="getItemStatus"
              :item-value="task.status"
              id="subject"
              :append-outer-icon="getIcon"
            />
          </v-col>
        </v-row>
          <v-row>
            <v-col>
              <v-card-text
                class="observation__text"
                aria-required="true"
              >
                <span>Descrição da tarefa</span>
                <br>
              </v-card-text>
              <v-textarea
                type="text"
                validate-on-blur
                placeholder="Descrição"
                outlined
                v-model="task.description"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-card-title class="observation__close">
              <h3>Usuário vínculado:</h3>
            </v-card-title>
            <v-col>
              <span><span style="color: green">NOME:</span> {{ task.user.name }}</span>
              <br>
              <span><span style="color: saddlebrown">ID:</span> {{ task.userId }}</span>
            </v-col>
          </v-row>
        <v-row>
        </v-row>
<!--        <v-row>-->
<!--          <v-col cols="10">-->
<!--            <v-card-text-->
<!--                class="observation__text"-->
<!--                aria-required="true"-->
<!--            >-->
<!--              <span>Email</span>-->
<!--              <br>-->
<!--            </v-card-text>-->
<!--            <v-text-field-->
<!--                type="text"-->
<!--                validate-on-blur-->
<!--                outlined-->
<!--                placeholder="ex.: jurídico"-->
<!--                id="subject"-->
<!--                v-model="user.email"-->
<!--            />-->
<!--          </v-col>-->
<!--        </v-row>-->
        <v-card-actions class="observation__actions">
          <v-btn
              class="observation__actions__btn black--text"
              color="#fff"
              @click="goToWrapper()"
          >
            Salvar
          </v-btn>
          <v-btn
              class="observation__actions__btn black--text"
              color="#8F1923"
              @click="closeModal()"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Task from "@/components/modules/Tasks/models/task.entity";

@Component
export default class DialogEdit extends Vue {
  @Prop({
    type: Boolean,
    default: () => false,
  })
  private readonly value!: boolean;

  @Prop()
  private getItemStatus!: string;

  @Prop()
  private getIcon!: string;

  @Prop({ default: Task})
  private task!: Task;

  public hide = false;

  public closeModal() {
    this.$emit('input', false);
  }

  private count = 0;

  public goToWrapper() {
    this.$emit('emitTask', this.task);
  }
}
</script>
<style lang="sass">
.observation
  max-width: 720px !important
  padding: 50px 50px !important
  &__contract-btn
    border: 1px solid #FFFFFF
    border-radius: 30px
    padding: 25px 0 !important
    width: 250px
  &__alerttext
    color: #f2f
    font-size: 15px !important
  &__text
    margin-top: 10px
    padding: 0px 2px !important
    text-align: left
    font-family: 'Poppins'
    font-weight: 500
    font-size: 24px
    line-height: 40px
    font-weight: 500
  & span
    font-size: 18px
    &__blue
      color: #149CFF
  &__close
    width: 100%
    display: flex
    justify-content: space-between
  &__actions
    display: flex
    justify-content: center
    margin-top: 50px !important
    color: #000000
    &__btn
      padding: 20px 20px !important
      font-size: 12px !important
.v-dialog--active
  max-width: 720px !important
</style>
