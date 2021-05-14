<template>
  <section>
    <button :class="buttonStyle">
      <slot></slot>
    </button>
  </section>
</template>

<script>
export default {
    props:['buttonStyle']
}
</script>

<style scoped>
button {
  display: inline-block;
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: var(--orange) 3px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 12px 20px;
}

.solid {
  background-color: var(--orange);

  color: white;
}

.solid:hover {
  transform: scale(1.05);
}

.hollow {
  background-color: transparent;
  color: var(--orange);
}

.hollow:hover{
    background-color: var(--orange);
    color: white;
    transform: scale(1.05);
}

</style>