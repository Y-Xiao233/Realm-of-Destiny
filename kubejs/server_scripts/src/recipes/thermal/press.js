ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/thermal/press/'

    const recipes = [
        {
            input:'ae2:fluix_block',
            catalyst:'thermal:press_unpacking_die',
            output:'4x ae2:fluix_crystal',
            id:"unpacking/fluix_crystal"
        },
        {
            input:'4x ae2:fluix_crystal',
            catalyst:'thermal:press_packing_2x2_die',
            output:'ae2:fluix_block',
            id:"packing2x2/fluix_crystal"
        },
        {
            input:'ae2:quartz_block',
            catalyst:'thermal:press_unpacking_die',
            output:'4x ae2:certus_quartz_crystal',
            id:"unpacking/certus_quartz_crystal"
        },
        {
            input:'4x ae2:certus_quartz_crystal',
            catalyst:'thermal:press_packing_2x2_die',
            output:'ae2:quartz_block',
            id:"packing2x2/certus_quartz_crystal"
        },
        {
            input:'minecraft:iron_ingot',
            output:'thermal:iron_plate',
            id:"iron_plate"
        },
        {
            input:'minecraft:iron_block',
            output:'9x thermal:iron_plate',
            energy:2000,
            id:"iron_plate_9"
        },
        {
            input:'minecraft:gold_ingot',
            output:'thermal:gold_plate',
            id:"gold_plate"
        },
        {
            input:'minecraft:gold_block',
            output:'9x thermal:gold_plate',
            energy:2000,
            id:"gold_plate_9"
        },
        {
            input:'#minecraft:leaves',
            output:'mekanism:bio_fuel',
            id:"bio_fuel"
        },
        {
            input:"2x minecraft:glass",
            output:"kubejs:empty_gem",
            id:"empty_gem"
        },
        {
            input:'create:andesite_alloy',
            output:'kubejs:andesite_alloy_sheet',
            id:"andesite_alloy_sheet"
        },
        {
            input:'create:andesite_alloy_block',
            output:'9x kubejs:andesite_alloy_sheet',
            energy:2000,
            id:"andesite_alloy_sheet_9"
        },
        {
            input:'minecraft:copper_ingot',
            output:'thermal:copper_plate',
            id:"copper_plate"
        },
        {
            input:'minecraft:copper_block',
            output:'9x thermal:copper_plate',
            energy:2000,
            id:"copper_plate_9"
        },
        {
            input:'4x create:brass_ingot',
            catalyst:'thermal:press_gear_die',
            output:'alltheores:brass_gear',
            id:"gear/brass_gear"
        },
        {
            input:'minecraft:diamond',
            output:'alltheores:diamond_plate',
            id:"diamond_plate"
        },
        {
            input:'minecraft:diamond_block',
            output:'9x alltheores:diamond_plate',
            energy:2000,
            id:"diamond_plate_9"
        },
        {
            input:'4x minecraft:diamond',
            catalyst:'thermal:press_gear_die',
            output:'thermal:diamond_gear',
            id:"gear/diamond_gear"
        },
    ]

    recipes.forEach(recipe =>{
        var xp = 0,energy = 200
        let inputs = [recipe.input]
        if(recipe.xp !== undefined){
            xp = recipe.xp
        }
        if(recipe.energy !== undefined){
            energy = recipe.energy
        }
        if(recipe.catalyst !== undefined){
            inputs.push(recipe.catalyst)
        }
        event.recipes.thermal.press([recipe.output],inputs,xp,energy).id(id_prefix + recipe.id)
    })
})