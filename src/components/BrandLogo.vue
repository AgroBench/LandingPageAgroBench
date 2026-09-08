<script setup>
defineProps({
  light: { type: Boolean, default: false },
})
</script>

<template>
  <a href="#topo" class="group flex items-center gap-2.5" aria-label="AgroBench, início">
    <span
      class="flex h-9 w-9 items-center justify-center rounded-xl border"
      :class="
        light
          ? 'border-stone bg-ink text-mint'
          : 'border-white/10 bg-white/5 text-mint'
      "
    >
      <svg viewBox="0 0 32 32" class="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M8 22V14.5" stroke="#C9A227" stroke-width="2.6" stroke-linecap="round" />
        <path d="M16 22V9.5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" />
        <path d="M24 22V12" stroke="#E8D5A3" stroke-width="2.6" stroke-linecap="round" />
      </svg>
    </span>
    <span
      class="text-[17px] font-bold tracking-tight"
      :class="light ? 'text-ink' : 'text-cream'"
    >
      Agro<span class="text-gold">Bench</span>
    </span>
  </a>
</template>
