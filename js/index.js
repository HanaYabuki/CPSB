function shuffle(arr) {
    let len = arr.length
    while (len > 0) {
        const rand = Math.floor(Math.random() * len)
        len -= 1

        const tmp = arr[len]
        arr[len] = arr[rand]
        arr[rand] = tmp
    }
    return arr
}

function random_pool_init() {
    const arr = shuffle(new Array(33).fill(0).map((v, i) => i))
    console.log(arr)
    return arr
}

const img = document.querySelector("#meme-img")
let pool = random_pool_init()

function random_image() {
    if (pool.length <= 0) {
        pool = random_pool_init()
    }
    const val = pool.pop()
    img.setAttribute("src", "img/IMG_" + String(val).padStart(3, '0') + ".jpg")
}

random_image()