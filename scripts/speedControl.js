export function SpeedControl(initialSpeed = 2000) {
    let speed = initialSpeed;

    return {
        getSpeed: () => speed,
        increaseSpeed: () => speed += 1000,
        decreaseSpeed: () => speed = Math.max(1000, speed - 1000)
    };
}
