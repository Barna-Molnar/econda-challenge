


const customerA = {
    isPaid: false,
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

const customerB = {
    isPaid: true,
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





