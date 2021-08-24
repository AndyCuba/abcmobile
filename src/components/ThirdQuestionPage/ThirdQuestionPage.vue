<template>
    <div class="secondQuestionPage">
        <div>
            <p>Уже совсем скоро Вы узнаете много интересного о своем будущем!</p>
            <div></div>
        </div>
        <div>
            <h2>Укажите свою дату рождения:</h2>
            <form v-on:submit.prevent="handleSubmit">
                <div class="thirdPageDateSelect">
                    <select  v-model="day" :class="{invalid: isSubmitting && !day.trim()}"> 
                        <option value="" default disabled selected>День</option>
                        <option v-for="day in days" v-bind:key="day">{{day}}</option>
                    </select>
                    <select v-model="month" :class="{invalid: isSubmitting && !month.trim()}">
                        <option value="" default disabled selected>Месяц</option>
                        <option v-for="month in months" v-bind:key="month">{{month}}</option>
                    </select>
                    <select v-model="year" :class="{invalid: isSubmitting && !year.trim()}">
                        <option value="" default disabled selected>Год</option>
                        <option v-for="year in years" v-bind:key="year">{{year}}</option>
                    </select>
                </div>          
                <div class="firstQuestionPage__buttons">
                    <button type="submit">
                        Далее
                        <div></div>
                    </button>
                </div>
            </form>
        </div>
        <div>
            <p>Вопрос 3-5</p>
            <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
    name: 'ThirdQuestionPage',
    data: () => ({
        day: '',
        month: '',
        year: '',
        days: [...Array(32).keys()].slice(1),
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        years: [] as number[],
        isSubmitting: false
    }),
    methods: {       
        createYears() {
            const startYear = 1950
            const endYear = new Date().getFullYear()

            for (let i = startYear; i <= endYear; i++) {
                this.years.push(i);
            }
            
        },
        handleSubmit() {
            this.isSubmitting = true
            
            if(this.day && this.month && this.year) {
                this.$store.commit('setCurrentUserAge', this.year)
                this.$store.commit('setCurrentQuestion', 3.5)
            }
            
        }
    },
    created() {
            if(!this.year[0]) {
                this.createYears()
            }
    },
})
</script>