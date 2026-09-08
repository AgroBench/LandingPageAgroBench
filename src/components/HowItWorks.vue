<script setup>
const steps = [
  {
    n: '01',
    title: 'Conta, não cripto',
    body: 'O produtor entra com e-mail, telefone e CPF. Uma wallet Solana nasce em segundo plano. Sem seed phrase, sem gas, sem jargão. A chave fica criptografada no dispositivo, com recuperação via SMS.',
  },
  {
    n: '02',
    title: 'Commit-reveal',
    body: 'Antes do envio, o hash dos dados vai on-chain. Só depois o payload criptografado chega ao validador. Ninguém escolhe “enviar só se passar”: o commit já existe e não muda. Isso corta viés de seleção.',
  },
  {
    n: '03',
    title: 'Validação no TEE',
    body: 'O payload só é decifrado dentro de um enclave de hardware. Nem o operador vê texto puro. O dado cruza com fontes públicas (sensoriamento, CONAB). Inconsistência não entra no agregado.',
  },
  {
    n: '04',
    title: 'Compare e receba',
    body: 'Atestação on-chain libera recompensa base em USDC. O produtor vê o comparativo da região. Instituições assinam o painel. Todo mês, o contrato reparte a receita entre quem alimentou aquele agregado.',
  },
]
</script>

<template>
  <section id="como-funciona" class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div class="max-w-2xl" data-reveal>
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Como funciona</p>
      <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
        Quatro passos. O blockchain fica nos bastidores.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted">
        A experiência do produtor é “criei uma conta no app”. A wallet existe de fato,
        é exportável e pode ir para controle total a qualquer momento.
      </p>
    </div>

    <ol class="mt-12 grid gap-5 md:grid-cols-2">
      <li
        v-for="(step, i) in steps"
        :key="step.n"
        class="relative overflow-hidden rounded-3xl border border-stone bg-white p-7"
        :data-reveal="`delay-${i}`"
      >
        <span class="font-display text-4xl text-gold/40">{{ step.n }}</span>
        <h3 class="mt-3 text-xl font-semibold tracking-tight text-ink">{{ step.title }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-muted">{{ step.body }}</p>
      </li>
    </ol>
  </section>
</template>
