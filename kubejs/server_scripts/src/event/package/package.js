package_draw("kubejs:me_component_package",me_component_package,2)
package_draw("kubejs:upgrade_package",upgrade_package,5)
package_draw("kubejs:module_package",module_package,4)
package_draw("kubejs:sfm_package",sfm_package,2)
package_draw("kubejs:stage_package",stage_package,2,stage_package_task_ids)
package_draw("kubejs:creative_housing_package",creative_housing_package,1)

/**
 * 
 * @param {string} package_id 
 * @param {($ItemStack_ | number)[][]} list 
 * @param {integer} count
 * @param {float[]} task_ids 
 */
function package_draw(package_id,list,count,task_ids){
    if(package_id == null){
        return
    }
    ItemEvents.rightClicked(package_id, event =>{
        const {hand, player, level} = event
        if(hand.name() !== "MAIN_HAND") return
        let rewards = []
        var prefix = []
        var raw_item = event.item
        if(task_ids !== undefined && task_ids !== null){
            prefix = getTaskPrefixChances(player,task_ids,0.005)
        }
        list.forEach(([item,chance]) =>{
            const random = level.random.nextFloat()
            var prefix = []
            if(prefix !== undefined && prefix !== null && prefix.length > 0){
                chance += prefix[list.indexOf(item)]
            }
            if(raw_item.hasNBT() && raw_item.getNbt().contains("chance")){
                var factor = raw_item.getNbt().getInt("chance")
                chance = Number.parseFloat(chance) * (1 + factor / 100)
            }
            if(random <= chance && rewards.length < count){
                rewards.push(item)
            }
        })
        rewards.forEach(item =>{
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
        player.mainHandItem.count --
    })
}

/**
 * 
 * @param {$Player_} player 
 * @param {string[]} task_ids
 * @param {float} factor 
 * @returns {float[]}
 */
function getTaskPrefixChances(player,task_ids,factor){
    if(factor == null || factor <= 0){
        factor = 0.1
    }
    var prefix = []
    for(let n = 0; n < task_ids.length; n ++){
        prefix.push(0)
    }
    var data = FTBQuests.getServerDataFromPlayer(player)
    for(let i = 0; i < task_ids.length; i ++){
        if(data.isCompleted(task_ids[i])){
            for(let m = 0; m < task_ids.length; m ++){
                if(m <= i){
                    prefix[m] -= factor * (Math.abs(i - m) + 1)
                }else{
                    prefix[m] += factor * (Math.abs(i - m) + 1)
                }
            }
        }
    }
    return prefix
}