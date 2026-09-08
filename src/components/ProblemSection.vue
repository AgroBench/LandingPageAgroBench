<script setup>
const sides = [
  {
    eyebrow: 'Para o produtor',
    title: 'Cada um negocia isolado.',
    body: 'Decisões de adubo, defensivo e insumo saem sem referência de mercado confiável. Não existe um “quanto o vizinho está pagando” acessível — e perguntar é revelar o próprio custo.',
    items: ['Preço justo invisível', 'Poder de barganha assimétrico', 'Benchmark competitivo demais para compartilhar'],
  },
  {
    eyebrow: 'Para banco, seguro e cooperativa',
    title: 'O risco rural ainda é estimado.',
    body: 'Crédito e seguro agrícola dependem de safras anteriores, autodeclaração e números da CONAB. Pesquisas de mercado chegam caras, defasadas e pouco granulares por região e cultura.',
    items: ['Originação com dado atrasado', 'Precificação sem custo real', 'Agregado regional inexistente'],
  },
]
</script>

<template>
  <section id="problema" class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div class="max-w-2xl" data-reveal>
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">O problema</p>
      <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
        O campo gera o dado. O mercado opera no escuro.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted">
        As duas pontas precisam da mesma informação — custo e produtividade reais, por região —
        e nenhuma consegue obtê-la sem expor o produtor. O AgroBench resolve as duas ao mesmo tempo.
      </p>
    </div>

    <div class="mt-12 grid gap-5 lg:grid-cols-2">
      <article
        v-for="(side, i) in sides"
        :key="side.title"
        class="rounded-3xl border border-stone bg-white p-7 shadow-sm"
        :data-reveal="`delay-${i}`"
      >
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{{ side.eyebrow }}</p>
        <h3 class="mt-3 font-display text-2xl text-ink">{{ side.title }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-muted">{{ side.body }}</p>
        <ul class="mt-6 space-y-2.5">
          <li v-for="item in side.items" :key="item" class="flex items-start gap-2.5 text-sm text-ink/80">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
