<script setup>
import { ref } from 'vue'

const tab = ref('produtor')

const content = {
  produtor: {
    kicker: 'Para quem planta',
    title: 'Benchmark gratuito. Recompensa recorrente. Dado que não vaza.',
    body: 'Você contribui o que já registra na safra. Vê como seu custo e sua produtividade se comparam à média da microrregião. Recebe USDC por ter alimentado o agregado — independente de quem consulta o painel depois.',
    points: [
      'Login com e-mail, telefone e CPF. A wallet é criada sozinha.',
      'CPF só existe no banco de identidade, como hash irreversível — nunca on-chain, nunca no payload.',
      'Localização generalizada para microrregião. Coordenada exata não entra.',
      'Carência de três ciclos validados antes do painel gratuito. Quem só quer capturar o dado não entra.',
    ],
  },
  instituicao: {
    kicker: 'Para quem origina risco',
    title: 'Custo e produtividade regionais, atualizados a cada ciclo — não estimativa histórica.',
    body: 'Bancos, seguradoras e cooperativas assinam o painel agregado para precificar crédito rural e seguro agrícola com dado real. O relatório pago inclui camadas que o produtor não vê de graça: solo, rotação, perdas climáticas.',
    points: [
      'Agregado por região × cultura × período: média e mediana.',
      'Dado validado contra fontes públicas antes de entrar na estatística.',
      'Assinatura alimenta um pool on-chain. Distribuição mensal em lote, sem transação por consulta.',
      'Começando no RS, Passo Fundo e microrregião — cobertura suficiente para estatística relevante.',
    ],
  },
}
</script>

<template>
  <section id="instituicoes" class="bg-forest text-cream">
    <div class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div class="flex flex-wrap gap-2" data-reveal>
        <button
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="tab === 'produtor' ? 'bg-gold text-ink' : 'border border-white/15 text-wheat hover:bg-white/5'"
          @click="tab = 'produtor'"
        >
          Produtor
        </button>
        <button
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="tab === 'instituicao' ? 'bg-gold text-ink' : 'border border-white/15 text-wheat hover:bg-white/5'"
          @click="tab = 'instituicao'"
        >
          Banco, seguro e cooperativa
        </button>
      </div>

      <div class="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start" :key="tab">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {{ content[tab].kicker }}
          </p>
          <h2 class="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            {{ content[tab].title }}
          </h2>
          <p class="mt-4 text-base leading-relaxed text-wheat/80">
            {{ content[tab].body }}
          </p>
        </div>
        <ul class="space-y-4">
          <li
            v-for="point in content[tab].points"
            :key="point"
            class="rounded-2xl border border-white/10 bg-white/4 p-4 text-sm leading-relaxed text-wheat/90"
          >
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
