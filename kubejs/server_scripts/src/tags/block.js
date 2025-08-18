ServerEvents.tags("block", event =>{
    event.add("minecraft:dirt",['kubejs:rainbow'])
    event.add("ifeu:storage/item",['ae2:pattern_provider','expatternprovider:ex_pattern_provider','ae2:interface','expatternprovider:oversize_interface','expatternprovider:ex_interface'])
    event.add("mekanism:cable",[/mekanism.*:.*_thermodynamic_.*/,/mekanism.*:.*_universal_.*/,/mekanism.*:.*_pressurized_.*/,/mekanism.*:.*_logistical_.*/])

    event.add("powah:thermo",[/powah:thermo_generator_.*/])

    const hides = readConst("./kubejs/const.json","hides")
    const decoration = readConst("./kubejs/const.json","decoration")
    hides.forEach(item =>{
        if(!item.startsWith("#") && !item.startsWith("=")){
            event.removeAllTagsFrom(item)
        }
    })
})