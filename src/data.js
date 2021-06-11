

// Costumer A 
const customerA = {
    name: 'A',
    isPaid: false,
    isPremium: true,

}
const aUserOne = {
    userName: 'A1',
    isAdmin: true,
    customer: customerA
}
const aUserTwo = {
    userName: 'A2',
    isAdmin: false,
    customer: customerA,
}

//Costumer B

const customerB = {
    name: 'B',
    isPaid: true,
    isPremium: false,
}
const bUserOne = {
    userName: 'B1',
    isAdmin: true,
    customer: customerB,
}
const bUserTwo = {
    userName: 'B2',
    isAdmin: false,
    customer: customerB,
}

export const users = [aUserOne, aUserTwo, bUserOne, bUserTwo]

// Menus
const analyticsDE = {
    language: "DE",
    title: 'Analytics',
    subMenu: ['Dashboard', 'Reports', 'Eigene-Reports', 'Centricity', 'Plug-Ins']
}

const crossSellDE = {
    language: "DE",
    title: 'Cross Sell',
    subMenu: ['Dashboard', 'Katalog', 'Widgets', 'Kampagnen', 'Reports']
}

const analyticsEN = {
    language: "EN",
    title: 'AnalyticsEN',
    subMenu: ['Dashboard', 'Reports', 'Custom-Reports', 'Centricity', 'Plug-Ins']
}

const crossSellEN = {
    language: "EN",
    title: 'Cross SellEN',
    subMenu: ['Dashboard', 'Katalog', 'Widgets', 'Kampagnen', 'Reports']
}

const notPaidMenu = [{ title: 'Analytics', subMenu: [] }, { title: 'Cross Sell', subMenu: [] }]

export const menus = [analyticsDE, crossSellDE, analyticsEN, crossSellEN]



export function createMenuItems(user, menus, language) {
    var menu = menus.filter((obj) => obj.language === language)
    console.log(menu)
    // If customer did not pay
    console.log(user.customer)

    if (!user.customer.isPaid && user.customer.name === 'A') {
        return notPaidMenu
    }
    if (!user.customer.isPaid && user.customer.name === 'B') {
        return [notPaidMenu[0]]
    }
    // Other Cases 
    if (!user.customer.isPremium) {
        return [analyticsDE]
    }
    if (!user.isAdmin) {
        return [{ ...analyticsDE, subMenu: analyticsDE.subMenu.slice(0, 2) }, crossSellDE]
    }
    // if (user.customer.name === 'A' && user.customer.isPremium && user.customer.isPaid) {

    // }

    return menus.slice(0, 2)
    // return menu

}









