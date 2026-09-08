<script setup>
import { onMounted } from 'vue'
import ArchitectureSection from './components/ArchitectureSection.vue'
import DataTiers from './components/DataTiers.vue'
import DualAudience from './components/DualAudience.vue'
import HeroSection from './components/HeroSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import LimitationsSection from './components/LimitationsSection.vue'
import MarketSection from './components/MarketSection.vue'
import PanelPreview from './components/PanelPreview.vue'
import ProblemSection from './components/ProblemSection.vue'
import RevenueSection from './components/RevenueSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteNav from './components/SiteNav.vue'
import SolutionBand from './components/SolutionBand.vue'
import StatsBar from './components/StatsBar.vue'
import TrustSection from './components/TrustSection.vue'
import WaitlistSection from './components/WaitlistSection.vue'
import { useReveal } from './composables/useReveal'

useReveal()

onMounted(() => {
  document.documentElement.lang = 'pt-BR'
})
</script>

<template>
  <div class="min-h-screen bg-cream text-ink">
    <SiteNav />
    <main>
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <SolutionBand />
      <HowItWorks />
      <PanelPreview />
      <DataTiers />
      <DualAudience />
      <ArchitectureSection />
      <RevenueSection />
      <TrustSection />
      <MarketSection />
      <WaitlistSection />
      <LimitationsSection />
    </main>
    <SiteFooter />
  </div>
</template>
