ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ifeu/precision_crafting_table/shaped/'
    const ifeu = event.recipes.ifeu

    /**
     * 
     * @param {Item} output 
     * @param {Array} pattern 
     * @param {Object} key 
     * @param {float} chance 
     * @param {String} id 
     */
    function precision_shaped(output,pattern,key,chance,id){
        const result = pattern.reduce((acc, str) => {
            const replacedChars = str.split('').map(char => key[char]);
            return acc.concat(replacedChars);
        }, []);

        ifeu.precision_shaped(output,result,chance).id(id_prefix+id)
    }

    const simple_recipes = [
        {
            "output": "createoreexcavation:drilling_machine",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "create:precision_mechanism",
                "B": "create:spout",
                "C": "create:brass_block",
                "D": "create:brass_casing",
                "E": "create:copper_casing"
            },
            "id": "drilling_machine"
        },
        {
            "output": "ifeu:chance_addon_1",
            "chance": 0.6,
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "powah:dielectric_paste",
                "B": "ars_nouveau:source_gem_block",
                "C": "alltheores:brass_gear",
                "D": "kubejs:if_addon_base"
            },
            "id": "chance_addon_1"
        },
        {
            "output": "projecte:philosophers_stone",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "minecraft:redstone",
                "B": "alltheores:brass_dust",
                "C": "create:precision_mechanism"
            },
            "id": "philosophers_stone"
        },
        {
            "output": "hostilenetworks:sim_chamber",
            "chance": 0.7,
            "pattern": [
                " A ",
                "BCB",
                "DED"
            ],
            "key": {
                "A": "thermal:obsidian_glass",
                "B": "create:brass_ingot",
                "C": "minecraft:crying_obsidian",
                "D": "minecraft:echo_shard",
                "E": "powah:thermoelectric_plate"
            },
            "id": "sim_chamber"
        },
        {
            "output": "mekanism:crusher",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "powah:thermoelectric_plate",
                "B": "thermal:lumium_glass",
                "C": "thermal:blizz_powder",
                "D": "mekanism:steel_casing"
            },
            "id": "crusher"
        },
        {
            "output": "4x mekanism:upgrade_speed",
            "chance": 0.6,
            "pattern": [
                "ABA",
                "BAB",
                "ABA"
            ],
            "key": {
                "A": "thermal:enderium_ingot",
                "B": "kubejs:mek_upgrade_base"
            },
            "id": "upgrade_speed"
        },
        {
            "output": "4x mekanism:upgrade_energy",
            "chance": 0.6,
            "pattern": [
                "ABA",
                "BAB",
                "ABA"
            ],
            "key": {
                "A": "powah:crystal_blazing",
                "B": "kubejs:mek_upgrade_base"
            },
            "id": "upgrade_energy"
        },
        {
            "output": "create:deployer",
            "chance": 0.7,
            "pattern": [
                " A ",
                " B ",
                " C "
            ],
            "key": {
                "A": "powah:thermoelectric_plate",
                "B": "create:andesite_casing",
                "C": "create:precision_mechanism"
            },
            "id": "deployer"
        },
        {
            "output": "ifeu:chance_addon_2",
            "chance": 0.4,
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "thermal:diamond_gear",
                "B": "kubejs:if_addon_base",
                "C": "ifeu:chance_addon_1"
            },
            "id": "chance_addon_2"
        },
        {
            "output": "2x industrialforegoing:block_breaker",
            "chance": 0.6,
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "ae2:annihilation_plane",
                "C": "industrialforegoing:machine_frame_pity",
                "D": "create:precision_mechanism"
            },
            "id": "block_breaker"
        },
        {
            "output": "2x industrialforegoing:block_placer",
            "chance": 1.0,
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:iron_ingot",
                "B": "industrialforegoing:machine_frame_pity",
                "C": "expatternprovider:active_formation_plane",
                "D": "create:precision_mechanism"
            },
            "id": "block_placer"
        },
        {
            "output": "thermal:machine_smelter",
            "chance": 0.6,
            "pattern": [
                " A ",
                "BCB",
                "DED"
            ],
            "key": {
                "A": "ae2:charger",
                "B": "thermal:lumium_glass",
                "C": "industrialforegoing:machine_frame_pity",
                "D": "alltheores:brass_gear",
                "E": "powah:crystal_blazing"
            },
            "id": "machine_smelter"
        },
        {
            "output": "mekanism:enrichment_chamber",
            "chance": 0.6,
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "projecte:low_covalence_dust",
                "B": "mekanism:steel_casing",
                "C": "industrialforegoing:machine_frame_pity",
                "D": "create:precision_mechanism"
            },
            "id": "enrichment_chamber"
        },
        {
            "output": "ars_nouveau:archmage_spell_book",
            "chance": 0.7,
            "pattern": [
                "AA ",
                "AB ",
                "   "
            ],
            "key": {
                "A": "minecraft:purple_dye",
                "B": "kubejs:colorful_matter_ball_seven"
            },
            "id": "archmage_spell_book"
        },
        {
            "output": "thermal:redstone_servo",
            "chance": 0.7,
            "pattern": [
                "ABA",
                " C ",
                "ABA"
            ],
            "key": {
                "A": "minecraft:redstone",
                "B": "minecraft:iron_ingot",
                "C": "minecraft:ender_eye"
            },
            "id": "redstone_servo"
        },
        {
            "output": "thermal:device_rock_gen",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": 'thermal:tin_ingot',
                "B": "projecte:low_covalence_dust",
                "C": "ae2:quartz_vibrant_glass",
                "D": "create:precision_mechanism",
                "E": "thermal:redstone_servo"
            },
            "id": "device_rock_gen"
        },
        {
            "output": "mekanism:metallurgic_infuser",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "powah:crystal_blazing",
                "B": "mekanism:steel_casing",
                "C": "projecte:low_covalence_dust",
                "D": "mekanism:ingot_osmium"
            },
            "id": "metallurgic_infuser"
        },
        {
            "output": "2x thermal:rf_coil",
            "chance": 0.7,
            "pattern": [
                "  A",
                " B ",
                "A  "
            ],
            "key": {
                "A": "powah:thermoelectric_plate",
                "B": "minecraft:glowstone"
            },
            "id": "rf_coil"
        },
        {
            "output": "thermal:machine_crucible",
            "chance": 0.7,
            "pattern": [
                " A ",
                "BCB",
                "DED"
            ],
            "key": {
                "A": "create:precision_mechanism",
                "B": "powah:crystal_blazing",
                "C": "thermal:machine_frame",
                "D": 'kubejs:alloy_covalence',
                "E": "thermal:rf_coil"
            },
            "id": "machine_crucible"
        },
        {
            "output": "ars_nouveau:enchanting_apparatus",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "ACA",
                "ABA"
            ],
            "key": {
                "A": 'kubejs:alloy_source',
                "B": 'create:brass_sheet',
                "C": "industrialforegoing:machine_frame_simple"
            },
            "id": "enchanting_apparatus"
        },
        {
            "output": "ars_nouveau:arcane_core",
            "chance": 0.7,
            "pattern": [
                "AAA",
                "BCB",
                "AAA"
            ],
            "key": {
                "A": "kubejs:alloy_source",
                "B": 'create:brass_sheet',
                "C": "industrialforegoing:machine_frame_simple"
            },
            "id": "arcane_core"
        },
        {
            "output": "industrialforegoing:fluid_extractor",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "CDC",
                "AEA"
            ],
            "key": {
                "A": "powah:steel_energized",
                "B": "minecraft:crying_obsidian",
                "C": "projecte:low_covalence_dust",
                "D": "industrialforegoing:machine_frame_simple",
                "E": "minecraft:piston"
            },
            "id": "fluid_extractor"
        },
        {
            "output": "mekanism:pigment_extractor",
            "chance": 0.5,
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "kubejs:alloy_source",
                "B": "mekanism:steel_casing",
                "C": "powah:dielectric_casing"
            },
            "id": "pigment_extractor"
        },
        {
            "output": "mekanism:painting_machine",
            "chance": 0.5,
            "pattern": [
                "ABA",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "kubejs:alloy_covalence",
                "B": "mekanism:steel_casing",
                "C": "powah:dielectric_casing"
            },
            "id": "painting_machine"
        },
        {
            "output": "ifeu:hydroponic_simulation_processor",
            "chance": 0.5,
            "pattern": [
                "ABA",
                "ACA",
                "ADA"
            ],
            "key": {
                "A": "industrialforegoing:plastic",
                "B": "minecraft:repeater",
                "C": "minecraft:paper",
                "D": "projecte:low_covalence_dust"
            },
            "id": "hydroponic_simulation_processor"
        },
        {
            "output": "industrialforegoing:hydroponic_bed",
            "chance": 0.5,
            "pattern": [
                "ABA",
                "CDC",
                "EFE"
            ],
            "key": {
                "A": "industrialforegoing:plastic",
                "B": "minecraft:dirt",
                "C": "minecraft:diamond_hoe",
                "D": 'ifeu:dragon_star',
                "E": "alltheores:brass_gear",
                "F": "industrialforegoing:machine_frame_simple"
            },
            "id": "hydroponic_bed"
        },
        {
            "output": "6x laserio:logic_chip",
            "chance": 0.6,
            "pattern": [
                " A ",
                "BCB",
                "ABA"
            ],
            "key": {
                "A": "ars_nouveau:conjuration_essence",
                "B": "ars_nouveau:manipulation_essence",
                "C": "ars_nouveau:fire_essence"
            },
            "id": "logic_chip"
        },
        {
            "output": "ironfurnaces:netherite_furnace",
            "chance": 0.6,
            "pattern": [
                "ABA",
                "BCB",
                "ADA"
            ],
            "key": {
                "A": "minecraft:netherite_ingot",
                "B": "powah:steel_energized",
                "C": "ironfurnaces:obsidian_furnace",
                "D": "minecraft:nether_star"
            },
            "id": "netherite_furnace"
        },
        {
            "output": "appflux:fe_cell_housing",
            "chance": 0.7,
            "pattern": [
                "ABA",
                "B B",
                "CCC"
            ],
            "key": {
                "A": "ae2:quartz_glass",
                "B": "minecraft:redstone",
                "C": "minecraft:glowstone_dust"
            },
            "id": "fe_cell_housing"
        }
    ]

    simple_recipes.forEach(recipe =>{
        precision_shaped(recipe.output,recipe.pattern,recipe.key,recipe.chance,recipe.id)
    })
})