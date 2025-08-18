ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ifeu/fluid_crafting_table/shapeless/'
    const ifeu = event.recipes.ifeu

    const recipes = [
        {
            inputs:['kubejs:rainbow'],
            fluid:Fluid.of("minecraft:water",1000),
            output:"minecraft:green_dye",
            id:"green_dye"
        },
        {
            inputs:['#minecraft:leaves','#minecraft:leaves','#minecraft:leaves'],
            fluid:Fluid.of("minecraft:water",1000),
            output:'minecraft:string',
            id:"string"
        },
        {
            inputs:['minecraft:clay','#minecraft:coals','#minecraft:coals','ars_nouveau:fire_essence'],
            fluid:Fluid.of("minecraft:lava",1000),
            output:'16x powah:dielectric_paste',
            id:"dielectric_paste"
        }
    ]

    recipes.forEach(recipe =>{
        ifeu.shapeless(recipe.output,recipe.inputs,recipe.fluid).id(id_prefix+recipe.id)
    })
})