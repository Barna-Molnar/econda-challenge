

// Costumer A 
const customerA = {
    isPaid: true,
    isPremium: true,

}
const aUserOne = {
    userName: 'Almi',
    isAdmin: true,
    customer: customerA
}
const aUserTwo = {
    userName: 'Almi2',
    isAdmin: false,
    customer: customerA,
}

//Costumer B

const customerB = {
    isPaid: false,
    isPremium: false,
}
const bUserOne = {
    userName: 'Barni',
    isAdmin: true,
    customer: customerB,
}
const bUserTwo = {
    userName: 'Barni2',
    isAdmin: false,
    customer: customerB,
}

export const users = [aUserOne, aUserTwo, bUserOne, bUserTwo]

// Menus
const analytics = {
    title: 'Analytics',
    subMenu: ['Dashboard', 'Reports', 'Eigene-Reports', 'Centricity', 'Plug-Ins']
}

const crossSell = {

    title: 'Cross Sell',
    subMenu: ['Dashboard', 'Katalog', 'Widgets', 'Kampagnen', 'Reports']
}

const notPaidMenu = [{ title: 'Analytics', subMenu: [] }, { title: 'Cross Sell', subMenu: [] }]

export const menus = [analytics, crossSell]



export function createMenuItems(user, menus) {
    // If customer did not pay
    if (!user.customer.isPaid && user.customer === customerA) {
        return notPaidMenu
    }
    if (!user.customer.isPaid && user.customer === customerB) {
        return [notPaidMenu[0]]
    }
    // Other Cases 
    if (!user.customer.isPremium) {
        return [analytics]
    }
    if (!user.isAdmin) {
        return [{ ...analytics, subMenu: analytics.subMenu.slice(0, 2) }, crossSell]
    }
    return menus

}









