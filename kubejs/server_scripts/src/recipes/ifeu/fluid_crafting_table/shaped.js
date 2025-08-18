ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/ifeu/fluid_crafting_table/shaped/'
    const ifeu = event.recipes.ifeu

    /**
     * 
     * @param {Item} output 
     * @param {Array} pattern 
     * @param {Object} key 
     * @param {Fluid} inputFluid 
     * @param {String} id 
     */

    /**
    {
     output:,
     fluid:,
     pattern:['','',''],
     key:{
  
     },
     id:
    }
    */
    function shaped(output,pattern,key,inputFluid,id){
        const result = pattern.reduce((acc, str) => {
            const replacedChars = str.split('').map(char => key[char]);
            return acc.concat(replacedChars);
        }, []);

        ifeu.shaped(output,result,inputFluid).id(id_prefix+id)
    }


    const dye_paint_balls = [
        'white',
        'black',
        'yellow',
        'light_blue',
        'purple'
    ]

    // const base_blocks = [
    //     "ae2:fluix_block",
    //     'kubejs:rainbow',
    //     'ae2:smooth_sky_stone_block',
    //     'ae2:quartz_block'
    // ]

    const simple_recipes = [
        {
            output:Item.of('kubejs:sapling_certificate'),
            fluid:Fluid.of("minecraft:water",1000),
            pattern:['AAA','ABA','AAA'],
            key:{
                A: 'minecraft:gold_ingot',
                B: 'kubejs:rainbow'
            },
            id:"sapling_certificate"
        },
        {
            output:Item.of('minecraft:bone_meal'),
            fluid:Fluid.of("minecraft:water",1000),
            pattern:['AAA','AAA','AAA'],
            key:{
                A: 'minecraft:white_dye'
            },
            id:"bone_meal"
        },
        {
            output:Item.of("minecraft:gold_ingot"),
            fluid:Fluid.of('kubejs:yellow_dye',1000),
            pattern:["AAA","AAA","AAA"],
            key:{
                A:'minecraft:gold_nugget'
            },
            id:"gold_ingot"
        },
        {
            output:'minecraft:oak_sapling',
            fluid:Fluid.of("minecraft:water",10000),
            pattern:['AAA','ABA','CCC'],
            key:{
                A: 'minecraft:green_dye',
                B: 'kubejs:sapling_certificate',
                C: 'minecraft:bone_block'
            },
            id:"oak_sapling"
        },
        {
            output:"meinfinitycell:infinity_water_cell",
            fluid:Fluid.of("minecraft:water",10000),
            pattern:["ABC","DEF","GGG"],
            key:{
                A: 'ae2:black_paint_ball',
                B: 'ae2:white_paint_ball',
                C: 'ae2:light_blue_paint_ball',
                D: 'ae2:yellow_paint_ball',
                E: 'ae2:item_cell_housing',
                F: 'ae2:purple_paint_ball',
                G: 'ars_nouveau:water_essence'
            },
            id: "infinity_water_cell"
        },
        {
            output:'functionalstorage:oak_1',
            fluid:'kubejs:white_dye',
            pattern:['AAA','ABA','AAA'],
            key:{
                A: 'minecraft:oak_planks',
                B: '#forge:ingots/gold'
            },
            id:"drawer_1"
        },
        {
            output:'2x functionalstorage:oak_2',
            fluid:'kubejs:white_dye',
            pattern:['ABA','AAA','ABA'],
            key:{
                A: 'minecraft:oak_planks',
                B: '#forge:ingots/gold'
            },
            id:"drawer_2"
        },
        {
            output:'4x functionalstorage:oak_4',
            fluid:'kubejs:white_dye',
            pattern:['BAB','AAA','BAB'],
            key:{
                A: 'minecraft:oak_planks',
                B: '#forge:ingots/gold'
            },
            id:"drawer_4"
        },
        {
            output:'functionalstorage:fluid_1',
            fluid:'kubejs:light_blue_dye',
            pattern:['AAA','ABA','AAA'],
            key:{
                A: 'minecraft:oak_planks',
                B: 'mekanism:basic_fluid_tank'
            },
            id:"fluid_1"
        },
        {
            output:'2x functionalstorage:fluid_2',
            fluid:'kubejs:light_blue_dye',
            pattern:['ABA','AAA','ABA'],
            key:{
                A: 'minecraft:oak_planks',
                B: 'mekanism:basic_fluid_tank'
            },
            id:"fluid_2"
        },
        {
            output:'4x functionalstorage:fluid_4',
            fluid:'kubejs:light_blue_dye',
            pattern:['BAB','AAA','BAB'],
            key:{
                A: 'minecraft:oak_planks',
                B: 'mekanism:basic_fluid_tank'
            },
            id:"fluid_4"
        },
        {
            output:'minecraft:tnt',
            fluid:Fluid.of('kubejs:purple_dye',100),
            pattern:['ABA','BAB','ABA'],
            key:{
                A: '#forge:gems/black_quartz',
                B: '#minecraft:sand'
            },
            id:"tnt"
        },
        {
            output:'4x create:andesite_alloy',
            fluid:Fluid.of('kubejs:white_dye',100),
            pattern:['ABC','BAC','CCC'],
            key:{
                A: 'minecraft:andesite',
                B: 'thermal:iron_plate',
                C: "ifeu:air"
            },
            id:"andesite_alloy"
        },
        {
            output:'ars_nouveau:source_jar',
            fluid:Fluid.of('kubejs:purple_dye',500),
            pattern:['AAA','BCB','AAA'],
            key:{
            A: 'ars_nouveau:archwood_slab',
            B: 'ae2:quartz_glass',
            C: 'ifeu:air'
            },
            id:"source_jar"
        },
        {
            output:'kubejs:source_mesh',
            fluid:'starbunclemania:source_fluid',
            pattern:['ABA','BCB','ABA'],
            key:{
            A: 'minecraft:stick',
            B: 'ars_nouveau:abjuration_essence',
            C: 'kubejs:infinity_source_gem_block'
            },
            id:"source_mesh"
        },
        {
            output:'minecraft:clay',
            fluid:'minecraft:water',
            pattern:['CBC','BAB','CBC'],
            key:{
            A: 'minecraft:dirt',
            B: 'ars_nouveau:water_essence',
            C: "ifeu:air"
            },
            id:"clay"
        },
        {
            output:'8x ars_nouveau:sourcestone',
            fluid:'kubejs:purple_dye',
            pattern:['AAA','ABA','AAA'],
            key:{
            A: '#forge:stone',
            B: 'ars_nouveau:abjuration_essence'
            },
            id:"sourcestone"
        },
        {
            output:'4x minecraft:netherrack',
            fluid:'minecraft:lava',
            pattern:['ACA','CBC','ACA'],
            key:{
            A: '#forge:cobblestone',
            B: 'ars_nouveau:fire_essence',
            C: '#forge:dusts/redstone'
            },
            id:"netherrack"
        },
        {
            output:'minecraft:iron_golem_spawn_egg',
            fluid:'kubejs:black_dye',
            pattern:[' B ','AAA',' A '],
            key:{
            A: 'minecraft:iron_block',
            B: 'minecraft:pumpkin'
            },
            id:"iron_golem_spawn_egg"
        },
        {
            output:'mekanism:combiner',
            fluid:'starbunclemania:source_fluid',
            pattern:['ABA','DCD','ABA'],
            key:{
            A: 'minecraft:redstone',
            B: 'ars_nouveau:source_gem',
            C: 'mekanism:steel_casing',
            D: 'minecraft:blackstone'
            },
            id:"combiner"
        },
        {
            "output": "minecraft:warden_spawn_egg",
            "fluid": "starbunclemania:source_fluid",
            "pattern": [
                " A ",
                "BBB",
                " B "
            ],
            "key": {
                "A": "minecraft:obsidian",
                "B": "minecraft:warped_stem"
            },
            "id": "warden_spawn_egg"
        },
        {
            "output": "64x hostilenetworks:prediction_matrix",
            "fluid": "ifeu:liquid_sculk_matter",
            "pattern": [
                "AB ",
                "BCB",
                " BD"
            ],
            "key": {
                "A": "powah:thermoelectric_plate",
                "B": "ars_nouveau:conjuration_essence",
                "C": "create:precision_mechanism",
                "D": "create:brass_ingot"
            },
            "id": "prediction_matrix"
        },
        {
            "output": "9x projecte:low_covalence_dust",
            "fluid": "starbunclemania:source_fluid",
            "pattern": [
                "ABC",
                "DEF",
                "GHI"
            ],
            "key": {
                "A": "thermal:enderium_dust",
                "B": "minecraft:glowstone_dust",
                "C": "thermal:gold_dust",
                "D": "minecraft:redstone",
                "E": "minecraft:emerald",
                "F": "alltheores:brass_dust",
                "G": "thermal:copper_dust",
                "H": "thermal:iron_dust",
                "I": "thermal:blizz_powder"
            },
            "id": "low_covalence_dust"
        },
        {
            "output": "ae2:fluid_cell_housing",
            "fluid": "starbunclemania:source_fluid",
            "pattern": [
                "ABA",
                "BCB",
                "DDD"
            ],
            "key": {
                "A": "minecraft:white_stained_glass",
                "B": "ae2:certus_quartz_crystal",
                "C": "minecraft:bucket",
                "D": "minecraft:copper_ingot"
            },
            "id": "fluid_cell_housing"
        },
        {
            "output": "ifeu:creative_chance_addon",
            "fluid": "ifeu:liquid_dragon_breath",
            "pattern": [
                "ABA",
                "CDC",
                "ABA"
            ],
            "key": {
                "A": "minecraft:netherite_ingot",
                "B": "industrialforegoing:plastic",
                "C": "ifeu:dragon_star",
                "D": "kubejs:if_addon_base"
            },
            "id": "creative_chance_addon"
        }
    ]

    dye_paint_balls.forEach(dye =>{
        shaped(
            `8x ae2:${dye}_paint_ball`,
            ["AAA","ABA","AAA"],
            {A:'ae2:matter_ball',B:'ars_nouveau:water_essence'},
            Fluid.of(`kubejs:${dye}_dye`,1000),
            dye+"_paint_ball"
        )
    })

    // base_blocks.forEach(block =>{
    //     shaped(
    //         Item.of('expatternprovider:infinity_cell').withNBT(`{record:{"#c":"ae2:i",id:"${block}"}}`).weakNBT(),
    //         ["ABC","DEF","GGG"],
    //         {A:'ae2:black_paint_ball',B:'ae2:white_paint_ball',C:'ae2:light_blue_paint_ball',D:'ae2:yellow_paint_ball',E:'ae2:item_cell_housing',F:'ae2:purple_paint_ball',G:block},
    //         Fluid.of("minecraft:water",1000),
    //         "infinity_"+block.substring(block.indexOf(":") + 1)+"_cell"
    //     )
    // })

    simple_recipes.forEach(recipe =>{
        shaped(recipe.output,recipe.pattern,recipe.key,recipe.fluid,recipe.id)
    })
})