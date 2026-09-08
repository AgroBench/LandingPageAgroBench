<script setup>
const guards = [
  {
    title: 'Prova de contribuição, não de wallet',
    body: 'Acesso gratuito só com atestação on-chain de dado validado naquele ciclo e região. Wallet sem contribuição não vê o painel.',
  },
  {
    title: 'CAR contra o SICAR',
    body: 'No onboarding, o AgroBench consulta a API pública do SICAR: o CAR existe, está ativo e ainda não foi vinculado a outra wallet. On-chain vai só o resultado (aprovado/rejeitado) — nunca o CAR.',
  },
  {
    title: 'Staking reembolsável',
    body: 'Contribuir exige travar um depósito em USDC, devolvido após validações em ciclos consecutivos. Fake em escala sai mais caro do que assinar o plano pago.',
  },
  {
    title: 'Carência de três ciclos',
    body: 'A wallet só ganha o painel gratuito depois de dado validado em três janelas seguidas. Elimina o padrão “entrar, capturar, sumir”.',
  },
  {
    title: 'O grátis não entrega o que a empresa quer',
    body: 'O produtor vê custo e produtividade básicos da própria região. Solo, rotação e perdas climáticas existem só no relatório pago — valor de quem avalia risco, não de quem compara adubo.',
  },
  {
    title: 'CPF → wallet, o ponto mais protegido',
    body: 'É o único lugar onde identidade real toca a on-chain. Hash irreversível, acesso restrito, finalidade só de recuperação de conta e verificação de CAR. Nunca exposto a validador, comprador ou terceiro.',
  },
]
</script>

<template>
  <section class="bg-parchment">
    <div class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div class="max-w-2xl" data-reveal>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Barreira anti-fraude</p>
        <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
          O painel grátis recompensa quem planta dado real — não quem só quer consultar.
        </h2>
      </div>

      <div class="mt-12 grid gap-4 md:grid-cols-2">
        <article
          v-for="(guard, i) in guards"
          :key="guard.title"
          class="rounded-3xl border border-stone bg-white p-6"
          :data-reveal="`delay-${i % 4}`"
        >
          <h3 class="font-semibold text-ink">{{ guard.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ guard.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
