// const square = function(x){
//     return x*x
// }

//creating arrow functions

// const square = (x) => {
//     return x * x
// }

//for single return statements
// const square = (x) => x * x    

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    GuestList: ['Varun', 'Andrew', 'Mike'],
    printGuestList() {
        console.log('GuestList for ' + this.name)
        this.GuestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()