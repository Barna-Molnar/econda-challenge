
const userA = {
    group: "A",
    isPaid: true,
    isPremium: true,
    isUser: false,
}

const userB = {
    group: "B",
    isPaid: true,
    isPremium: false,
    // isUser: false,
}
export const user = [userA, userB]

const userAnalatics = {
    title: 'Analytics',
    subMenu: ['Dashboard', 'Reports']
}

const analytics = {
    title: 'Analytics',
    subMenu: ['Dashboard', 'Reports', 'EigeneReports', 'Centricity', 'Plug- Ins']
}

const crossSell = {
    title: 'Cross Sell',
    subMenu: ['Dashboard', 'Katalog', 'Widgets', 'Kampagnen', 'Reports']
}

// function login(user) {
//     user.group === 'A' && user.isUser ? console.log(analytics) : console.log(analytics.title, analytics.subMenu.slice(0, 2) )
// }
// login(userA)
// console.log( analytics.subMenu.slice(0, 2).map((e, i)=> `<li key=${i}>${e}</li>`))

