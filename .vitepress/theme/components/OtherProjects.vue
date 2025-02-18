<!-- .vitepress/theme/components/OtherProjects.vue -->
<template>
  <div class="other-projects">
    <h2 class="title">Our Other Open Source Projects</h2>
    <div class="container">
      <a class="project" href="https://www.munal.antarikchya.org.np/" target="_blank" rel="noopener">
        <article class="box">
          <div class="icon">
            <img src="/public/munal.png" alt="Icon" width="184" height="150">
          </div>
          <h2 class="title">MUNAL Nano-Satellite</h2>
          <p class="details">Nepal’s First High-School Nano-satellite, in-house fabricated by training 9 high-school students </p>
        </article>
      </a>

      <a class="project" href="https://www.s2s.antarikchya.org.np/" target="_blank" rel="noopener">
        <article class="box">
          <div class="icon">
            <img src="/public/s2s.png" alt="Icon" width="200" height="150">
          </div>
          <h2 class="title">Slippers2Sat Nanosatellite</h2>
          <p class="details">Nepal’s First Middle-School Nano-satellite, in-house fabricated by training 10 middle-school students from marginalized Chepang community
</p>
        </article>
      </a>

      <a class="project" href="https://www.antarikchya.org.np/" target="_blank" rel="noopener">
        <article class="box">
           <div class="icon">
            <img src="/public/sdap.png" alt="Icon" width="300" height="150">
          </div>
          <h2 class="title">Satellite Data Analytics Project</h2>
          <p class="details"> An AI enabled, space-derived innovative technology intiative addressing urban challenges</p>
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

.other-projects > .title {
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