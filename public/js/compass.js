function onClick() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then((state) => {
                if (state === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation);
                } else {
                    alert("permission denied")
                }
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        window.addEventListener('deviceorientation', handleOrientation);
    }
}

function handleOrientation(event) {
    const circle = document.getElementById('circle');

    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    const x = document.getElementById('x');
    const y = document.getElementById('y');
    const z = document.getElementById('z');

    x.innerHTML = Math.floor(alpha * 100) / 100;
    y.innerHTML = Math.floor(beta * 100) / 100;
    z.innerHTML = Math.floor(gamma * 100) / 100;

    circle.style.transform = `rotate(${alpha}deg)`
}

const permissionsBtn = document.getElementById('permissionsBtn');
permissionsBtn.addEventListener("click", onClick);