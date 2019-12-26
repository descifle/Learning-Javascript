let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
       this.guestCount = partySize + this.guestCount 
    },
    removeParty: function (partySize) {
        this.guestCount = partySize - this.guestCount
    }
}

//seatParty
//removeParty
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
console.log(restaurant.guestCount)
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))