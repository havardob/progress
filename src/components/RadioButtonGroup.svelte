<script>
  export let legend;
  export let options;
  export let description;
  export let selected = options[0].value;
  function onChange(event) {
    selected = event.currentTarget.value;
  }
</script>

<fieldset>
  <legend>{legend}</legend>
  <span class="description">{description}</span>
  <div class="options">
    {#each options as option}
      <label for={option.id} class={selected === option.value && "is-checked"}>
        <input
          type="radio"
          id={option.id}
          bind:group={selected}
          value={option.value}
          on:change={onChange}
        />
        <span class="dot"></span>
        <span class="label">{option.name}</span>
      </label>
    {/each}
  </div>
</fieldset>

<style>
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0;
    border: 0;
  }

  legend {
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.125;
    margin-bottom: 0.25rem;
  }

  .description {
    color: #565656;
    font-size: 0.875rem;
  }

  .options {
    margin-top: .25rem;
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
  }
  label {
    display: inline-flex;
    background-color: #fff;
    border: 0.0625rem solid #ccc;
    border-radius: 0.375rem;
    padding: 0.625rem .5rem;
    align-items: center;
    line-height: 1;
    gap: 0.25rem;
    font-size: 0.875rem;
    user-select: none;
    cursor: pointer;
  }

  .dot {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: .0625rem solid #CCC;
    background-color: #FFF;
  }

  .dot:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
    background-color: #FFF;
    position: relative;
  }

  label.is-checked {
    border-color: #ff6243;
  }

  label.is-checked .dot {
    border-color: #ff6243;
  }

  label.is-checked .dot:after {
    background-color: #ff6243;
  }

  input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
