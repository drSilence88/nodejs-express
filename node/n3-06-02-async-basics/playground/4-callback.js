setTimeout(() => {
    console.log("Two seconds")
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4;
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitute: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})