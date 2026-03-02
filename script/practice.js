box = document.querySelector('.box')

size = 50;

int = setInterval(growing, 30)
direction = "bigger"

int = setInterval(animation, 30)

function animation() {
    size++;
    if (size <= 50) {
        direction = "bigger"
    }
    if (size >= 100) {
        direction = "smaller";
    }

    if (direction = "smaller") {
        size--;
    } else {
        size++;
    }
    box.style.width = `${size}`;
    box.style.height = `${size}`;
}
