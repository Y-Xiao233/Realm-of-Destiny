const drawers = ["cherry", "mangrove", "warped", "crimson", "dark_oak", "acacia", "jungle", "birch", "spruce"]
const drawer_tiers = [1,2,4]

const disabled = Text.translate("information.rod.disabled").red()
const hides = readConst("./kubejs/const.json","hides")
const or = [
    'minecraft:redstone_ore'
]

JEIEvents.hideItems(event =>{
    hides.forEach(item =>{
        if(!item.startsWith("=")){
            event.hide(item)
        }
    })

    drawers.forEach(drawer =>{
        drawer_tiers.forEach(tier =>{
            event.hide("functionalstorage:" + drawer + "_" + tier)
        })
    })

    event.hide("mysticalagriculture:mithril_essence")
    event.hide("mysticalagriculture:chrome_essence")
    event.hide("mysticalagriculture:graphite_essence")
    event.hide("mysticalagriculture:tungsten_essence")
    event.hide("mysticalagriculture:titanium_essence")
})

JEIEvents.information(event =>{
    hides.forEach(item =>{
        if(!item.startsWith("=")){
            event.addItem(item, disabled)
        }
    })

    drawers.forEach(drawer =>{
        drawer_tiers.forEach(tier =>{
            event.addItem("functionalstorage:" + drawer + "_" + tier, disabled)
        })
    })
})

ItemEvents.tooltip(event =>{
    hides.forEach(item =>{
        if(!item.startsWith("=")){
            event.add(item, disabled)
        }
    })

    drawers.forEach(drawer =>{
        drawer_tiers.forEach(tier =>{
            event.add("functionalstorage:" + drawer + "_" + tier, disabled)
        })
    })
})