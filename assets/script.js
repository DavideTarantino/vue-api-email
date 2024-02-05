const {
    createApp
} = Vue

createApp({
    data() {
        return {
            arrayMail: [],
        }

    },
    mounted() {
        for( let i = 0; i <= 9; i++)
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.arrayMail.push(result.data.response)
            })
    },
    
}).mount('#app')
