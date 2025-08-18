StartupEvents.registry("block",event =>{
    //定义工具等级,类型
    const tool = {
        wood:'minecraft:needs_wooden_tool',
        iron:'minecraft:needs_iron_tool',
        diamond:'minecraft:needs_diamond_tool',
        netherite:'minecraft:needs_netherite_tool',
        pickaxe:'minecraft:mineable/pickaxe',
        axe:'minecraft:mineable/axe',
        shovel:'minecraft:mineable/shovel'
    }

    //定义简单方块
    const simple_block = [
        {
            id:"rainbow",
            soundType:"stone",
            requireTool:true,
            tier:tool.wood,
            type:tool.pickaxe,
            hardness:0.4
        },
        {
            id:"empty_block",
            soundType:"stone",
            requireTool:true,
            tier:tool.iron,
            type:tool.pickaxe
        }
    ]

    //对简单方块进行统一注册
    simple_block.forEach(block =>{
        var speed = block.hardness == undefined ? 3.0 : block.hardness
        var requireTool = block.requireTool == undefined ? false : block.requireTool
        
        if(requireTool){
            event.create(block.id).requiresTool(true).tagBlock(block.tier).tagBlock(block.type).soundType(block.soundType).hardness(speed)
        }else{
            event.create(block.id).soundType(block.soundType).hardness(speed)
        }
    })


    event.create("infinity_source_gem_block")
        .requiresTool(true).tagBlock(tool.wood).tagBlock(tool.pickaxe)
        .soundType("stone")
        .hardness(0.4)
        .transparent(true)
        .item(item =>{
            item.glow(true)
                .tooltip(Text.translate("tooltip.kubejs.infinity_source_gem_block"))
                .rarity("epic")
        })
})