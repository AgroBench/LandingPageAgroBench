<script setup>
const layers = [
  {
    title: 'Coleta',
    body: 'App local registra custo e produtividade por safra. Identidade do protocolo = chave pública Solana. Nome, CPF/CNPJ e endereço civil nunca entram no payload nem na cadeia.',
  },
  {
    title: 'Integridade',
    body: 'Commit on-chain do hash, depois reveal criptografado com a chave pública do ambiente de validação. O produtor não escolhe enviar só depois de saber se o dado “passaria”.',
  },
  {
    title: 'TEE',
    body: 'Decifração exclusiva dentro do enclave. Garantia de hardware, não de política interna. Validação cruza com sensoriamento remoto e CONAB. Dado fora do padrão é rejeitado.',
  },
  {
    title: 'Agregado',
    body: 'Média e mediana por região × cultura × período. O valor bruto individual não fica acessível fora desse cálculo. O que existe publicamente é só a estatística.',
  },
  {
    title: 'Atestação',
    body: 'O validador assina on-chain que aquele hash foi validado e compõe o agregado. Isso libera a recompensa base em USDC-SPL, direto na wallet.',
  },
  {
    title: 'Distribuição',
    body: 'Assinaturas entram num pool Solana. Todo mês, o contrato reparte proporcionalmente — peso por granularidade, raridade da região/cultura e contribuição validada.',
  },
]
</script>

<template>
  <section id="privacidade" class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
    <div class="max-w-2xl" data-reveal>
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Arquitetura</p>
      <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
        Identidade separada de conteúdo. Dado bruto visto uma vez, dentro do hardware.
      </h2>
      <p class="mt-4 text-base leading-relaxed text-muted">
        Produtores não querem expor custo e produtividade individuais — é informação competitiva.
        O setor precisa do agregado para crédito, seguro e política. O AgroBench desenha exatamente essa fronteira.
      </p>
    </div>

    <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(layer, i) in layers"
        :key="layer.title"
        class="rounded-3xl border border-stone bg-cream p-6"
        :data-reveal="`delay-${i % 4}`"
      >
        <div class="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-xs font-bold text-gold">
          {{ String(i + 1).padStart(2, '0') }}
        </div>
        <h3 class="font-semibold text-ink">{{ layer.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">{{ layer.body }}</p>
      </article>
    </div>
  </section>
</template>
