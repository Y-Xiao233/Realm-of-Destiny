ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/sequenced_assembly/"

    const { pressing, cutting, filling, deploying, sequenced_assembly} = event.recipes.create
    const recipes = [
        {
            output:[Item.of('thermal:diamond_dust',3)],
            input:'thermal:lumium_dust',
            main:[
                deploying('thermal:lumium_dust',['thermal:lumium_dust','minecraft:glowstone_dust']),
                deploying('thermal:lumium_dust',['thermal:lumium_dust','thermal:enderium_dust']),
                deploying('thermal:lumium_dust',['thermal:lumium_dust','powah:crystal_blazing']),
                deploying('thermal:lumium_dust',['thermal:lumium_dust','minecraft:redstone']),
                deploying('thermal:lumium_dust',['thermal:lumium_dust','thermal:blizz_powder']),
                filling('thermal:lumium_dust',['thermal:lumium_dust',Fluid.of('ifeu:liquid_sculk_matter',1000)])
            ],
            loops:1,
            id:'diamond_dust'
        }
    ]

    recipes.forEach(recipe =>{
        recipe.transitionalItem = recipe.input
        sequenced_assembly(recipe.output,recipe.input,recipe.main).transitionalItem(recipe.transitionalItem).loops(recipe.loops).id(id_prefix + recipe.id)
    })
})