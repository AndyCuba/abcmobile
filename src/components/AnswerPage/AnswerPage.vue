<template>
    <div class="answerPage">
        <div class="fifthQuestionPage__message">
            <p>Спасибо за Ваши ответы! 
                <br/><span>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</span>
            </p>
        </div>
        <p>Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем.</p>
        <div class="answerPage__date-message">
            <p>
                <span>Первое значимое событие может произойти уже 
                    <span v-if="tomorrowDate !== false">{{tomorrowDate}}</span>,
                </span> 
                Вам надо быть готовым, что бы последствия не оказались необратимыми.
            </p>
        </div>
        <p>Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!</p>
        <div class="firstQuestionPage__buttons">
            <button v-on:click="handleClick">
                Позвонить и прослушать
                <div></div>
            </button>
        </div>
        <div v-if="data !== null" class="answerPage__recieved-data">
            <h3>{{data.name}}</h3>
            <p>Birth year: {{data.birth_year}}</p>
            <p>Gender: {{data.gender}}</p>
            <p>Height: {{data.height}}</p>
            <p>Weight: {{data.mass}}</p>
        </div>
        <div v-if="data === null && error !== null" class="answerPage__response-error">
            <p>{{error.message}}</p>
        </div>
        <div class="answerPage__terms">
            <p>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AnswerPage',
    data: () => ({
        data: null,
        tomorrowDate: '',
        error: null
    }),
    methods: {
        handleClick() {
            this.getData()
        },
        async getData() {
            try {
                return fetch('https://swapi.dev/api/people/1/')
                    .then(res => res.json())
                    .then(data => this.data = data)
            } catch (error) {
                this.error = error
            }
        }
    },
    computed: {
        getUserAge(): number {
            if(this.$store.getters.getUserAge !== null) {
                return this.$store.getters.getUserAge
            } else return 0;
        }
    },
    created() {
        const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        let day: number | string = currentDate.getDate()
        let month: number | string = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()

        if(day < 10) day = '0' + day
        if(month < 10) month = '0' + month

        const date = `${day}.${month}.${year}`

        this.tomorrowDate = date;
    }
})
</script>

<style scoped src="./style.css"></style>