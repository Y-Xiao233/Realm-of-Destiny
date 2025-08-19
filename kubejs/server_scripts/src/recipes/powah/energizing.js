ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/powah/energizing/'

    const recipes = [
        {
            output:'2x powah:steel_energized',
            inputs:['mekanism:ingot_steel','minecraft:gold_ingot'],
            energy:10000,
            id:"steel_energized"
        },
        {
            output:'2x powah:energized_steel_block',
            inputs:['minecraft:gold_block','mekanism:block_steel'],
            energy:90000,
            id:"energized_steel_block"
        },
        {
            output:'industrialforegoing:plastic',
            inputs:['industrialforegoing:dryrubber'],
            energy:10000,
            ratioes:[1,2,4,6],
            id:"plastic"
        },
        {
            "output": "industrialforegoing:fluid_laser_base",
            "inputs": [
                "minecraft:diamond_pickaxe",
                "powah:dielectric_casing",
                "minecraft:bucket",
                "alltheores:brass_gear",
                "industrialforegoing:plastic"
            ],
            "energy": 10000.0,
            "id": "fluid_laser_base"
        },
        {
            "output": "industrialforegoing:laser_drill",
            "inputs": [
                "minecraft:piston",
                "industrialforegoing:plastic",
                "powah:dielectric_casing",
                "kubejs:alloy_source"
            ],
            "energy": 10000.0,
            "id": "laser_drill"
        },
        {
            "output":"industrialforegoing:stasis_chamber",
            "inputs":[
                "mekanism:steel_casing",
                "powah:dielectric_casing",
                "alltheores:brass_gear",
                "thermal:blizz_rod",
                "thermal:blizz_rod",
                "thermal:enderium_ingot"
            ],
            "energy":10000.0,
            "id":"stasis_chamber"
        },
        {
            "output": "8x experienceobelisk:cognitive_flux",
            "inputs": [
                "minecraft:quartz",
                "mekanism:alloy_reinforced",
                "minecraft:soul_sand"
            ],
            "energy": 10000.0,
            "id": "cognitive_flux"
        },
        {
            "output": "9x thermal:copper_coin",
            "inputs": [
                "thermal:iron_coin",
                "kubejs:alloy_covalence"
            ],
            "energy": 10000.0,
            "id": "copper_coin"
        },
        {
            "output": "mekanismgenerators:fission_reactor_port",
            "inputs": [
                "mekanismgenerators:fission_reactor_casing",
                "mekanism:ultimate_control_circuit"
            ],
            "energy": 10000.0,
            "id": "fission_reactor_port"
        }
    ]

    recipes.forEach(recipe =>{
        if((recipe.prefix == null || recipe.prefix.length == 0) && recipe.ratioes == null){
            event.recipes.powah.energizing(recipe.inputs,recipe.output,recipe.energy).id(id_prefix + recipe.id)
        }else if(recipe.prefix != null){
            recipe.prefix.forEach(entry =>{
                var inputs = []
                var output = output + "_" + entry
                var energy = recipe.energy * recipe.prefix.indexOf(entry) * recipe.ratio
                recipe.inputs.forEach(input =>{
                    inputs.push(input + "_" + entry)
                })
                event.recipes.powah.energizing(inputs,output,energy).id(id_prefix + "/" + entry + recipe.id)
            })
        }else if(recipe.ratioes != null){
            recipe.ratioes.forEach(ratio =>{
                var inputs = []
                for(let i = 0; i < ratio; i ++){
                    inputs.push(recipe.inputs[0])
                }
                event.recipes.powah.energizing(inputs,ratio + "x " + recipe.output,recipe.energy * ratio).id(id_prefix + recipe.id + "_" + ratio)
            })
        }
    })
})