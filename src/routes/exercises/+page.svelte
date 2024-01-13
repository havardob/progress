<script>
  import TextInput from "../../components/TextInput.svelte";
  import RadioButtonGroup from "../../components/RadioButtonGroup.svelte";
  import ActionButton from "../../components/ActionButton.svelte";

  let exerciseCategories = [
    { id: "1", name: "Arms", value: "arms" },
    { id: "2", name: "Chest", value: "chest" },
    { id: "3", name: "Back", value: "back" },
    { id: "4", name: "Legs", value: "legs" },
    { id: "5", name: "Shoulders", value: "shoulders" },
    { id: "6", name: "Abs", value: "abs" },
    { id: "7", name: "Full body", value: "fullBody" },
  ];

  let name = "";
  let category = "arms";
  let exercises = [];
  function saveExercise() {
    if (name) {
      exercises.push({
        id: Date.now(),
        name: name,
        category: category,
      });
      exercises = exercises;
      name = "";
      category = "arms";
      console.log(exercises);
    } else {
      alert("Please give it a name");
    }
  }
</script>

<div class="l-constraint">
  <TextInput
    label="Exercise name"
    description="Name your exercise, whatever you like"
    placeholder="E.g. Dumbell Curls"
    bind:value={name}
  />
  <br />

  <RadioButtonGroup
    legend="Category"
    description="Chose what category the exercise belongs to, making it easier to find later."
    options={exerciseCategories}
    bind:selected={category}
  />
  <br />
  <ActionButton onClick={saveExercise}>
    <span>Create exercise</span>
  </ActionButton>

  <ul>
    {#each exercises as exercise}
      <li>
        Id: {exercise.id}, Name: {exercise.name}, Category: {exercise.category}
      </li>
    {/each}
  </ul>
</div>
