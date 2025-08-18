ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ars_nouveau/imbuement/'
    const recipes = [
        {
            output:'minecraft:redstone_ore',
            input:'minecraft:stone',
            source:1000,
            pedestal:['ars_nouveau:fire_essence','ars_nouveau:source_gem_block','kubejs:rainbow'],
            id:"redstone_ore"
        },
        {
            output:'ars_nouveau:dominion_wand',
            input:'ars_nouveau:source_gem_block',
            source:1000,
            pedestal:['ae2:certus_quartz_pickaxe','ae2:fluix_pickaxe','minecraft:shears'],
            id:"dominion_wand"
        },
        {
            output:'6x minecraft:redstone',
            input:'minecraft:redstone_ore',
            source:600,
            pedestal:[],
            id:"redstone"
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.imbuement(recipe.input,recipe.output,recipe.source,recipe.pedestal).id(id_prefix + recipe.id)
    })
})