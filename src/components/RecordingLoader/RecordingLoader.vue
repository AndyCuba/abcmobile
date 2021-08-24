<template>
    <div class="recordingLoader">
        <div class="recordingLoader__microphone"></div>
        <div class="recordingLoader__progress-bar">
            <div>
                <div ref="Bar"></div>
            </div>
        </div>
        <p>{{loadingPercentage}}%</p>
        <p>Запись сообщения</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
    name: 'RecordingLoader',
    data: () => ({
        isLoading: false,
        loadingPercentage: 0
    }),
    methods: {
        loadProgressBar() {
            if (this.isLoading === false) {
                this.isLoading = true;
                let bar = this.$refs.Bar as HTMLDivElement;
                this.loadingPercentage = 1;
                let id = setInterval(() => {
                    if (this.loadingPercentage >= 100) {
                        clearInterval(id);
                        this.isLoading = false;
                    } else {
                        this.loadingPercentage++;
                        bar.style.width = this.loadingPercentage + "%";
                    }
                }, 50);               
            }
        }
    },
    mounted() {
        this.loadProgressBar()
    },
    watch: {
        loadingPercentage: function(newPercentage) {
            if(newPercentage === 100) {
                setTimeout(() => {this.$store.commit('setCurrentQuestion', 7)}, 1000) 
            }
        }
    }
})
</script>