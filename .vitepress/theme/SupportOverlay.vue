// .vitepress/theme/SupportOverlay.vue
<template>
  <button class="support-button" @click="toggleOverlay">Support Us</button>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="overlay-backdrop" @click="toggleOverlay">
        <div class="overlay-content" @click.stop>
          <img 
            src="/supportus.jpg" 
            alt="Support Us"
            class="overlay-image"
          />
          <button class="close-button" @click="toggleOverlay">×</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleOverlay = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.support-button {
--button-bg: #8b5cf6;
--button-hover: #7c3aed;

  background: var(--button-bg);
  color: white;
  border: none;
  padding: 0px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 16px;        /* Base margin for separation */
  margin-right: 8px;        /* Right margin for balance */
  white-space: nowrap;      /* Prevent text wrapping */
  font-size: 14px;          /* Match VitePress nav font size */
  height: 32px;                 /* Fixed height */
  line-height: 32px;            /* Match height for vertical centering */
  display: inline-flex;         /* Use flexbox for alignment */
  align-items: center;  
  justify-content: center;            /* Match VitePress nav height */
  transition: background 0.2s; /* Smooth hover effect */
}

/* Responsive margins for different screen sizes */
@media (min-width: 768px) {
  .support-button {
    margin-left: 20px;
    margin-right: 12px;
  }
}

/* Hover effect */
.support-button:hover {
  background: var(--vp-c-brand-dark);
}

.overlay-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 20px;
}

.overlay-content {
  position: relative;
  background: white;
  border-radius: 8px;
  max-width: 40vw;
  max-height: 100vh;
  display: flex;
  padding: 0;
  overflow: hidden;
}

.overlay-image {
  display: block;
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 2;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>