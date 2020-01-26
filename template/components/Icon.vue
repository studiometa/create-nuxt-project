<template>
  <component :is="name" class="icon" />
</template>

<script>
  import components from '~/utils/get-icons';

  export default {
    components,
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
</script>
