PlayerEvents.loggedIn(event => {
    const {player} = event
    if(!player.stages.has('first_loggedIn')) {
        player.stages.add('first_loggedIn')
        clearAllKnowledges(player)
        learnAllItems(player,shop_start)
    }
})

tome("kubejs:tome1",tome1,null)
tome("kubejs:tome2",tome2,null)
tome("kubejs:tome3",tome3,null)


/**
 * 
 * @param {string} tome_id 
 * @param {string[]} list 
 * @param {$ItemStack_[]} first_unlock_list 
 */
function tome(tome_id,list,first_unlock_list){
    if(tome_id == null){
        return
    }
    ItemEvents.rightClicked(tome_id, event =>{
        const {hand, player} = event
        if(hand.name() !== "MAIN_HAND") return
        if(!player.stages.has('first_unlock_' + tome_id)) {
            player.stages.add('first_unlock_' + tome_id)
            if(first_unlock_list !== null && first_unlock_list.length !== 0){
                first_unlock_list.forEach(item =>{
                    if(player.isFake()){
                        let itemEntity = player.block.createEntity("item")
                        itemEntity.item = item
                        itemEntity.x+=0.5
                        itemEntity.z+=0.5
                        itemEntity.y+=0.5
                        itemEntity.spawn()
                    }else{
                        player.give(item)
                    }
                })
            }
        }
        learnAllItems(player,list)
        player.tell(Text.translate("message.rod.emc.success"))
        event.success()
    })
}