
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
export const users = [userA, userB]

const analytics = {
    title: 'Analytics',
    subMenu: ['Dashboard', 'Reports', 'Eigene-Reports', 'Centricity', 'Plug-Ins']
}

const crossSell = {
    title: 'Cross Sell',
    subMenu: ['Dashboard', 'Katalog', 'Widgets', 'Kampagnen', 'Reports']
}
export const menus = [analytics, crossSell]

export function createMenuItems(user, menus) {
    if (Object.keys(user).length === 0) return []
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

    // console.log(menuArray)

    return menuArray
}
var test = createMenuItems({}, menus)
console.log(test)

export function generateMarkup(obj) {

    var titleLower = obj.title.toLowerCase().replace(' ', '-')
    return `

                <div class="container container__${titleLower}">
                    <h3 class="container__title">
                   
                         <a href="/${titleLower}">${obj.title}</a>
                    </h3>
                    <ul class="container__menuItems container__menuItems--${obj.title}">
                    ${obj.subMenu ?
            obj.subMenu.map(item => {
                return `
                        <li class="menu__item">
                            <a href="/${titleLower}/${item.toLowerCase()}">${item}</a>
                        </li>
                        `
            }).join('')
            : ''}
                    </ul>
                 </div>   
    `
}
// const markup = generateMarkup(analytics)

export const markup = test.map(obj => generateMarkup(obj)).join('')
// console.log(markup)

