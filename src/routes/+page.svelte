<script>
  import CheckedButton from "../components/CheckedButton.svelte";
  import ActionButton from "../components/ActionButton.svelte";
  import NumberInput from "../components/NumberInput.svelte";
  import data from "../data.json";
  import PageHeader from "../components/PageHeader.svelte";

  console.log(data);


</script>

  <PageHeader title="Workout #4" subtitle="May 12th, 2024" hasBackButton={true} />
  <div class="l-constraint">
    <div class="list">
      <h2 class="list__heading">Arms</h2>
      <ul class="list__items">
        {#each data.exercises as exercise}
        <li class="list__item">
          <CheckedButton
            title={exercise.name}
            data={data.categories.find(item => item.id === exercise.category).name}
            checked={exercise.completed}
          />
        </li>
        {/each}
      </ul>
    </div>
    <div class="action-btn-group">
      <ActionButton type="secondary" onClick={() => alert("Create new")}>
        <span>New exercise</span>
        <span class="action-btn__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            ><path
              d="M4 1V4H1V6H4V9H6V6H9V4H6V1H4ZM3 20.0066V11H5V19H13V14C13 13.45 13.45 13 14 13L19 12.999V5H11V3H20.0066C20.5552 3 21 3.45576 21 4.00247V15L15 20.996L4.00221 21C3.4487 21 3 20.5551 3 20.0066ZM18.171 14.999L15 15V18.169L18.171 14.999Z"
            ></path>
          </svg>
        </span>
      </ActionButton>
      <ActionButton onClick={() => alert("Add existing excersise")}>
        <span>Add exercise</span>
        <span class="action-btn__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            ><path
              d="M2 18H12V20H2V18ZM2 11H22V13H2V11ZM2 4H22V6H2V4ZM18 18V15H20V18H23V20H20V23H18V20H15V18H18Z"
            ></path>
          </svg>
        </span>
      </ActionButton>
    </div>
    <br />
    <div class="inputs">
      <NumberInput id="reps1" step={"1"} placeholder={"10"} />
      <NumberInput id="kilos1" step={"0.5"} placeholder={"12.5"} />
    </div>
    <br />
    <br />
</div>
<dialog class="dialog">
  <div class="modal">
    <button class="modal__close-btn"></button>
    <h2 class="modal__heading">Hammer curls</h2>
    <span class="stats__title">Previous workouts</span>
    <div class="stats">
      <div class="stats__row">
        <div class="stats__cell">3w ago</div>
        <div class="stats__cell">9 x 15.0</div>
        <div class="stats__cell">9 x 15.0</div>
        <div class="stats__cell">9 x 15.0</div>
        <div class="stats__cell">9 x 15.0</div>
      </div>
      <div class="stats__row">
        <div class="stats__cell">2w ago</div>
        <div class="stats__cell">10 x 15.0</div>
        <div class="stats__cell">10 x 15.0</div>
        <div class="stats__cell">10 x 15.0</div>
        <div class="stats__cell">10 x 15.0</div>
      </div>
      <div class="stats__row">
        <div class="stats__cell">6d ago</div>
        <div class="stats__cell">11 x 15.0</div>
        <div class="stats__cell">11 x 15.0</div>
        <div class="stats__cell">11 x 15.0</div>
        <div class="stats__cell">12 x 12.5</div>
      </div>
    </div>
    <div class="label-grid">
      <label for="">Reps</label>
      <label for="">Kilos</label>
    </div>
    <div class="inputs">
      <NumberInput step={1} placeholder={10.0} />
      <NumberInput step={1} placeholder={10.0} />
    </div>
    <button class="action-btn">Complete exercise</button>
  </div>
</dialog>

<style>
  .action-btn__icon {
    width: 1.25em;
    height: 1.25em;
  }
</style>
