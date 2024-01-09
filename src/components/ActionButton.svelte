<script>
  export let type = "";
  export let onClick;
</script>

<button class="action-btn action-btn--{type}" on:click={onClick}>
  <slot />
</button>

<style>
  .action-btn {
    width: 100%;
    padding-block: 0.625rem;
    border: 0;
    background-image: linear-gradient(to bottom, #ff734e 10%, #ff6243 30%, #ff6243);
    border-radius: 0.375rem;
    color: #fff;
    border: 0.0625rem solid #d64f35;
    font-weight: 500;
    line-height: 1;
    text-shadow: 0 0 0.0625rem #000;
    padding-inline: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
  
  .action-btn:active {
    background-image: linear-gradient(to bottom,#ff6243  30%, #ff734e);
  }

  .action-btn--secondary {
    border: 0.0625rem solid #ccc;
    background-image: linear-gradient(to bottom, #fff, #eee);
    color: #333;
    text-shadow: none;
  }

  .action-btn--secondary:active {
    background-image: linear-gradient(to bottom, #eee, #fff);
  }
</style>
