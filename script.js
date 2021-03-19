let items = [ //list of products with name, price and image
    {
        name: 'Ironhack T',
        price: 10,
        image: 'https://www.datocms-assets.com/14946/1583835303-guillaume-amangoua.jpg?auto=compress%2Cformat&fm=jpg'
    },
    {
        name: 'Ironhack Hoodie',
        price: 15,
        image: 'https://lh3.googleusercontent.com/proxy/BbXKNPQVY2oUiO3yS8zPqsmSfVHK9yaNOyonOBSIbWud08lrGHbV0wma8kkZWq4RRAQSqzKL8W_39setrGN_l_srT4XlzLmwb4QP0eLCXWkold6WCnnJhbneIjCAsdSzFQ'
    },
    {
        name: 'Ironhack Sticker',
        price: 2,
        image: 'https://e7.pngegg.com/pngimages/887/803/png-clipart-ironhack-web-development-job-startup-company-design-blue-user-interface-design-thumbnail.png'
    },
    {
        name: 'Ironhack Mug',
        price: 8,
        image: 'https://ctl.s6img.com/society6/img/fZuLeySy696Oloc6B6yqw1fIVYE/w_1500/coffee-mugs/small/left/greybg/~artwork,fw_4600,fh_1999,fx_2920,fy_865,iw_1103,ih_269/s6-original-art-uploads/society6/uploads/misc/bf8e8c116de947dba8bb5d2fc77dadfe/~~/leo-as-fuck-mugs.jpg'
    },
]

let cart = [] 

let list = document.querySelector('#items') // defining variable list and precising where the list is related to into the HTML

items.forEach((item, i) =>{ // for each product
    list.innerHTML += `<li>
    <div>Name: ${item.name}</div>
    <div>Price: $${item.price}</div>
    <img src='${item.image}'/>
    <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")'/>
    <button>Buy Item</button>
    </li>` // add product name as a list li into the ul (through variable list)
})

function showCart(){ //Show Cart
    let cartItems = document.querySelector('#cart')
    let grandTotal = 0;
    cartItems.innerHTML = ''
    cart.forEach((item, i) =>{ // for each product
        grandTotal += item.price * item.quantity
        cartItems.innerHTML += `<li>
        <div>Name: ${item.name}</div>
        <div>Quantity: ${item.quantity}</div>
        <img src='${item.image}'/>
        </li>` // add product name as a list li into the ul (through variable list)
    })

    document.querySelector('#grandTotal').innerHTML = '$' +grandTotal
}

function inputChange(i, name, price, image) {
    let listItem = document.querySelectorAll('li')[i]
    let input = listItem.querySelector('input')
    let button = listItem.querySelector('button')

    button.onclick = function(){
        cart.push(
            {
                quantity: input.value,
                name: name,
                price: price,
                image: image
            }
        )
        console.log(cart)
        showCart()
    }
}


// document.querySelector('#two').style.backgroundColor = 'red'