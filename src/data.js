
const userA = {
    group: "A",
    isPaid: true,
    isPremium: true,
    isUser: true,
}

const userB = {
    group: "B",
    isPaid: true,
    isPremium: false,
    // isUser: false,
}
export const users = [userA, userB]

const analytics = {
    title: 'Analytics',
    subMenu: ['Dashboard', 'Reports', 'EigeneReports', 'Centricity', 'Plug- Ins']
}

const crossSell = {
    title: 'Cross Sell',
    subMenu: ['Dashboard', 'Katalog', 'Widgets', 'Kampagnen', 'Reports']
}
export const menus = [analytics, crossSell]
// function login(user) {
//     user.group === 'A' && user.isUser ? console.log(analytics) : console.log(analytics.title, analytics.subMenu.slice(0, 2) )
// }
// login(userA)
// console.log(analytics.subMenu.slice(0, 2).map((e, i) => `<li key=${i}>${e}</li>`))


function createMenuItems(user, menus) {

    var menuArray = []
    // Kunde B ==> permission == only Analytics
    if (!user.isPremium) menuArray = [menus.find(m => m.title === 'Analytics')];

    // Kunde A ==> permission == all-In
    if (user.isPremium) menuArray = menus

    // isPaid ??
    if (!user.isPaid) menuArray = menuArray.map(e => { return { title: e.title } })

    // isUser ?? ( only A)
    if (user.isUser && user.isPaid) menuArray = menuArray.reduce((acc, curr) => {
        if (curr.title === 'Analytics') acc.push({ title: curr.title, subMenu: curr.subMenu.slice(0, 2) })
        if (curr.title !== 'Analytics') acc.push({ ...curr })
        return acc
    }, [])


    console.log(menuArray)



    return menuArray
}
var test = createMenuItems(userA, menus)
console.log(test)
