<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BrandLogo from './BrandLogo.vue'

const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#painel', label: 'Painel' },
  { href: '#mercado', label: 'Mercado' },
  { href: '#privacidade', label: 'Privacidade' },
]

const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 16
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled || open ? 'border-b border-white/8 bg-ink/85 backdrop-blur-xl' : 'bg-transparent'"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8">
      <BrandLogo />

      <nav class="hidden items-center gap-8 text-sm text-wheat/80 md:flex" aria-label="Principal">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="transition hover:text-cream"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <a
          href="#participar"
          class="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-wheat"
        >
          Quero participar
        </a>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-cream md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Fechar menu' : 'Abrir menu'"
        @click="open = !open"
      >
        <svg v-if="!open" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div
      v-show="open"
      id="mobile-nav"
      class="border-t border-white/8 px-5 py-4 md:hidden"
    >
      <nav class="flex flex-col gap-3 text-cream" aria-label="Mobile">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="rounded-lg px-2 py-2 hover:bg-white/5"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#participar"
          class="mt-2 rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-ink"
          @click="open = false"
        >
          Quero participar
        </a>
      </nav>
    </div>
  </header>
</template>
