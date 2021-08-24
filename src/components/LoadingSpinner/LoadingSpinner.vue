<template>
    <div class="loadingSpinner">
       <div class="lds-spinner">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
    name: 'LoadingSpinner',
    created() {
        setTimeout(() => {
            this.$store.commit('setCurrentQuestion', 4)
        }, 2000)
    }
})
</script>