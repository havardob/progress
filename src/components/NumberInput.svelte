<script>
  export let step = "1.0";
  export let placeholder = "10.0";
  export let id = "";

  let newValue;
  function increase(value) {
    if (!value) {
        value = placeholder;
    }
    newValue = parseFloat(value) + parseFloat(step);
    newValue = fixDecimals(newValue, step);
    return newValue;
  }

  function decrease(value) {
    if (!value) {
        value = placeholder;
    }
    newValue = parseFloat(value) - parseFloat(step);
    newValue = fixDecimals(newValue, step);
    return newValue;
  }

  function fixDecimals(valueToFix, step) {
    if (step % 1 !== 0) {
				valueToFix = valueToFix.toFixed(1);
		}

    return valueToFix;
  }
</script>

<div class="number-input">
  <button class="number-input__button" on:click={decrease(newValue)}>−</button>
  <input {id} type="text" {placeholder} {step} inputmode="numeric" bind:value={newValue} />
  <button class="number-input__button" on:click={increase(newValue)}>+</button>
</div>

<style>
  .number-input {
    display: flex;
    align-items: center;
    font-size: 1em;
  }

  .number-input__button {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    border: 0;
    background-image: linear-gradient(
      to bottom,
      #fff,
      #eee
    );
    border-radius: 0.375rem 0 0 0.375rem;
    border: 0.0625rem solid #ccc;
    color: #333;
    font-weight: 700;
    font-size: 1.5rem;
    text-shadow: 0 0 0.0625rem #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }

  .number-input__button:active {
    background-image: linear-gradient(
      to bottom,
      #eee,
      #fff
    );
  }

  .number-input__button:last-child {
    border-radius: 0 0.375rem 0.375rem 0;
  }

  input {
    width: 100%;
    height: 2.5rem;
    border: 0;
    border-top: 0.0625rem solid #ccc;
    border-bottom: 0.0625rem solid #ccc;
    text-align: center;
    font-family: "Jetbrains Mono", monospace;
    font-size: 1.125rem;
  }

  input::placeholder {
    font-weight: 300;
    color: #BABABA;
  }


</style>
