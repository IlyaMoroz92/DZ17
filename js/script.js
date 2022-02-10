  const button = document.querySelector(".button");
  const stepBtn = document.querySelector(".button-step");
  const input = document.querySelector(".input");
  const result = document.querySelector(".result");
  const stepResult = document.querySelector(".result-step");

  let factorial = 1;
  let stepFactorial = 1;
  let what = stepGenerator();

  function generator() {
    let num = input.value;
    for (i = 1; i <= num; i++) {
      factorial = factorial * i;
      result.innerHTML = factorial;
      button.style.display = "none";
    }
  }

  function* stepGenerator(i = 1) {
    while (i <= input.value) {
      stepFactorial = stepFactorial * i;
      stepResult.innerHTML = stepFactorial;
      yield i;
      i++;
    }
  }

  button.addEventListener("click", generator);

  stepBtn.addEventListener("click", function () {
    what.next();
  });