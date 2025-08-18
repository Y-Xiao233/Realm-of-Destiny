ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/lychee/basic/'
    
    const recipes = [
        {
            main:lychee("lychee:item_exploding",'actuallyadditions:lava_factory_casing',false,posts("drop_item",'minecraft:cobblestone',16)),
            id:"cobblestone"
        },
        {
            main:lychee('lychee:block_interacting','mekanism:bio_fuel','minecraft:sand',posts("place",'minecraft:dirt')),
            id:"dirt"
        },
        {
            main:lychee('lychee:item_inside','ars_nouveau:fire_essence',"minecraft:water",posts("place","minecraft:lava")),
            id:"lava"
        },
        {
            main:lychee('lychee:block_interacting','ars_nouveau:manipulation_essence','minecraft:iron_block',posts("place",'minecraft:copper_block')),
            id:"copper_block"
        }
    ]

    recipes.forEach(recipe =>{
        event.custom(recipe.main).id(id_prefix + recipe.id)
    })



    const dye_fluids = [
        'white',
        'black',
        'yellow',
        'light_blue',
        'purple'
    ]
    dye_fluids.forEach(dye=>{
        event.custom(
            lychee("lychee:item_inside",`minecraft:${dye}_dye`,'minecraft:water',
                posts('place',`kubejs:${dye}_dye`)
            )
        ).id(id_prefix+"fluid/"+dye+"_dye")
    })


    pickaxe('ae2:fluix_block','kubejs:fluix_shard',0.8,"fluix_shard")
    pickaxe('kubejs:rainbow','minecraft:gold_nugget',0.6,"gold_nugget")
    pickaxe('ae2:quartz_block','kubejs:certus_quartz_shard',0.8,"certus_quartz_shard")
    pickaxe('ae2:smooth_sky_stone_block','kubejs:smooth_sky_stone_shard',0.8,"smooth_sky_stone_block")

    function pickaxe(block,item,chance,id){
        event.custom({
            "type": "lychee:block_interacting",
            "post": [{"type": "damage_item","damage": 1},{"type": "drop_item","item":item,"count": 1,"contextual":[{"type": "chance","chance": chance}]},{"type": "execute","command": `fill ~ ~ ~ ~ ~ ~ minecraft:air replace ${block}`}],
            "item_in": {"tag": 'minecraft:pickaxes'},
            "block_in": block
        }).id(id_prefix + id)
    }
})