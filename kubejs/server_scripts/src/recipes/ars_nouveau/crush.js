ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ars_nouveau/crush/'
    const recipes = [
        {
            outputs:[Item.of('thermal:copper_dust').withChance(1.0)],
            input:'thermal:copper_plate',
            id:"copper_dust"
        },
        {
            outputs:[Item.of('thermal:iron_dust').withChance(1.0)],
            input:'thermal:iron_plate',
            id:"iron_dust"
        },
        {
            outputs:[Item.of('thermal:gold_dust').withChance(1.0)],
            input:'thermal:gold_plate',
            id:"gold_dust"
        },
        {
            outputs:[Item.of('mekanism:dust_obsidian').withChance(1.0)],
            input:'minecraft:obsidian',
            id:"dust_obsidian"
        },
        {
            outputs:[Item.of('thermal:blizz_powder',2).withChance(1.0)],
            input:'thermal:blizz_rod',
            id:"blizz_powder"
        },
        {
            outputs:[Item.of('thermal:enderium_dust').withChance(1.0)],
            input:'thermal:enderium_ingot',
            id:"enderium_dust"
        },
        {
            outputs:[Item.of('minecraft:blaze_powder',2).withChance(1.0),Item.of('minecraft:blaze_powder',2).withChance(0.4)],
            input:'minecraft:blaze_rod',
            id:"blaze_powder"
        },
        {
            outputs:[Item.of('thermal:tin_dust').withChance(1.0)],
            input:'thermal:tin_ingot',
            id:"tin_dust"
        },
    ]

    recipes.forEach(recipe =>{
        event.recipes.ars_nouveau.crush(recipe.input,recipe.outputs).id(id_prefix + recipe.id)
    })
})