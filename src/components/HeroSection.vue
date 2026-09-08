<script setup>
const points = [
  'Sem seed phrase',
  'Gas pago pelo protocolo',
  'Dado bruto nunca público',
]
</script>

<template>
  <section id="topo" class="grain relative overflow-x-hidden bg-ink text-cream field-grid">
    <div
      class="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-leaf/25 blur-3xl"
    />
    <div
      class="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
    />

    <div class="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-36">
      <div>
        <p
          class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-wheat"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-mint pulse-soft" />
          Brasil · começando em Passo Fundo e Região
        </p>

        <h1 class="font-display text-[2.45rem] leading-[1.12] tracking-tight text-cream sm:text-5xl lg:text-[3.4rem]">
          O preço justo da sua região —
          <em class="not-italic text-gold">sem expor o seu.</em>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-wheat/85 sm:text-lg">
          Produtores rurais contribuem dados criptografados de custo e produtividade.
          O AgroBench agrega por região e cultura. Você compara de graça.
          Bancos e seguradoras pagam pelo mesmo agregado — e a receita volta em USDC
          para quem contribuiu.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#participar"
            class="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition hover:bg-wheat"
          >
            Sou produtor
          </a>
          <a
            href="#instituicoes"
            class="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-cream transition hover:bg-white/10"
          >
            Sou instituição
          </a>
        </div>

        <ul class="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-wheat/70">
          <li v-for="point in points" :key="point" class="flex items-center gap-2">
            <span class="h-1 w-1 rounded-full bg-mint" />
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="relative">
        <div class="float-y relative">
          <div class="rounded-3xl border border-white/10 bg-canopy/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-md">
            <div class="mb-4 flex items-center justify-between">
              <div>
                <p class="text-[11px] uppercase tracking-[0.18em] text-wheat/55">Painel do produtor</p>
                <p class="mt-1 text-sm font-semibold text-cream">Passo Fundo · Soja 2025/26</p>
              </div>
              <span class="rounded-full bg-mint/15 px-2.5 py-1 text-[11px] font-semibold text-mint">
                3 ciclos validados
              </span>
            </div>

            <div class="rounded-2xl bg-ink/50 p-4">
              <div class="flex items-end justify-between gap-4">
                <div>
                  <p class="text-xs text-wheat/60">Custo de adubo</p>
                  <p class="mt-1 font-display text-3xl text-cream">R$ 1.500<span class="text-lg text-wheat/50">/ha</span></p>
                  <p class="mt-1 text-xs font-medium text-gold">25% acima da média regional</p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-wheat/60">Média da região</p>
                  <p class="mt-1 text-xl font-semibold text-mint">R$ 1.200/ha</p>
                </div>
              </div>

              <div class="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div class="h-full w-[62%] rounded-full bg-gold" />
              </div>
              <div class="mt-2 flex justify-between text-[11px] text-wheat/45">
                <span>Você</span>
                <span>Região</span>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-2 gap-3">
              <div class="rounded-2xl border border-white/8 bg-white/4 p-3">
                <p class="text-[11px] text-wheat/55">Produtividade</p>
                <p class="mt-1 text-lg font-semibold text-cream">62 sc/ha</p>
                <p class="text-[11px] text-mint">+4 vs. mediana</p>
              </div>
              <div class="rounded-2xl border border-white/8 bg-white/4 p-3">
                <p class="text-[11px] text-wheat/55">Recompensa do ciclo</p>
                <p class="mt-1 text-lg font-semibold text-gold">42,80 USDC</p>
                <p class="text-[11px] text-wheat/50">distribuição mensal</p>
              </div>
            </div>
          </div>

          <div
            class="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-forest/90 px-4 py-3 text-xs text-wheat shadow-xl backdrop-blur sm:block"
          >
            <p class="font-medium text-cream">Identidade = wallet Solana</p>
            <p class="mt-0.5 text-wheat/60">Nome, CPF e coordenada nunca vão on-chain.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
