<template>
  <div class="firstQuestionPage">
    <p>Лучшие астрологи и экстрасенсы Румынии</p>
    <div class="firstQuestionPage__accuracy">
      <p>Точность прогноза: 97%</p>
    </div>
    <div class="firstQuestionPage__blik"></div>
    <div class="firstQuestionPage__woman-icon">
        <div></div>
    </div>
    <div class="firstQuestionPage__question">
      <p>Вас беспокоит вопрос о том,</p>
      <p>когда Вы покинете этот Мир и при каких обстоятельствах?</p>
    </div>
    <div class="firstQuestionPage__buttons">
      <button v-on:click="handleFirstClick">
        Да
        <div></div>
      </button>
      <button v-on:click="handleFirstClick">
        Нет
        <div></div>
      </button>
    </div>
    <p>Онлайн предсказание</p>
    <div class="firstQuestionPage__date-message" ref="date" :class="{visible: isDateMessageVisible}">
      <div></div>
      <p>
        Позвольте нам раскрыть эту волнующую тайну и
        <br /><span>с точностью определить дату и время вашей смерти,</span>
        а также предшествующую этому событию причину
      </p>
    </div>
    <div class="firstQuestionPage__woman-image" :class="{visible: isWomanImageVisible}">
      <p>
        Многие не верят предсказаниям и мы решили доказать каждому,
        <br/><span>что прогноз может изменить жизнь любого человека!</span>
      </p>
    </div>
    <p class="firstQuestionPage__first-question">
      Боитесь ли вы умереть?
    </p>
    <div class="firstQuestionPage__buttons">
      <button v-on:click="handleFirstQuestionClick">
        Да
        <div></div>
      </button>
      <button v-on:click="handleFirstQuestionClick">
        Нет
        <div></div>
      </button>
    </div>
    <p class="firstQuestionPage__question-number">Вопрос 1-5</p>
    <footer class="firstQuestionPage__footer">
      <div></div>
      <p>Вы, конечно, умрете.<br/>И все, с кем вы знакомы, тоже однажды умрут.</p>
      <div></div>
      <div id="eye1"></div>
      <div id="eye2"></div>
      <div class="firstQuestionPage__terms">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
  name: 'FirstQuestionPage',
  data: () => ({
    isDateMessageVisible: false,
    isWomanImageVisible: false
  }),
  methods: {
    handleFirstClick() {
      window.scrollTo({ top: 2150, behavior: 'smooth' })
    },
    handleFirstQuestionClick() {
      this.$store.commit('setCurrentQuestion', 2)
    },
    handleScroll() {
      const dateMessageElement = this.$refs.date as HTMLDivElement
      if(dateMessageElement.getBoundingClientRect().top < 600) this.isDateMessageVisible = true
      if(dateMessageElement.getBoundingClientRect().top < 100) this.isWomanImageVisible = true
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
});
</script>

<!--<style scoped></style> Add "scoped" attribute to limit CSS to this component only -->
