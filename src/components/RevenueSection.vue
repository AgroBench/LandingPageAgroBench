<script setup>
const flow = [
  {
    title: 'Assinaturas no pool',
    body: 'O pagamento das instituições entra num contrato na Solana. Sem transação a cada consulta — o período acumula.',
  },
  {
    title: 'Registro de quem contribuiu',
    body: 'O contrato sabe quais wallets alimentaram cada agregado: região × período × cultura, com peso de granularidade.',
  },
  {
    title: 'Repasse mensal em USDC',
    body: 'Uma vez por mês o lote roda. Agregado mais raro e dado mais denso pagam mais por wallet. Renda previsível para o produtor.',
  },
]
</script>

<template>
  <section class="bg-parchment">
    <div class="mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <div class="rounded-[2rem] bg-ink px-6 py-10 text-cream sm:px-10" data-reveal>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Receita on-chain</p>
        <h2 class="mt-3 max-w-xl font-display text-3xl leading-tight">
          Quem compra o agregado paga quem gerou o dado.
        </h2>
        <div class="mt-10 grid gap-8 md:grid-cols-3">
          <article v-for="(item, i) in flow" :key="item.title">
            <p class="font-display text-2xl text-gold">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="mt-2 font-semibold">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-wheat/75">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
