ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/botanypots/soil/'
    /**
    {
     soil_block:,
     can_be_planted_on:,
     growth_ticks:,
     growth_modifier:,
     id:`${id_prefix}`
    }
    */
    const soils = [
        {
            soil_block:'kubejs:rainbow',
            can_be_planted_on:['tree'],
            growth_ticks:200,
            growth_modifier:1,
            id:'rainbow'
        },
        {
            soil_block:'minecraft:dirt',
            can_be_planted_on:['tree'],
            growth_ticks:200,
            growth_modifier:2,
            id:'dirt'
        },
        {
            soil_block:'minecraft:glowstone',
            can_be_planted_on:['tree'],
            growth_ticks:200,
            growth_modifier:3,
            id:'glowstone'
        },
        {
            soil_block:'minecraft:diamond_block',
            can_be_planted_on:['refined_obsidian'],
            growth_ticks:200,
            growth_modifier:3,
            id:'refined_obsidian'
        }
    ]

    soils.forEach(soil =>{
        event.recipes.botanypots.soil(soil.soil_block,{block:soil.soil_block},soil.can_be_planted_on,soil.growth_ticks,soil.growth_modifier).id(id_prefix + soil.id)
    })
})