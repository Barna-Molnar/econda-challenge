


const customerA = {
    isPaid: true,
    isPremium: true,

}
const aUserOne = {
    isAdmin: true,
    customer: customerA,
    userName: 'Almi'
}
const aUserTwo = {
    isAdmin: false,
    customer: customerA,
    userName: 'Almi2'
}

const customerB = {
    isPaid: true,
    isPremium: false,
}
const bUserOne = {
    isAdmin: true,
    customer: customerB,
    userName: 'Barni'
}
const bUserTwo = {
    isAdmin: false,
    customer: customerB,
    userName: 'Barni2'
}

export const users = [aUserOne, aUserTwo, bUserOne, bUserTwo]

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
    if (!user.customer.isPaid) {
        return notPaidMenu
    }
    if (!user.customer.isPremium) {
        return [analytics]
    }
    if (!user.isAdmin) {
        return [{ ...analytics, subMenu: analytics.subMenu.slice(0, 2) }, crossSell]
    }
    return menus

}
// var test = createMenuItems({}, menus)
// console.log(test)




