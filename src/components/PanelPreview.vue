<script setup>
const rows = [
  { label: 'Adubo', you: 1500, region: 1200, unit: 'R$/ha' },
  { label: 'Defensivo', you: 410, region: 445, unit: 'R$/ha' },
  { label: 'Semente', you: 380, region: 360, unit: 'R$/ha' },
  { label: 'Produtividade', you: 62, region: 58, unit: 'sc/ha' },
]

function barWidth(you, region) {
  const max = Math.max(you, region) * 1.15
  return {
    you: `${(you / max) * 100}%`,
    region: `${(region / max) * 100}%`,
  }
}
</script>

<template>
  <section id="painel" class="bg-parchment">
    <div class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div class="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Painel de benchmarking</p>
          <h2 class="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
            Informação que cabe na mesa do fornecedor.
          </h2>
          <p class="mt-4 text-base leading-relaxed text-muted">
            O produtor vê, de graça, o comparativo de custo e produtividade do nível básico
            da própria região e cultura. Exemplo: a média de adubo foi R$&nbsp;1.200/ha;
            você gastou R$&nbsp;1.500/ha. Isso é argumento para renegociar.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-ink/80">
            <li class="flex gap-2.5">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Acesso gratuito só depois de contribuição validada — wallet vazia não vê nada.
            </li>
            <li class="flex gap-2.5">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Solo, rotação e perdas climáticas nunca aparecem no plano gratuito. Esse dado vive no relatório pago.
            </li>
            <li class="flex gap-2.5">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Instituições consultam o mesmo agregado via assinatura, para crédito e seguro com dado real.
            </li>
          </ul>
        </div>

        <div
          class="rounded-3xl border border-stone bg-white p-5 shadow-xl shadow-ink/5 sm:p-7"
          data-reveal="delay-1"
        >
          <div class="mb-6 flex items-center justify-between">
            <div>
              <p class="text-[11px] uppercase tracking-[0.16em] text-muted">Microrregião</p>
              <p class="font-semibold text-ink">Passo Fundo e entorno · Soja</p>
            </div>
            <span class="rounded-full bg-cream px-3 py-1 text-xs font-medium text-leaf">Safra 2025/26</span>
          </div>

          <div class="space-y-5">
            <div v-for="row in rows" :key="row.label">
              <div class="mb-1.5 flex items-baseline justify-between text-sm">
                <span class="font-medium text-ink">{{ row.label }}</span>
                <span class="text-xs text-muted">{{ row.unit }}</span>
              </div>
              <div class="space-y-1.5">
                <div class="flex items-center gap-3">
                  <span class="w-12 shrink-0 text-[11px] text-muted">Você</span>
                  <div class="h-2.5 flex-1 overflow-hidden rounded-full bg-stone">
                    <div class="h-full rounded-full bg-gold" :style="{ width: barWidth(row.you, row.region).you }" />
                  </div>
                  <span class="w-14 text-right text-xs font-semibold text-ink">{{ row.you }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="w-12 shrink-0 text-[11px] text-muted">Região</span>
                  <div class="h-2.5 flex-1 overflow-hidden rounded-full bg-stone">
                    <div class="h-full rounded-full bg-leaf" :style="{ width: barWidth(row.you, row.region).region }" />
                  </div>
                  <span class="w-14 text-right text-xs font-semibold text-ink">{{ row.region }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
