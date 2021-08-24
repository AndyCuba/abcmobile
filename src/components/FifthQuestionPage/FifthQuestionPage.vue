<template>
    <div class="secondQuestionPage">
        <div>
            <div class="fifthQuestionPage__message">
                <p v-if="getUserAge <= 35 && getUserAge >= 18">По вам скучает очень близкий человек, которого больше нет в мире живых.</p>
                <p v-else-if="getUserAge <= 45 && getUserAge >= 36">По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.</p>
                <p v-else-if="getUserAge >= 46">По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.</p>
                <p v-else>По вам скучает очень близкий человек, которого больше нет в мире живых.</p>
            </div>
            <div></div>
        </div>
        <div>
            <h2>Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?</h2>
            <div class="firstQuestionPage__buttons">
                <button v-on:click="handleClick">
                    Да
                    <div></div>
                </button>
                <button v-on:click="handleClick">
                    Затрудняюсь ответить
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
    name: 'FifthQuestionPage',
    methods: {
        handleClick() {
            this.$store.commit('setCurrentQuestion', 6);
        }
    },
    computed: {
        getUserAge(): number {
            if(this.$store.getters.getUserAge !== null) {
                return this.$store.getters.getUserAge
            } else return 0;
        }
    }
})
</script>