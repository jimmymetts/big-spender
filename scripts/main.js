console.log("test")

let businessEl = document.querySelector(".big_spender")

let businessSmall = document.querySelector(".small_spender")

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {

    business.orders.filter(highOrders => {
        if(highOrders > 9000) {
            console.table("High Spenders",business.companyName)
            console.log(business.addressStateCode)
            businessEl.innerHTML += `
            <h1>High Spender - ${business.companyName}</h1>
            <h2>${business.addressStateCode}</h2>`

        }
    })

})


const smallSpenders = businesses.filter(business => {

    business.orders.filter(lowOrders => {
        if(lowOrders < 7000) {
            console.log("Low Spenders", business.companyName)
            console.log(business.addressStateCode)
            businessSmall.innerHTML += `
            <h1>Low Spender${business.companyName}</h1>
            <h2>${business.addressStateCode}</h2>`

        }
    })

})
