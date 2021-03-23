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
          <div class="dashboard__order-details__circle">
            <pie-chart />
          </div>
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
        <div class="dashboard__report-header">
          <h6 class="dashboard__trending-header">Total gifts sent this year</h6>
           <base-button title="Download report"></base-button>
        </div>
        <bar-chart />
      </article>
    </section>
  </div>
</template>
<script>
export default {
  components: {
    'base-button': () => import('@/components/base-button'),
    'bar-chart': () => import('@/components/bar-chart'),
    'pie-chart': () => import('@/components/pie-chart')
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  padding-bottom: 4rem;
  @include screen(custom, max, 576) {
    padding: 2rem;
  }
  &__welcome {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: $primary-color;
    @include screen(menner) {
      margin-bottom: 4rem;
      font-size: 4rem;
    }
  }
  &__content {
    width: 100%;
  }
  &__order {
    width: 100%;
    @include screen(medder) {
      display: flex;
      justify-content: space-between;
    }
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
        @include screen(large) {
          padding-left: 2rem;
        }
        h6 {
          margin-bottom: 2.5rem;
        }
        div {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          @include screen(medder) {
            align-items: flex-start;
          }
        }
      }
      &__circle {
        width: 45%;
        display: flex;
        align-items: center;
      }
      &__current {
        @include screen(large) {
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
        font-size: 1.8rem;
        @include screen(large) {
          margin-right: 2rem;
          font-weight: 700;
          font-size: 3rem;
        }
      }
    }
    &-details:nth-child(1) {
      @include screen(medder) {
        width: 51%;
        margin-right: 1.5rem;
      }
    }
    &-details:nth-child(2) {
      @include screen(medder) {
        width: 49%;
        margin-left: 1.5rem;
      }
    }
  }
  &__trending {
    &-images {
      display: flex;
      width: 70%;
      @include screen(menner) {
        width: 80%;
      }
      @include screen(custom, max, 1441px) {
        justify-content: space-between;
      }
    }
    &-header {
      + div {
        display: flex;
        align-items: center;
        button {
          @include screen(menner) {
            width: 18%;
          }
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
  &__report {
    min-height: 50vh;
    &-header{
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
  }
}
h6 {
  margin-bottom: 2.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  @include screen(large) {
    font-weight: 800;
    font-size: 1.8rem;
  }
}
article {
  margin-top: 2.5rem;
  padding: 2rem 1rem;
  border: 1px solid #c4c4c4;
  @include screen(menner) {
    padding: 3rem 2rem;
  }
}
</style>
