document.addEventListener("DOMContentLoaded", function () {
  const numberInputs = document.querySelectorAll(".number-input");

  numberInputs.forEach((component) => {
    const buttons = component.querySelectorAll("button");
    const field = component.querySelector("input");
    const step = parseFloat(field.step);

    buttons.forEach((button) => {
      button.addEventListener("pointerdown", function () {
        let currentValue = parseFloat(field.value);
        let newValue;
        if (button.innerText === "+") {
          newValue = parseFloat(parseFloat(field.value) + step);
        }

        if (button.innerText === "−") {
          newValue = parseFloat(parseFloat(field.value) - step);
        }

        if (step % 1 !== 0) {
          newValue = newValue.toFixed(1);
        }

        field.value = newValue;
      });
    });
  });

  const workouts = document.querySelectorAll(".workout");
  const modal = document.querySelector("dialog");
  const modalCloseButton = modal.querySelector(".modal__close-btn");

  workouts.forEach((workout) => {
    workout.addEventListener("click", function() {
      modal.showModal();
    })
  })

  modalCloseButton.addEventListener("click", function() {
    modal.close();
  })
});
