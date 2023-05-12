import { defineConfig } from 'unocss'
import { presetUno, presetAttributify } from 'unocss'
import { presetIcons } from '@unocss/preset-icons'
export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            autoInstall: true,
            warn: true,
        })
    ], rules: [
        [/^h-(\d+)p$/, ([, d]) => ({ height: `${d}%` })],
        [/^w-(\d+)p$/, ([, d]) => ({ width: `${d}%` })],
    ]
})