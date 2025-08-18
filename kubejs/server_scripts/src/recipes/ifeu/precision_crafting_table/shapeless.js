ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ifeu/precision_crafting_table/shapeless/'
    const ifeu = event.recipes.ifeu

    const simple_recipes = [
        {
            "output": "ars_nouveau:glyph_crush",
            "chance": 0.6,
            "inputs": [
                "minecraft:piston",
                "powah:thermoelectric_plate",
                "ars_nouveau:earth_essence"
            ],
            "id": "glyph_crush"
        },
        {
            "output": "create:precision_mechanism",
            "chance": 0.6,
            "inputs": [
                "create:brass_ingot",
                "create:cogwheel",
                "ars_nouveau:air_essence"
            ],
            "id": "precision_mechanism"
        },
        {
            "output": "ars_nouveau:glyph_sensitive",
            "chance": 0.6,
            "inputs": [
                "mekanism:bio_fuel",
                "minecraft:kelp",
                "minecraft:water_bucket"
            ],
            "id": "glyph_sensitive"
        },
        {
            "output": "2x thermal:copper_coin",
            "chance": 0.8,
            "inputs": [
                "kubejs:alloy_covalence",
                "thermal:copper_coin"
            ],
            "id": "copper_coin"
        }
    ]

    simple_recipes.forEach(recipe =>{
        ifeu.precision_shapeless(recipe.output,recipe.inputs,recipe.chance).id(id_prefix + recipe.id)
    })
})