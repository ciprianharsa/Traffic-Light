function initializeTrafficLight() {
    const trafficLightButton = document.getElementById("traffic-light");

    const colors = [
        { className: "btn-danger" },
        { className: "btn-warning" },
        { className: "btn-success" }
    ];

    let currentColorIndex = 0;
    let timerId;

    function changeColor() {
        currentColorIndex =
            (currentColorIndex + 1) % colors.length;

        trafficLightButton.classList.remove(
            "btn-danger",
            "btn-warning",
            "btn-success"
        );

        trafficLightButton.classList.add(
            colors[currentColorIndex].className
        );

        restartTimer();
    }

    function restartTimer() {
        clearTimeout(timerId);

        timerId = setTimeout(changeColor, 10000);
    }

    trafficLightButton.addEventListener("click", changeColor);

    restartTimer();
}

initializeTrafficLight();
