(function () {
  const $rullet = document.getElementById("rullet");
  const $spinBtn = document.getElementById("spin");
  const $arrow = document.getElementById("arrow");

  const turn = () => {
    const min = 5;
    const max = 8;
    const turns = Math.random() * (max - min) + min;
    const duration = 1000 * turns;

    const spinnerAnimation = $rullet.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: `rotate(${turns * 360}deg)` },
      ],
      {
        duration: duration,
        easing: "ease-in-out",
        iterations: 1,
        delay: 0,
        fill: "forwards",
      }
    );

    // spinnerAnimation.addEventListener("start", function () {
    //   $arrow.classList.add("arrowanimation");
    // });
    spinnerAnimation.addEventListener("finish", function () {
      // $arrow.classList.remove("arrowanimation");
    });
  };

  $spinBtn.addEventListener("click", turn);
})();
