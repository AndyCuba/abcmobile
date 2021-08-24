<template>
    <div class="secondQuestionPage">
        <div>
            <p>Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!</p>
            <div></div>
        </div>
        <div>
            <h2>Снятся ли Вам умершие люди?</h2>
            <div class="firstQuestionPage__buttons">
                <button v-on:click="handleClick">
                    Да
                    <div></div>
                </button>
                <button v-on:click="handleClick">
                    Нет
                    <div></div>
                </button>
                <button v-on:click="handleClick">
                    Никогда
                    <div></div>
                </button>
            </div>
        </div>
        <div>
            <p>Вопрос 4-5</p>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
    name: 'FourthQuestionPage',
    methods: {
        handleClick() {
            this.$store.commit('setCurrentQuestion', 5);
        }
    }
})
</script>