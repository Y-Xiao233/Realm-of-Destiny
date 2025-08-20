ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/industrialforegoing/dissolution_chamber/'

    const recipes = [
        {
            output: 'kubejs:colorful_matter_ball',
            inputs:[
                'ae2:white_paint_ball','ae2:light_blue_paint_ball','ae2:purple_paint_ball',
                'ae2:black_paint_ball','ae2:yellow_paint_ball',
                'kubejs:rainbow','kubejs:rainbow','kubejs:rainbow'
            ],
            input_fluid:Fluid.of("minecraft:water",1000),
            output_fluid:false,
            time:100,
            id:"colorful_matter_ball"
        },
        {
            output: 'ifeu:empty_nether_star',
            inputs:[
                'kubejs:empty_ingot','industrialforegoing:plastic','kubejs:empty_ingot',
                'industrialforegoing:plastic','industrialforegoing:plastic',
                'kubejs:empty_ingot','industrialforegoing:plastic','kubejs:empty_ingot'
            ],
            input_fluid:Fluid.of("ifeu:liquid_malic_acid",1000),
            output_fluid:false,
            time:100,
            id:"empty_nether_star"
        },
        {
            output:'8x ifeu:apple_core',
            inputs:[
                'minecraft:apple','minecraft:apple','minecraft:apple',
                'minecraft:apple','minecraft:apple',
                'minecraft:apple','minecraft:apple','minecraft:apple'
            ],
            input_fluid:Fluid.of("minecraft:water",100),
            output_fluid:Fluid.of("ifeu:liquid_malic_acid",100),
            time:100,
            id:"liquid_malic_acid_1"
        },
        {
            output:'64x ifeu:apple_core',
            inputs:[
                'thermal:apple_block','thermal:apple_block','thermal:apple_block',
                'thermal:apple_block','thermal:apple_block',
                'thermal:apple_block','thermal:apple_block','thermal:apple_block'
            ],
            input_fluid:Fluid.of("minecraft:water",1000),
            output_fluid:Fluid.of("ifeu:liquid_malic_acid",1000),
            time:800,
            id:"liquid_malic_acid_2"
        },
        {
            output:'ifeu:empty_nether_star',
            inputs:[
                'minecraft:nether_star'
            ],
            input_fluid:Fluid.of("ifeu:liquid_dragon_breath",500),
            output_fluid:Fluid.of("industrialforegoing:ether_gas",5000),
            time:100,
            id:"ether_gas"
        }
    ]

    recipes.forEach(recipe =>{
        if(recipe.output_fluid){
            event.recipes.industrialforegoing.dissolution_chamber(recipe.output,recipe.inputs,recipe.input_fluid,recipe.time,recipe.output_fluid).id(id_prefix + recipe.id)
        }else{
            event.recipes.industrialforegoing.dissolution_chamber(recipe.output,recipe.inputs,recipe.input_fluid,recipe.time).id(id_prefix + recipe.id)
        }
    })
})