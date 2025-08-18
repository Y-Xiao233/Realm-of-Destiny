BlockEvents.rightClicked(event =>{
    const {block, item, hand, player} = event
    if(hand.name() != "MAIN_HAND") return
    if(!player.isShiftKeyDown()) return

    if(item.id == 'mekanismcovers:empty_cover' || item.id == 'mekanismcovers:cover'){
        if(!block.getBlockState().isAir() && !block.hasTag("mekanism:cable")){
            const count = item.getCount()
            const id = block.id
            player.setMainHandItem(Item.of("mekanismcovers:cover",count,`{CoverBlockItem:{Count:1b,id:'${id}'}}`))

        }
    }
})


BlockEvents.rightClicked(event =>{
    const {block, server, hand, player} = event
    if(hand.name() != "MAIN_HAND") return
    if(!player.getMainHandItem().isEmpty()) return
    if(!player.isShiftKeyDown()) return

    if(block.hasTag("mekanism:cable") && block.entityData.allKeys.contains("CoverState")){
        const id = block.entityData.getString("CoverState")
        server.runCommandSilent(`data merge block ${block.x} ${block.y} ${block.z} {CoverState:""}`)
        summon_item(block,Item.of("mekanismcovers:cover",1,`{CoverBlockItem:{Count:1b,id:'${id}'}}`))
    }
})