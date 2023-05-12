<template>
    <div class="flex justify-center">
        <input type="text"
            class="border-1 border-solid border-gray-6 border-rounded-2 w-8 h-9 mx-2 px-auto text-center shadow-md"
            autocomplete="one-time-code" pattern="\d{1}" maxlength="1" inputmode="numeric" ref="`o${i}"
            @input="$event => handleChange($event, i)" v-for="i of length"
            @keydown.delete="$event => handlePrevious($event, i)" :value="inputList[i - 1]" @focus="$event.target.select()">

    </div>
</template>
<script>
export default {
    name: 'Otp',
    setup({ length }) {
        const inputList = []
        // create input list dynamically
        for (let index = 0; index < length; index++) {
            inputList.push('')
        }
        return { inputList: ref(inputList) }
    },
    props: {
        length: {
            type: Number,
            required: true
        }
    },
    methods: {
        /**
         * 
         * @param {Event} event 
         */
        handleChange(event, index) {
            if (!event.target.value) {
                return
            }
            this.inputList[index - 1] = event.target.value
            const nextSibling = event.target.nextElementSibling
            if (nextSibling) {
                nextSibling.focus()
            } else {
                event.target.blur()
                // emit this opt when all the input boxes are filled
                this.$emit('otp', this.inputList.join(''))
            }
        },
        handlePrevious(event, index) {
            this.inputList[index - 1] = ''
            event.target.value = ''
            /**
             * @type {HTMLInputElement}
             */
            const previousElement = event.target.previousElementSibling;
            if (previousElement) {
                previousElement.select()
            } else {
                event.target.blur()
            }
        }
    }
}
</script>