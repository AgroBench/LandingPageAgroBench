<script setup>
const rings = [
  {
    code: 'TAM',
    title: 'Crédito rural e seguro agrícola no Brasil',
    body: 'R$ 605,2 bilhões movimentados por ciclo no Plano Safra 2025/2026 — volume que hoje depende de avaliação de risco com dado defasado.',
  },
  {
    code: 'SAM',
    title: 'Quem origina e precifica no Sul/Sudeste',
    body: 'Bancos, seguradoras e cooperativas de crédito dispostos a pagar por agregado atualizado em vez de estimativa histórica.',
  },
  {
    code: 'SOM',
    title: 'Passo Fundo e microrregião, RS',
    body: 'Cooperativas e bancos regionais. A primeira base de produtores, com cobertura suficiente para um agregado estatisticamente relevante por cultura.',
  },
]
</script>

<template>
  <section id="mercado" class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div class="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <div data-reveal>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Mercado</p>
        <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
          Monetizar o dado que ninguém compila de forma estruturada.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-muted">
          Custo real, por insumo, por produtor, atualizado a cada safra. O Plano Safra inteiro
          depende de risco rural — hoje calculado com safras anteriores, autodeclaração e estimativas.
        </p>
      </div>

      <ol class="space-y-4">
        <li
          v-for="(ring, i) in rings"
          :key="ring.code"
          class="flex gap-4 rounded-3xl border border-stone bg-white p-5"
          :data-reveal="`delay-${i}`"
        >
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-sm font-semibold"
            :class="i === 2 ? 'bg-gold text-ink' : i === 1 ? 'bg-leaf text-cream' : 'bg-ink text-wheat'"
          >
            {{ ring.code }}
          </span>
          <div>
            <h3 class="font-semibold text-ink">{{ ring.title }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-muted">{{ ring.body }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
