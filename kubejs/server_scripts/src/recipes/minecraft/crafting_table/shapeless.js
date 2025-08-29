ServerEvents.recipes(event => {
    const id_prefix = 'realm_of_destiny:recipes/minecraft/crafting_table/shapeless/'
    /**
    {
     output:,
     output_amount:,
     input:[],
     id:
    }
   */
    const recipes = [
        {
            output:'9x minecraft:gold_nugget',
            input:['minecraft:gold_ingot'],
            id:"nugget_from_ingot/gold"
        },
        {
            output:'4x kubejs:fluix_shard',
            input:['ae2:fluix_crystal'],
            id:'shard_from_crystal/fluix'
        },
        {
            output:'4x kubejs:certus_quartz_shard',
            input:['ae2:certus_quartz_crystal'],
            id:'shard_from_crystal/certus_quartz'
        },
        {
            output:'4x kubejs:smooth_sky_stone_shard',
            input:['ae2:smooth_sky_stone_block'],
            id:'shard_from_block/smooth_sky_stone'
        },
        {
            output:'minecraft:white_dye',
            input:['ae2:matter_ball'],
            id:"white_dye"
        },
        {
            output:'actuallyadditions:black_quartz',
            input:['#forge:gems/fluix','#balm:black_dyes'],
            id:"black_quartz"
        },
        {
            output:'2x kubejs:colorful_matter_ball_seven',
            input:['kubejs:colorful_matter_ball_seven'],
            id:"colorful_matter_ball_seven"
        },
        {
            output:'2x ars_nouveau:relay_splitter',
            input:['modularrouters:distributor_module','ars_nouveau:relay','projecte:low_covalence_dust'],
            id:"relay_splitter"
        },
        {
            output:'9x kubejs:empty_ingot',
            input:['kubejs:empty_block'],
            id:'empty_ingot'
        },
        {
            output:'sfm:cable',
            input:['sfm:fancy_cable'],
            id:'sfm_cable'
        },
        {
            output:Item.of('appmek:chemical_storage_cell_1k', '{amts:[L;8000L],ic:8000L,keys:[{"#c":"appmek:chemical",amount:8000L,infuseTypeName:"mekanism:diamond",t:1b}]}').weakNBT(),
            input:['appmek:chemical_cell_housing','ae2:cell_component_1k','mekanism:enriched_diamond'],
            id:"chemical_cell_1k/diamond"
        },
        {
            output:Item.of('ars_nouveau:timer_spell_turret'),
            input:['ars_nouveau:basic_spell_turret','minecraft:clock'],
            id:"timer_spell_turret"
        },
        {
            output:Item.of('ars_nouveau:spell_turret'),
            input:['ars_nouveau:basic_spell_turret','minecraft:blaze_rod','ars_nouveau:source_gem_block'],
            id:"spell_turret"
        },
        {
            output:Item.of('ae2:crafting_accelerator'),
            input:['ae2:crafting_unit','mekanism:advanced_tier_installer'],
            id:"crafting_accelerator"
        }
    ]

    recipes.forEach(recipe =>{
        event.shapeless(recipe.output,recipe.input).id(id_prefix+recipe.id)
    })

    meshes.forEach(mesh =>{
        let id = mesh.id
        event.shapeless(mesh.enchant('kubejs:mesh_unbreakable', 1),[mesh,Item.of('minecraft:enchanted_book').enchant('kubejs:mesh_unbreakable', 1).weakNBT()]).id(id_prefix + "mesh_unbreakable/" + id.substring(id.indexOf(":") + 1))
    })
})
const values = [
    [Item.of('ifeu:dragon_star'),5,80],
    [Item.of('ars_nouveau:source_gem_block'),1,40],
    [Item.of('minecraft:diamond'),2,60]
]
const packages = [
    'kubejs:stage_package',
    'kubejs:sfm_package',
    'kubejs:me_component_package',
    'kubejs:upgrade_package',
    'kubejs:module_package',
    "kubejs:creative_housing_package"
]

const meshes = [
    Item.of('kubejs:fluix_mesh'),
    Item.of('kubejs:infused_mesh')
]
ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/minecraft/crafting_table/shapeless/stage_package/'
    packages.forEach(p =>{
        values.forEach(value =>{
            event.shapeless(p,[p,value[0]]).modifyResult(
                /**
                 * 
                 * @param {$ModifyRecipeCraftingGrid_} inv 
                 * @param {$ItemStack_} item 
                 */
                function(inv,item){
                    var input = inv.find(Ingredient.of(p))
                    if(input.hasNBT() && input.getNbt().contains("chance")){
                        var cur = input.getNbt().getInt("chance")
                        if(cur + value[1] <= value[2]){
                            item.setNbt({chance:cur + value[1]})
                            return item
                        }else{
                            item.setNbt({chance:value[2]})
                            return item
                        }
                    }else{
                        item.setNbt({chance:value[1]})
                        return item
                    }

                }
            ).id(id_prefix + p.replace(":","/") + "/" + value[0].id.replace(":","/"))
        })
    })


    event.shapeless('tiab:time_in_a_bottle',['tiab:time_in_a_bottle','tiab:time_in_a_bottle']).modifyResult(
        /**
         * 
         * @param {$ModifyRecipeCraftingGrid_} inv 
         * @param {$ItemStack_} item 
         */
        function(inv,item){
            let list = inv.findAll()
            let time = 0
            list.forEach(bottle =>{
                if(bottle.hasNBT()){
                    let nbt = bottle.getNbt()
                    if(nbt.contains("storedTime")){
                        time += nbt.getInt("storedTime")
                    }
                }
            })
            item.setNbt({storedTime:time,totalAccumulatedTime:0})
            return item
        }
    )
})