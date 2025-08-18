ServerEvents.recipes(event =>{
    const id_prefix = "realm_of_destiny:recipes/create/special_sequenced_assembly/special/"
    /**
    {
     output:[Item.of()],
     input:,
     main:[

     ],
     loops:,
     id:`${id_prefix}`
    }
    */
    const { pressing,cutting,mixing,filling,milling,emptying,crushing,deploying,sequenced_assembly } = event.recipes.create
    const recipes = [
        {
            output:[Item.of('kubejs:rainbow')],
            input:'minecraft:sand',
            transitionalItem:'minecraft:sand',
            main:[
                deploying('minecraft:sand',['minecraft:sand',Item.of('kubejs:black_dye_bucket').withNBT({display:{Name:'{"translate":"text.lychee.block_in"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()]),
                deploying('minecraft:sand',['minecraft:sand',Item.of('kubejs:light_blue_dye_bucket').withNBT({display:{Name:'{"translate":"text.lychee.block_in"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()]),
                deploying('minecraft:sand',['minecraft:sand',Item.of('kubejs:yellow_dye_bucket').withNBT({display:{Name:'{"translate":"text.lychee.block_in"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()]),
                deploying('minecraft:sand',['minecraft:sand',Item.of('kubejs:purple_dye_bucket').withNBT({display:{Name:'{"translate":"text.lychee.block_in"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()]),
                deploying('kubejs:rainbow',['minecraft:sand',Item.of('kubejs:white_dye_bucket').withNBT({display:{Name:'{"translate":"text.lychee.block_in"}'}}).enchant('kubejs:other_sequenced_assembly',1).weakNBT()])
            ],
            loops:1,
            id:`${id_prefix}rainbow`
        }]

    recipes.forEach(recipe =>{
        sequenced_assembly(recipe.output,recipe.input,recipe.main).transitionalItem(recipe.transitionalItem).loops(recipe.loops).id(recipe.id)
    })
})