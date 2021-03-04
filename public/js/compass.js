function onClick() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then((state) => {
                if (state === 'granted') {
                    window.addEventListener('devicemotion', handleOrientation);
                } else {
                    alert("permission denied")
                }
            })
            .catch(err => {
                console.log(err);
            });
    } else {
        window.addEventListener('devicemotion', handleOrientation);
    }
}


function handleOrientation(event) {
    console.log(event.accelerationIncludingGravity.x)
    const alpha = event.accelerationIncludingGravity.x;
    const beta = event.accelerationIncludingGravity.y;
    const gamma = event.accelerationIncludingGravity.z;

    const x = document.getElementById('x');
    const y = document.getElementById('y');
    const z = document.getElementById('z');

    x.innerHTML = alpha;
    y.innerHTML = beta;
    z.innerHTML = gamma;
}

const permissionsBtn = document.getElementById('permissionsBtn');
permissionsBtn.addEventListener("click", onClick);