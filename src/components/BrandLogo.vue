<script setup>
defineProps({
  light: { type: Boolean, default: false },
})

const iconSrc = `${import.meta.env.BASE_URL}apple-touch-icon.png`
</script>

<template>
  <a href="#topo" class="group flex items-center gap-2.5" aria-label="AgroBench, início">
    <img
      :src="iconSrc"
      alt=""
      width="36"
      height="36"
      class="h-9 w-9 rounded-xl object-cover"
      :class="light ? 'border border-stone' : 'border border-white/10'"
    />
    <span
      class="text-[17px] font-bold tracking-tight"
      :class="light ? 'text-ink' : 'text-cream'"
    >
      Agro<span class="text-gold">Bench</span>
    </span>
  </a>
</template>
