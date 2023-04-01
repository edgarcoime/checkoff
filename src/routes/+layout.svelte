<script>
  import "../app.css";
</script>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.700);
  }
</style>

<nav>
	<a href="/">home</a>
	<a href="/account">account</a>
	<a href="/app">app</a>
</nav>

<slot />