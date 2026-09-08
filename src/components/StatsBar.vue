<script setup>
const stats = [
  { value: 'R$ 605,2 bi', label: 'Plano Safra 2025/2026 em crédito rural subsidiado' },
  { value: '2 pontas', label: 'Produtor compara. Instituição precifica risco.' },
  { value: '0 dado bruto', label: 'Público só vê agregado por região × cultura' },
  { value: 'USDC-SPL', label: 'Recompensa automática na wallet de quem contribuiu' },
]
</script>

<template>
  <section class="border-y border-stone bg-parchment">
    <div class="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <article v-for="(stat, i) in stats" :key="stat.value" :data-reveal="`delay-${i}`">
        <p class="font-display text-2xl text-ink sm:text-[1.7rem]">{{ stat.value }}</p>
        <p class="mt-2 text-sm leading-snug text-muted">{{ stat.label }}</p>
      </article>
    </div>
  </section>
</template>
