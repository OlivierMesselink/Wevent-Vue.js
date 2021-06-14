<template>
  <section>
    <button :class="buttonStyle">
      <slot></slot>
    </button>
  </section>
</template>

<script>
export default {
  props: ["buttonStyle"],
};
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

.hollow:hover {
  background-color: var(--orange);
  color: white;
  transform: scale(1.05);
}

.confirm {
  display: inline-block;
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: crimson 3px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 12px 20px;
  background-color: crimson;
  color: white;
}

.confirm:hover {
  transform: scale(1.05);
}

.confirmAlt {
  display: inline-block;
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: var(--grey) 3px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 12px 20px;
  background-color: transparent;
  color: var(--grey);
}

.confirmAlt:hover {
  transform: scale(1.05);
}

.confirmHollow {
  display: inline-block;
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: crimson 3px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 12px 20px;
  background-color: transparent;
  color: crimson;
}

.confirmHollow:hover {
  color: white;
  background-color: crimson;
}

.pim {
  display: inline-block;
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: var(--orange) 3px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 14px 55px;
  background-color: var(--orange);
  color: white;
}

.disabled {
  display: inline-block;
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: #FE9462 3px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 14px 55px;
  background-color: #FE9462;
  color: white;
  opacity: 60%;
}
</style>
