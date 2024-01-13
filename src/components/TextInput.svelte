<script>
    export let id = "";
    export let label = "";
    export let description = "";
    export let value = "";
    export let placeholder = "";

    function onChange(e) {
        value = e.currentTarget.value;
    }
</script>

<div class="text-input">
    <label for="">{label}</label>
    <span class="description">{description}</span>
    <input type="text" {id} bind:value={value} {placeholder} on:change={onChange} />
</div>

<style>

    .text-input {
        display: flex;
        flex-direction: column;
        gap: .25rem;
    }
    label {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.125;
    }

    .description {
        color: #565656;
        font-size: .875rem;
    }

    input {
        border-radius: .375rem;
        border: 0.0625rem solid #CCC;
        padding: .75rem .75rem;
        font-size: .875rem;
    }

    input::placeholder {
        color: #BABABA;
    }
</style>