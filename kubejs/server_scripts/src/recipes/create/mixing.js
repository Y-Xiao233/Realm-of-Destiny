ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/mixing/"

    const recipes = [
        {
            output:'cagedmobs:hopping_mob_cage',
            input:['minecraft:blackstone','2x minecraft:redstone','3x minecraft:iron_block','minecraft:hopper'],
            heated:'heated',
            id:'hopping_mob_cage'
        },
        {
            output:'2x minecraft:red_dye',
            input:['ars_nouveau:fire_essence','minecraft:redstone'],
            heated:"heated",
            id:"red_dye"
        },
        {
            output:'2x minecraft:lime_dye',
            input:['ars_nouveau:earth_essence','mekanism:bio_fuel'],
            heated:"heated",
            id:"lime_dye"
        },
        {
            output:['2x alltheores:brass_dust','kubejs:colorful_matter_ball_seven'],
            input:['thermal:copper_dust','thermal:iron_dust','kubejs:colorful_matter_ball_seven'],
            heated:"heated",
            id:"brass_dust"
        },
        {
            output:['minecraft:diamond','kubejs:colorful_matter_ball_seven'],
            input:['thermal:diamond_dust','kubejs:colorful_matter_ball_seven'],
            heated:"heated",
            id:"diamond"
        },
        {
            output:['minecraft:ender_eye'],
            input:['minecraft:ender_pearl','minecraft:blaze_powder'],
            heated:"heated",
            id:"ender_eye"
        },
        {
            output:['createutilities:void_steel_ingot'],
            input:['minecraft:iron_ingot','mekanism:dust_obsidian'],
            heated:"heated",
            id:"void_steel_ingot"
        }
    ]

    recipes.forEach(recipe =>{
        const id = id_prefix + recipe.id
        if(recipe.heated == "superheated"){
            event.recipes.create.mixing(recipe.output,recipe.input).superheated().id(id)
        }else if(recipe.heated == 'heated'){
            event.recipes.create.mixing(recipe.output,recipe.input).heated().id(id)
        }else if(recipe.heated == false){
            event.recipes.create.mixing(recipe.output,recipe.input).id(id)
        }
    })
})