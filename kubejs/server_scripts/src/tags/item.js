ServerEvents.tags("item", event =>{
    const drawers = ["cherry", "mangrove", "warped", "crimson", "dark_oak", "acacia", "jungle", "birch", "spruce"]
    const drawer_tiers = [1,2,4]

    drawers.forEach(drawer =>{
        drawer_tiers.forEach(tier =>{
            event.remove("functionalstorage:drawer","functionalstorage:" + drawer + "_" + tier)
        })
    })
    event.add("functionalstorage:oak_drawer",['functionalstorage:oak_4','functionalstorage:oak_1','functionalstorage:oak_2'])
    event.add("rod:dyes_1",["minecraft:white_dye","minecraft:black_dye","minecraft:light_blue_dye","minecraft:yellow_dye","minecraft:purple_dye"])
    event.add("powah:thermo",[/powah:thermo_generator_.*/])
    event.add("createoreexcavation:drills",[/ifeu:chance_addon_.*/,"ifeu:creative_chance_addon"])
    event.remove("createoreexcavation:drills",['createoreexcavation:diamond_drill','createoreexcavation:netherite_drill'])
    event.add('mysticalagriculture:essences',['mysticalagriculture:prudentium_essence','mysticalagriculture:tertium_essence','mysticalagriculture:imperium_essence','mysticalagriculture:supremium_essence','mysticalagriculture:awakened_supremium_essence'])


    const hides = readConst("./kubejs/const.json","hides")
    const decoration = readConst("./kubejs/const.json","decoration")
    hides.forEach(item =>{
        if(!item.startsWith("#") && !item.startsWith("=")){
            event.removeAllTagsFrom(item)
        }
    })

    decoration.forEach(item =>{
        if(!item.startsWith('#')){
            event.removeAllTagsFrom(item)
        }
    })
})