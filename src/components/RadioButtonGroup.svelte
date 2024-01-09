<script>
    export let legend = "";
    export let options = "";
</script>

<fieldset>
    <legend>{legend}</legend>
    {#each options as option}
        <div>
            <input type="radio" bind:group={options} name={option.name} id={option.id} />
            <label for="">{option.label}</label>
        </div>
    {/each}
</fieldset>