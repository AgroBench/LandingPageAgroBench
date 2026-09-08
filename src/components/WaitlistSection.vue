<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  role: 'produtor',
  region: '',
})

const submitted = ref(false)
const error = ref('')

function submit() {
  error.value = ''
  if (!form.name.trim() || !form.email.trim()) {
    error.value = 'Preencha nome e e-mail para entrar na lista.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    error.value = 'Informe um e-mail válido.'
    return
  }
  submitted.value = true
}
</script>

<template>
  <section id="participar" class="bg-ink text-cream grain field-grid">
    <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div data-reveal>
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Primeira safra</p>
        <h2 class="mt-3 font-display text-3xl leading-tight sm:text-4xl">
          Estamos recrutando a base de Passo Fundo.
        </h2>
        <p class="mt-4 text-base leading-relaxed text-wheat/80">
          Produtores da microrregião e instituições que originam crédito ou seguro agrícola.
          Deixe seu contato. Sem spam — só convite quando a janela da sua cultura abrir.
        </p>
        <p class="mt-6 text-sm text-wheat/55">
          Operação em produção só depois de enquadramento junto à CVM e ao Banco Central
          do modelo de recompensa em cripto atrelado a atividade econômica regular.
        </p>
      </div>

      <form
        class="rounded-3xl border border-white/10 bg-canopy/80 p-6 shadow-2xl backdrop-blur sm:p-8"
        data-reveal="delay-1"
        @submit.prevent="submit"
      >
        <div v-if="submitted" class="py-8 text-center">
          <p class="font-display text-2xl text-gold">Você está na lista.</p>
          <p class="mt-3 text-sm text-wheat/75">
            Quando a janela da sua região abrir, o convite chega neste e-mail.
          </p>
        </div>

        <fieldset v-else class="space-y-4">
          <legend class="sr-only">Lista de espera</legend>

          <label class="block text-sm">
            <span class="mb-1.5 block font-medium text-wheat">Nome</span>
            <input
              v-model="form.name"
              type="text"
              autocomplete="name"
              class="w-full rounded-xl border border-white/10 bg-ink/60 px-3 py-2.5 text-cream outline-none ring-gold/40 placeholder:text-wheat/30 focus:ring-2"
              placeholder="Como podemos te chamar"
            />
          </label>

          <label class="block text-sm">
            <span class="mb-1.5 block font-medium text-wheat">E-mail</span>
            <input
              v-model="form.email"
              type="email"
              autocomplete="email"
              class="w-full rounded-xl border border-white/10 bg-ink/60 px-3 py-2.5 text-cream outline-none ring-gold/40 placeholder:text-wheat/30 focus:ring-2"
              placeholder="voce@email.com"
            />
          </label>

          <div class="grid gap-4 sm:grid-cols-2">
            <label class="block text-sm">
              <span class="mb-1.5 block font-medium text-wheat">Perfil</span>
              <select
                v-model="form.role"
                class="w-full appearance-none rounded-xl border border-white/10 bg-ink/60 px-3 py-2.5 text-cream outline-none ring-gold/40 focus:ring-2"
              >
                <option value="produtor">Produtor</option>
                <option value="cooperativa">Cooperativa</option>
                <option value="banco">Banco</option>
                <option value="seguradora">Seguradora</option>
                <option value="outro">Outro</option>
              </select>
            </label>

            <label class="block text-sm">
              <span class="mb-1.5 block font-medium text-wheat">Região</span>
              <input
                v-model="form.region"
                type="text"
                class="w-full rounded-xl border border-white/10 bg-ink/60 px-3 py-2.5 text-cream outline-none ring-gold/40 placeholder:text-wheat/30 focus:ring-2"
                placeholder="Ex.: Passo Fundo, RS"
              />
            </label>
          </div>

          <p v-if="error" class="text-sm text-gold">{{ error }}</p>

          <button
            type="submit"
            class="mt-2 w-full rounded-full bg-gold py-3 text-sm font-semibold text-ink transition hover:bg-wheat"
          >
            Quero ser avisado
          </button>
        </fieldset>
      </form>
    </div>
  </section>
</template>
