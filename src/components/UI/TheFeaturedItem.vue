<template>
  <section>
    <div
      id="contentWrapper"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :style="{ backgroundImage: 'url(' + item.imageLink + ')' }"
    >
      <div id="gradient"></div>
      <transition name="icons">
        <div v-if="hover" id="icons">
          <fa v-if="item.category.bar" class="ico" icon="beer"></fa>
          <fa v-if="item.category.lunch" class="ico" icon="coffee"></fa>
          <fa v-if="item.category.restaurant" class="ico" icon="utensils"></fa>
          <fa v-if="item.category.hotel" class="ico" icon="bed"></fa>
          <fa v-if="item.category.movie" class="ico" icon="film"></fa>
        </div>
      </transition>
      <transition name="rating">
        <div v-if="hover" id="rating">
          <fa v-if="item.rating >= 1" class="ratingIco" icon="star"></fa>
          <fa v-if="item.rating >= 2" class="ratingIco" icon="star"></fa>
          <fa v-if="item.rating >= 3" class="ratingIco" icon="star"></fa>
          <fa v-if="item.rating >= 4" class="ratingIco" icon="star"></fa>
          <fa v-if="item.rating >= 5" class="ratingIco" icon="star"></fa>

          <fa v-if="item.rating <= 1" :icon="['far', 'star']"></fa>
          <fa v-if="item.rating <= 2" :icon="['far', 'star']"></fa>
          <fa v-if="item.rating <= 3" :icon="['far', 'star']"></fa>
          <fa v-if="item.rating <= 4" :icon="['far', 'star']"></fa>
        </div>
      </transition>
      <div id="content">
        <h2>{{ item.title }}</h2>
        <p>{{ item.subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      list: "",
      hover: false,
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1921px) {
  #contentWrapper {
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 420px;
    height: 300px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-size: cover;
    background-blend-mode: multiply;
    color: white;
  }

  #gradient {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 0) 65%
    );
    opacity: 0.7;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }

  #gradient:hover {
    opacity: 0.5;
  }

  #contentWrapper:hover {
    transform: scale(1.05);
  }

  #content {
    padding: 40px;
    position: absolute;
    bottom: 0px;
    color: inherit;
  }

  #icons {
    margin: 40px;
    padding: 12px;
    color: white;
    font-size: 16px;
    position: absolute;
    top: 0px;
    left: 0px;
    /* background-color: #fe9362d3; */
    background-color: var(--orange);
    border-radius: 10px;
  }

  .ico {
    margin: 0 5px;
  }

  #rating {
    padding: 40px;
    color: var(--orange);
    font-size: 16px;
    position: absolute;
    bottom: 0px;
    right: 0px;

    border-radius: 10px;
  }

  h2 {
    color: inherit;
    font-family: "raleway", sans-serif;
    font-weight: 700;
    font-size: 21px;
    margin: 0 0 10px 0;
  }

  p {
    color: inherit;
    opacity: 0.8;
    font-family: "open sans", sans-serif;
    font-weight: 500;
    font-size: 12px;
  }

  .icons-enter-from,
  .icons-leave-to {
    transform: translatey(-30px);
    opacity: 0;
  }

  .icons-enter-to,
  .icons-leave-from {
    transform: translatey(0px);
    opacity: 1;
  }

  .icons-leave-active,
  .rating-leave-active {
    transition: all 0.2s ease-in;
  }

  .icons-enter-active,
  .rating-enter-active {
    transition: all 0.2s ease-out;
  }

  .rating-enter-from,
  .rating-leave-to {
    transform: translatey(30px);
    opacity: 0;
  }
}
@media only screen and (max-width: 1920px) {
  #contentWrapper {
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 300px;
    height: 240px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-size: cover;
    background-blend-mode: multiply;
    color: white;
  }

  #gradient {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 0) 65%
    );
    opacity: 0.7;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }

  #gradient:hover {
    opacity: 0.5;
  }

  #contentWrapper:hover {
    transform: scale(1.05);
  }

  #content {
    padding: 40px;
    position: absolute;
    bottom: 0px;
    color: inherit;
  }

  #icons {
    margin: 40px;
    padding: 12px;
    color: white;
    font-size: 16px;
    position: absolute;
    top: 0px;
    left: 0px;
    /* background-color: #fe9362d3; */
    background-color: var(--orange);
    border-radius: 10px;
  }

  .ico {
    margin: 0 5px;
  }

  #rating {
    padding: 40px;
    color: var(--orange);
    font-size: 16px;
    position: absolute;
    top: 15px;
    right: 0px;

    border-radius: 10px;
  }

  h2 {
    color: inherit;
    font-family: "raleway", sans-serif;
    font-weight: 700;
    font-size: 21px;
    margin: 0 0 10px 0;
  }

  p {
    color: inherit;
    opacity: 0.8;
    font-family: "open sans", sans-serif;
    font-weight: 500;
    font-size: 12px;
  }

  .icons-enter-from,
  .icons-leave-to {
    transform: translatey(-30px);
    opacity: 0;
  }

  .icons-enter-to,
  .icons-leave-from {
    transform: translatey(0px);
    opacity: 1;
  }

  .icons-leave-active,
  .rating-leave-active {
    transition: all 0.2s ease-in;
  }

  .icons-enter-active,
  .rating-enter-active {
    transition: all 0.2s ease-out;
  }

  .rating-enter-from,
  .rating-leave-to {
    transform: translatey(-30px);
    opacity: 0;
  }
}
</style>