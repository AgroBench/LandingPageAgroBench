<script setup>
const limits = [
  {
    title: 'TEE, não zero-knowledge — ainda',
    body: 'A validação depende de um enclave controlado pelo protocolo: pseudonimização com garantia de hardware, não anonimização criptográfica plena. O caminho para eliminar esse ponto é aprendizado federado — o modelo treina no dispositivo e só os pesos saem da propriedade.',
  },
  {
    title: 'Vínculo CPF → wallet sob a LGPD',
    body: 'Hash guardado pelo AgroBench, finalidade restrita (recuperação de conta e verificação de CAR), direito de exclusão pelo titular. Recompensa em cripto atrelada a atividade regular será submetida a CVM e Banco Central antes de produção.',
  },
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-5 py-16 lg:px-8">
    <div data-reveal>
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Limitações assumidas</p>
      <h2 class="mt-3 font-display text-2xl text-ink sm:text-3xl">Não escondemos os trade-offs.</h2>
    </div>
    <div class="mt-8 grid gap-4 md:grid-cols-2">
      <article
        v-for="(limit, i) in limits"
        :key="limit.title"
        class="rounded-3xl border border-dashed border-stone bg-white/70 p-6"
        :data-reveal="`delay-${i}`"
      >
        <h3 class="font-semibold text-ink">{{ limit.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">{{ limit.body }}</p>
      </article>
    </div>
  </section>
</template>
