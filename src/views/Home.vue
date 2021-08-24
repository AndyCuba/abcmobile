<template>
  <div>
    <FirstQuestionPage v-if="getQuestionNumber === 1"/>
    <SecondQuestionPage v-else-if="getQuestionNumber === 2"/>
    <ThirdQuestionPage v-else-if="getQuestionNumber === 3"/>
    <LoadingSpinner v-else-if="getQuestionNumber === 3.5"/>
    <FourthQuestionPage v-else-if="getQuestionNumber === 4"/>
    <FifthQuestionPage v-else-if="getQuestionNumber === 5"/>
    <RecordingLoader v-else-if="getQuestionNumber === 6"/>
    <AnswerPage v-else-if="getQuestionNumber === 7"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FirstQuestionPage from '@/components/FirstQuestionPage/FirstQuestionPage.vue';
import SecondQuestionPage from '@/components/SecondQuestionPage/SecondQuestionPage.vue';
import ThirdQuestionPage from '@/components/ThirdQuestionPage/ThirdQuestionPage.vue';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner.vue';
import FourthQuestionPage from '@/components/FourthQuestionPage/FourthQuestionPage.vue';
import FifthQuestionPage from '@/components/FifthQuestionPage/FifthQuestionPage.vue';
import RecordingLoader from '@/components/RecordingLoader/RecordingLoader.vue';
import AnswerPage from '@/components/AnswerPage/AnswerPage.vue';

export default defineComponent({
  name: 'Home',
  components: {
    FirstQuestionPage,
    SecondQuestionPage,
    ThirdQuestionPage,
    LoadingSpinner,
    FourthQuestionPage,
    FifthQuestionPage,
    RecordingLoader,
    AnswerPage
  },
  computed: {
    getQuestionNumber() {
      return this.$store.getters.getCurrentQuestionNumber
    }
  }
});
</script>
