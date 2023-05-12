<template>
    <div class="container-box flex justify-center items-center h-screen w-screen">
        <div class="h-sm w-md">
            <v-card class="h-90p mb-4">
                <v-card-title class="text-center">
                    Sign Up
                </v-card-title>
                <div class="flex flex-col px-4">
                    <v-label class="text-black-9 text-md">Email Id <span class="text-red-700">*</span></v-label>
                    <input type="email" placeholder="Enter email" border="1 solid rounded gray-5" px="4"
                        class="h-10 focus-border-green-6 focus-border-2 outline-none mb-2" required>
                    <button class="bg-green-4 text-white-d w-50p h-10 mx-auto mt-4 rounded-2"
                        hover="bg-gradient-to-r from-indigo-500 to-purple-500">Verify</button>
                    <div class="filler" />
                    <p class="text-center mt-10 mb-0">Existing User ?
                        <NuxtLink to="/" class="decoration-none">Login</NuxtLink>
                    </p>
                </div>
            </v-card>
            <p text="coolgray sm center" class="mt-4">
                © 2020-2023 <b>FooGlobal</b> Software Private Limited
            </p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login-container {
    width: 30%;
    height: 40%;
}

.filler {
    height: 4rem;
}
</style>