<template>
  <footer class="footer">
    <section class="footer__section">
      <h2 class="footer__caption visually-hidden">Contacts</h2>
      <a class="footer__link" href="#">Github</a>
    </section>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
}
</script>

<style lang="scss">
.footer {
  @include container;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: $space-l;
}

.footer__section {
  @include container;

  flex-grow: 1;

  background-color: $var-color-amethyst-smoke;
}

.footer__link {
  @include caption-h3;

  display: block;

  color: $var-color-default;
  text-align: center;
  text-decoration: none;
}
</style>
