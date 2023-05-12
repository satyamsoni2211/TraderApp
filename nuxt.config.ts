// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.css',
    ],
    build: {
        transpile: [
            'vuetify'
        ]
    },
    modules: [
        '@unocss/nuxt',
    ]
})
