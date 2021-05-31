<template>
  <section>
    <fa class="active" v-if="budget >= 1" icon="euro-sign"></fa>
    <fa class="active" v-if="budget >= 2" icon="euro-sign"></fa>
    <fa class="active" v-if="budget >= 3" icon="euro-sign"></fa>
    <fa class="active" v-if="budget >= 4" icon="euro-sign"></fa>
    <fa class="active" v-if="budget == 5" icon="euro-sign"></fa>

    <fa class="inactive" v-if="budget <= 1" icon="euro-sign"></fa>
    <fa class="inactive" v-if="budget <= 2" icon="euro-sign"></fa>
    <fa class="inactive" v-if="budget <= 3" icon="euro-sign"></fa>
    <fa class="inactive" v-if="budget <= 4" icon="euro-sign"></fa>
  </section>
</template>

<script>
/* This is just a little component using budget 
prop as input to display budget in euro-signs */

export default {
  props: ["budget"],
};
</script>

<style scoped>
section {
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.active {
  font-size: 15px;
  color: var(--orange);
  transition: all 800ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
}

.inactive {
  font-size: 15px;
  color: var(--lightGrey);
  transition: all 800ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
}
</style>