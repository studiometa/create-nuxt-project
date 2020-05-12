<template>
  <div class="flex items-center justify-center w-full h-screen text-center">
    <div>
      <logo class="m-auto" />
      <h1 class="mt-4">
        Hello world!
      </h1>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo';

  export default {
    components: {
      Logo,
    },
  };
</script>
