<template>
    <div class="secondQuestionPage">
        <div>
            <p>Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.</p>
            <div></div>
        </div>
        <div>
            <h2>Когда Вы чувствуете себя наиболее комфортно?</h2>
            <div class="firstQuestionPage__buttons">
                <button v-on:click="handleClick">
                    Утро
                    <div></div>
                </button>
                <button v-on:click="handleClick">
                    День
                    <div></div>
                </button>
                <button v-on:click="handleClick">
                    Вечер
                    <div></div>
                </button>
                <button v-on:click="handleClick">
                    Ночь
                    <div></div>
                </button>
            </div>
        </div>
        <div>
            <p>Вопрос 2-5</p>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
    name: 'SecondQuestionPage',
    methods: {
        handleClick() {
            this.$store.commit('setCurrentQuestion', 3)
        }
    }
})
</script>