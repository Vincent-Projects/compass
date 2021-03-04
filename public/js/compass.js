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
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    const x = document.getElementById('x');
    const y = document.getElementById('y');
    const z = document.getElementById('z');

    x.innerHTML = alpha;
    y.innerHTML = beta;
    z.innerHTML = gamma;
}

const permissionsBtn = document.getElementById('permissionsBtn');
permissionsBtn.addEventListener("click", onClick);