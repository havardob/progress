<script>
  import CheckedButton from "../components/CheckedButton.svelte";
  import ActionButton from "../components/ActionButton.svelte";
  import NumberInput from "../components/NumberInput.svelte";
  import data from "../data.json";
  import PageHeader from "../components/PageHeader.svelte";
  import TextInput from "../components/TextInput.svelte";
  import RadioButtonTag from "../components/RadioButtonTag.svelte";
  import RadioButtonGroup from "../components/RadioButtonGroup.svelte";

  console.log(data);

  let dialogIsOpen = false;
  function openDialog() {
    dialogIsOpen = true;
    console.log(dialogIsOpen);
    return dialogIsOpen;
  }

  let exerciseCategories = [
    { id: "1", label: "Arms", value: "arms" },
    { id: "2", label: "Chest", value: "chest" },
    { id: "3", label: "Back", value: "back" },
    { id: "4", label: "Chest", value: "chest" },
    { id: "5", label: "Shoulder", value: "shoulder" },
    { id: "6", label: "Abs", value: "abs" },
    { id: "8", label: "Legs", value: "legs" },
    { id: "7", label: "Full body", value: "fullBody" },
  ];
</script>

<div class="app">
  <PageHeader title="Workout #4" subtitle="May 12th, 2024" hasBackButton={true} />
  <div class="l-constraint">
    <div class="list">
      <h2 class="list__heading">Arms</h2>
      <ul class="list__items">
        <li class="list__item">
          <CheckedButton
            title={data.exercises[0].name}
            data="16x12kg • 16x12kg"
            onClick={openDialog}
          />
        </li>
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
    <ActionButton>
      <span>Complete exercise</span>
      <span class="action-btn__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          ><path
            d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
          ></path></svg
        >
      </span>
    </ActionButton>
    <br />
    <TextInput
      label="Exercise name"
      description="Name your exercise, whatever you like"
      placeholder="E.g. Dumbell Curls"
    />
    <br />

    <RadioButtonGroup legend="Category" options={exerciseCategories} />
  </div>
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
