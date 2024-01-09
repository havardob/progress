<script>
  export let hasBackButton = false;
  export let title = "";
  export let subtitle = "";
</script>

<header class="page-header">
  <div class="l-constraint">
    {#if hasBackButton}
      <button class="page-header__back-btn">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Back</span>
      </button>
    {/if}
    <div class="page-header__content">
      <h2 class="page-header__title">{title}</h2>
      <span class="page-header__subtitle">{subtitle}</span>
    </div>
  </div>
</header>

<style>
  .page-header {
    margin-bottom: 1rem;
  }

  .page-header__back-btn {
    border: 0.0625rem solid #ccc;
    background-image: linear-gradient(to bottom, #fff, #eee);
    border-radius: 0.375rem;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  .page-header__content {
    display: flex;
    flex-direction: column;
  }

  .page-header__title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.25;
  }

  .page-header__subtitle {
    color: #565656;
    font-size: 0.875rem;
  }
</style>
