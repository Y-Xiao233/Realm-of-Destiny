BlockEvents.broken(event =>{
    //定义空手挖掘方块掉落的物品以及概率
    const empty_handed = [
        {
            block:'ae2:fluix_block',
            dropItem:'kubejs:fluix_shard',
            chance:0.8
        },
        {
            block:'ae2:quartz_block',
            dropItem:'kubejs:certus_quartz_shard',
            chance:0.8
        },
        {
            block:'ae2:smooth_sky_stone_block',
            dropItem:'kubejs:smooth_sky_stone_shard',
            chance:0.8
        },
        {
            block:'kubejs:rainbow',
            dropItem:'minecraft:gold_nugget',
            chance:0.8
        }
    ]

    const {block,player} = event
    //统一进行判断并且生成对应掉落物品
    empty_handed.forEach(brokenBlock =>{
        if(block.id == brokenBlock.block && (player.getMainHandItem() == "minecraft:air" || player.isFake())){
            if(Math.random() < brokenBlock.chance){
                let itemEntity = block.createEntity("item")
                itemEntity.item = brokenBlock.dropItem
                itemEntity.x+=0.5
                itemEntity.z+=0.5
                itemEntity.y+=0.5
                itemEntity.spawn()
            }
        }
    })
})

PlayerEvents.tick(event =>{
    event.player.tags.contains("without_space_limit")
})