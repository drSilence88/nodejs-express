// const square = (x) => x*x

// console.log(square(3))


const event1 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Raul','Arturo'],
    printGuesList: function(){
        console.log('Gues list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event1.printGuesList()