<template>
  <div class="dashboard">
    <h3 class="dashboard__welcome">Welcome to Gemnote, Ashley!</h3>
    <section class="dashboard__content">
      <div class="dashboard__order">
        <article class="dashboard__order-details">
          <div class="dashboard__order-details__total">
            <h6>Total number of orders this month</h6>
            <h4>2,736</h4>
          </div>
          <div class="dashboard__order-details__average">
            <h6>Average number of shipments/month</h6>
            <div>
              <h4>364</h4>
              <base-button title="View orders"></base-button>
            </div>
          </div>
        </article>
        <article class="dashboard__order-details">
          <div class="dashboard__order-details__circle"></div>
          <div class="dashboard__order-details__current">
            <h6>Current Inventory</h6>
            <div>
              <h4>400</h4>
              <base-button title="Manage inventory"></base-button>
            </div>
          </div>
        </article>
      </div>
      <article class="dashboard__trending">
        <h6 class="dashboard__trending-header">Trending gifts in your store</h6>
        <div>
          <div class="dashboard__trending-images">
            <figure>
              <img
                class="jacket"
                :src="require('@/assets/shirt.png')"
                alt="jackets in your store"
              />
            </figure>
            <figure>
              <img
                class="bag"
                :src="require('@/assets/bag.png')"
                alt="bag in your store"
              />
            </figure>
            <figure>
              <img
                class="collection"
                :src="require('@/assets/collection.png')"
                alt="item pack in your store"
              />
            </figure>
            <figure>
              <img
                class="bottle"
                :src="require('@/assets/water-bottle.png')"
                alt="bottles in your store"
              />
            </figure>
          </div>
          <base-button title="Send a gift"></base-button>
        </div>
      </article>
      <article class="dashboard__report">
        <chart/>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  components: {
    'base-button': () => import('@/components/base-button'),
    chart: () => import('@/components/chart')
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &__welcome {
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 4rem;
    color: $primary-color;
  }
  &__content {
    width: 100%;
  }
  &__order {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &-details {
      width: 100%;
      display: flex;
      justify-content: space-between;
      @include screen(larger) {
        justify-content: space-around;
      }
      &__total {
        width: 42%;
        padding-right: 0.5rem;
        border-right: 1px solid #c4c4c4;
        @include screen(larger) {
          padding-left: 1rem;
          width: 45%;
        }
        h6 {
          margin-bottom: 2.5rem;
        }
      }
      &__average {
        width: 55%;
        padding-left: 0.5rem;
        @include screen(larger) {
          padding-left: 2rem;
        }
        h6 {
          margin-bottom: 2.5rem;
        }
        div {
          display: flex;
          align-items: flex-start;
        }
      }
      &__circle {
        width: 10rem;
        height: 10rem;
        border-radius: 100%;
        border: 1rem solid $secondary-color;
        @include screen(larger) {
          width: 15vh;
          height: 15vh;
        }
      }
      &__current {
        @include screen(larger) {
          display: inline-grid;
          display: -ms-inline-grid;
          display: -moz-inline-grid;
        }
        h6 {
          margin-bottom: 3rem;
        }
        div {
          display: flex;
        }
      }
      h4 {
        margin-right: 2rem;
        font-weight: 700;
        font-size: 3rem;
      }
    }
    &-details:nth-child(1) {
      width: 51%;
      margin-right: 1.5rem;
    }
    &-details:nth-child(2) {
      width: 49%;
      margin-left: 1.5rem;
    }
  }
  &__trending {
    &-images {
      width: 80%;
      display: flex;
      @include screen (custom, max, 1441px ){
         justify-content: space-between;
      }
    }
    &-header {
      +div {
        display: flex;
        align-items: center;
        button{
          width: 18%;
        }
      }
    }

    figure {
      max-width: 22%;
    }
    img {
      height: 80%;
      object-fit: contain;
      width: 100%;
    }
  }
}
h6 {
  margin-bottom: 2.5rem;
  font-weight: 800;
  font-size: 1.8rem;
}
article {
  margin-top: 2.5rem;
  padding: 3rem 2rem;
  border: 1px solid #c4c4c4;
}
</style>
