<script>
    export let label;
    export let id;
    export let isChecked = false;
</script>

    <div class:checked={isChecked}>
        <input type="radio" {id} class="u-hidden" />
        <span class="dot"></span>
        <label for={id}>{label}</label>
    </div>

<style>
    div {
        display: flex;
        align-items: center;
        gap: .25rem;
        border: .0625rem solid #CCC;
        padding: .5rem;
        border-radius: .375rem;
        background-color: #FFF;
    }

    .checked {
        border-color: #ff6243;
    }

    .checked .dot {
        border-color: #ff6243;
        box-shadow: inset 0 0 0 .25rem #FFF;
        background-color: #ff6243;
    }

    .dot {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        height: 1.5rem;
        border: 0.0625rem solid #CCC;
        border-radius: 50%;
    }
</style>