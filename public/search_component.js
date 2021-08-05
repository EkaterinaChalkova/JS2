Vue.component('search-component', {

    template: `
    <div >
    <input type="text"  v-model:value = "componentSearchLine"  placeholder="  Начни поиск" >
    <button class="found_btn" v-on:click="searchEmit">
        <img class="found_btn_img" src="img/Forma1.svg" alt="pfoto">
    </button>
    </div>
    `,
    data() {
        return {
            componentSearchLine: ''
        }
    },
    methods: {
        searchEmit() {
            console.log(this.componentSearchLine)
            this.$emit('startsearch', this.componentSearchLine)
        }
    }
});

