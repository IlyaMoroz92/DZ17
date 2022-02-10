const button = document.querySelector(".button");
  const input = document.querySelector(".input");
  const result = document.querySelector(".result");

  let factorial = 1;

  function* generator() {
    let num = input.value;
    for (i = 1; i <= num; i++) {
      factorial = factorial * i;
      console.log(i);
      result.innerHTML = factorial;
    }
  }

  button.addEventListener("click", function () {
    let gen = generator(input.value);
    gen.next();
  });
