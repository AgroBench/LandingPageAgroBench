<script setup>
import BrandLogo from './BrandLogo.vue'

const cols = [
  {
    title: 'Produto',
    links: [
      { href: '#como-funciona', label: 'Como funciona' },
      { href: '#painel', label: 'Painel' },
      { href: '#privacidade', label: 'Arquitetura' },
    ],
  },
  {
    title: 'Para quem',
    links: [
      { href: '#problema', label: 'Produtores' },
      { href: '#instituicoes', label: 'Instituições' },
      { href: '#mercado', label: 'Mercado' },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-stone bg-parchment">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-8">
      <div class="max-w-sm">
        <BrandLogo light />
        <p class="mt-4 text-sm leading-relaxed text-muted">
          Benchmarking regional com dados anonimizados e recompensa em blockchain.
          Dado individual nunca público. Agregado a serviço do crédito, do seguro e de quem planta.
        </p>
      </div>

      <div class="flex gap-16">
        <div v-for="col in cols" :key="col.title">
          <p class="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{{ col.title }}</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li v-for="link in col.links" :key="link.href">
              <a :href="link.href" class="text-ink/80 hover:text-leaf">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-stone">
      <p class="mx-auto max-w-6xl px-5 py-5 text-xs text-muted lg:px-8">
        © {{ new Date().getFullYear() }} AgroBench.
      </p>
    </div>
  </footer>
</template>
