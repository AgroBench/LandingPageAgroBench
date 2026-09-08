<script setup>
const tiers = [
  {
    name: 'Básico',
    reward: 'Recompensa base',
    tag: 'Contribuição mínima',
    items: [
      'Cultura plantada e área total',
      'Custo total da safra (um número)',
    ],
  },
  {
    name: 'Intermediário',
    reward: 'Recompensa maior',
    tag: 'Dado mais raro',
    featured: true,
    items: [
      'Custo por insumo (adubo, defensivo, semente, combustível, mão de obra)',
      'Produtividade por hectare',
      'Datas de plantio e colheita',
      'Fornecedor por categoria — nome nunca público; entra só no preço médio regional',
    ],
  },
  {
    name: 'Avançado',
    reward: 'Recompensa mais alta',
    tag: 'Alto valor para risco',
    items: [
      'Tipo de solo e histórico de rotação',
      'Irrigação (sim/não e tipo de sistema)',
      'Pragas/doenças e manejo',
      'Perdas climáticas com % da área afetada',
      'Nível de mecanização',
    ],
  },
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div class="max-w-2xl" data-reveal>
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Granularidade</p>
      <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
        Quanto mais detalhe, mais vale o agregado — e maior a sua fatia.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted">
        O smart contract pondera a recompensa pela granularidade e pela raridade do que você enviou,
        não só pelo fato de ter contribuído. Região ou cultura sub-representada também paga mais por wallet.
      </p>
    </div>

    <div class="mt-12 grid gap-5 lg:grid-cols-3">
      <article
        v-for="(tier, i) in tiers"
        :key="tier.name"
        class="flex flex-col rounded-3xl border p-7"
        :class="tier.featured ? 'border-gold bg-ink text-cream shadow-xl shadow-ink/20' : 'border-stone bg-white'"
        :data-reveal="`delay-${i}`"
      >
        <p
          class="text-xs font-semibold uppercase tracking-[0.16em]"
          :class="tier.featured ? 'text-gold' : 'text-muted'"
        >
          {{ tier.tag }}
        </p>
        <h3 class="mt-2 font-display text-2xl" :class="tier.featured ? 'text-cream' : 'text-ink'">
          {{ tier.name }}
        </h3>
        <p class="mt-1 text-sm font-medium" :class="tier.featured ? 'text-mint' : 'text-leaf'">
          {{ tier.reward }}
        </p>
        <ul class="mt-6 flex-1 space-y-3 text-sm" :class="tier.featured ? 'text-wheat/80' : 'text-muted'">
          <li v-for="item in tier.items" :key="item" class="flex gap-2.5">
            <span
              class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
              :class="tier.featured ? 'bg-gold' : 'bg-leaf'"
            />
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
