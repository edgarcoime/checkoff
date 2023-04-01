<script lang="ts">
  export let title: string;
</script>

<main class="h-screen flex">
  <div class="lg:m-auto lg:max-w-screen-sm shadow-lg w-full bg-white rounded-xl">
    <!-- DO NOT TOUCH MARGIN DIV BELLOW -->
    <div class="shadow h-full px-10 py-14 rounded-xl"> 
      <h1 class="mb-8 font-semibold text-4xl lg:text-5xl text-center">{title}</h1>

      <slot />

    </div>
  </div>
</main>