ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/mekanism/combining/'
    const recipes = [
        {
            output:'kubejs:colorful_matter_ball_seven',
            main:'kubejs:colorful_matter_ball_six',
            extra:'64x ae2:red_paint_ball',
            id:"colorful_matter_ball_seven"
        },
        {
            output:'kubejs:colorful_matter_ball_six',
            main:Item.of('kubejs:colorful_matter_ball', '{full:1b}').weakNBT(),
            extra:'64x ae2:lime_paint_ball',
            id:"colorful_matter_ball_six"
        },
        {
            output:'thermal:obsidian_glass',
            main:'minecraft:glass',
            extra:'minecraft:obsidian',
            id:'obsidian_glass'
        },
        {
            output:'thermal:lumium_glass',
            main:'thermal:obsidian_glass',
            extra:'thermal:lumium_dust',
            id:'lumium_glass'
        }
    ]

    recipes.forEach(recipe =>{
        event.recipes.mekanism.combining(recipe.output,recipe.main,recipe.extra).id(id_prefix + recipe.id)
    })


    // const models = ["thermal/blizz","witch","enderman","blaze"]
    // const tiers = [6,54,354,1254]

    // models.forEach(model =>{
    //     for(let i = 0; i < tiers.length - 1; i ++){
    //         let lower = Item.of('hostilenetworks:data_model', 16, `{data_model:{data:${tiers[i]},id:"hostilenetworks:${model}"}}`).weakNBT()
    //         let higher = Item.of('hostilenetworks:data_model', `{data_model:{data:${tiers[i + 1]},id:"hostilenetworks:${model}"}}`).weakNBT()
    //         event.recipes.mekanism.combining(higher,'hostilenetworks:prediction_matrix',lower).id(id_prefix + model + "_" + i)
    //     }
    // })
})