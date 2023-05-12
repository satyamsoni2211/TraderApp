
<template>
    <div class="container-box flex justify-center items-center h-screen w-screen">
        <div class="h-sm w-md">
            <v-card class="h-90p mb-4 py-4">
                <h3 class="px-4">Verification Code</h3>
                <p class="px-4 text-gray-4">A verification code has been sent to the registered email
                    <b>foo.bar@gmail.com</b>. Kindly
                    check the code and enter below.
                </p>
                <div class="flex flex-col p-4">
                    <Otp :length="7" @otp="event => handleOtp(event)" />

                    <button class="bg-green-4 text-white-d w-50p h-10 mx-auto mt-4 rounded-2"
                        hover="bg-gradient-to-r from-indigo-500 to-purple-500">Sign
                        In</button>
                    <p class="text-center mt-10 mb-0">New User ?
                        <NuxtLink to="/signup" class="decoration-none">Sign Up</NuxtLink>
                    </p>
                    <p class="text-center">
                        <NuxtLink to="/" class="decoration-none">Start Over</NuxtLink>
                    </p>
                </div>
            </v-card>
            <p text="coolgray sm center" class="mt-4">
                © 2020-2023 <b>SenecaGlobal</b> Software Private Limited
            </p>
        </div>
    </div>
</template>
<script>
// definePageMeta({ layout: 'custom' })
export default {
    methods: {
        handleOtp(event) {
            console.log(event)
        }
    }
}
</script>
<style scoped lang="scss">
.login-container {
    width: 30%;
    height: 40%;
}

.filler {
    height: 4rem;
}
</style>