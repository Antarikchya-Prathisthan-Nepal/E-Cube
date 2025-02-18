<!-- .vitepress/theme/components/OtherProjects.vue -->
<template>
  <div class="expboards">
    <h2 class="title">Expansion Boards Coming Soon</h2>
    <div class="container">
      <a class="project" href="" target="_blank" rel="noopener">
        <article class="box">
          <div class="icon">
            <img src="/public/expboard1.png" alt="Icon" height="150">
          </div>
          <h2 class="title">Air Quality and Composition Payload</h2>
          <p class="details">Features Sensiron SPS30 PM1.0 and Alphasense AFE gas sensors for air quality, composition and HVAC applications</p>
        </article>
      </a>

      <a class="project" href="" target="_blank" rel="noopener">
        <article class="box">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <h2 class="title">Amateur Radio Payload</h2>
          <p class="details">Feaures Radio Frequency Components for Amateur Radio Bands and Morse Code transmissions
</p>
        </article>
      </a>

      <a class="project" href="" target="_blank" rel="noopener">
        <article class="box">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <h2 class="title">Coming Soon</h2>
          <p class="details"></p>
        </article>
      </a>
    </div>
  </div>
</template>

<style scoped>
.other-projects {
  padding: 0 24px;
  margin: 0 auto;
  max-width: 1152px;
}

.expboards > .title {
  text-align: center;
  font-size: 2.2em;
  font-weight: 600;
  margin-bottom: 2rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.project {
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.box {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.project:hover .box {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft-up);
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: var(--vp-c-brand);
}

.box .title {
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 24px;
  text-align: center;
}

.details {
  font-size: 0.9em;
  font-weight: 400;
  line-height: 24px;
  color: var(--vp-c-text-2);
  text-align: center;
}

@media (min-width: 640px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 639px) {
  .other-projects {
    padding: 0 16px;
  }
}
</style>