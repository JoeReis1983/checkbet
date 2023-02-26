<template>
    <div class="showOdds">
        <h1>showOdds</h1>
        <div>{{ odds }}</div>
        <div v-for="guess in guesses" :key="guess">{{ guess }}</div>
    </div>
</template>

<script>
export default {
    name: 'showOdds',
    components: {
        
    },
    data() {
        return {
            odds: 0,
            guesses:[1,2,3,4,5,6,7,8,9,10],
            keyOddsApi:'cd17eca441edd5e529d378b1feef5b17'
        }
    },
    methods: {
        getOdds() {
            this.odds = 1.5
        },
        checkGuessFromOddsApi() {
            // https://api.the-odds-api.com/v4/sports?apiKey=cd17eca441edd5e529d378b1feef5b17
        }
    },
    mounted() {
        this.getOdds()
    } 
}

</script>