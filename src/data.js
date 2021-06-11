

// Costumer A 
const customerA = {
    name: 'A',
    isPaid: true,
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
    title: 'AnalyticsDE',
    subMenu: ['Dashboard', 'Reports', 'Eigene-Reports', 'Centricity', 'Plug-Ins']
}

const crossSellDE = {
    language: "DE",
    title: 'Cross SellDE',
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
    const filteredMenus = menus.filter((obj) => obj.language === language)
    const analytics = filteredMenus.find(menu => menu.title.startsWith("Analytics"))
    const crossSell = filteredMenus.find(menu => menu.title.startsWith("Cross Sell"))

    // If customer did not pay
    if (!user.customer.isPaid && user.customer.name === 'A') {
        return notPaidMenu
    }
    if (!user.customer.isPaid && user.customer.name === 'B') {
        return [notPaidMenu[0]]
    }

    // I customer is not Premium 
    if (!user.customer.isPremium) {
        return [analytics]
    }
    // If the the user don't have the admin Permission
    if (!user.isAdmin) {

        return [{ ...analytics, subMenu: analytics.subMenu.slice(0, 2) }, crossSell]
    }

    return filteredMenus

}









