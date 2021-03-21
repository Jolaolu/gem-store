<template>
  <div class="dashboard">
    <h3 class="dashboard__welcome">Welcome to Gemnote, Ashley!</h3>
    <section class="dashboard__content">
      <div class="dashboard__ content-orders">
        <article>
          <div>
            <p>Total number of ordersthis month</p>
            <h4>2,736</h4>
          </div>
          <div>
            <p>Average number of shipments/month</p>
            <h4>2,736</h4>
            <button type="buttom">View orders</button>
          </div>
        </article>
        <article>
          <div></div>
          <div>
            <h6>Current Inventory</h6>
            <h4>400</h4>
            <button type="buttom">Manage inventory</button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
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
    &-orders {
      display: flex;
      justify-content: space-between;
      width: 100%;
      article {
        width: 45%;
      }
    }
  }
}
article {
  border: 1px solid #c4c4c4;
}
</style>
