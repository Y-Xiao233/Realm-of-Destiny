const $Mob = Java.loadClass("net.minecraft.world.entity.Mob")

const r = 10, time = 800
ItemEvents.rightClicked('tiab:time_in_a_bottle',event =>{
    const {hand, player, level, server} = event
    if(hand.name() !== "MAIN_HAND") return
    if(player.offHandItem.id !== 'kubejs:alloy_source') return
    if(player.getCooldowns().isOnCooldown(player.mainHandItem.getIdLocation())) return
    const {x, y, z} = player
    /**
     * @type {$List_<$Mob_>}
     */
    const entities = level.getEntitiesOfClass($Mob,AABB.of(x - r, y - r, z - r, x + r, y + r, z + r))
    var found = false
    if(entities == null || entities.isEmpty()){
        player.tell(Text.translate("message.rod.not_found").red())
        player.getCooldowns().addCooldown(player.mainHandItem.getIdLocation(),time)
        return
    }

    entities.forEach(/**@param {$Mob_} entity */ entity =>{
        if(entity.getType() == "minecraft:ender_dragon"){
            found = true
            var b = entity.isNoAi()
            if(!b){
                entity.setNoAi(true)
                entity.stopSeenByPlayer(player)
                player.tell(Text.translate("message.rod.no_ai").green())
                server.scheduleInTicks(time,s =>{
                    if(entity.isNoAi() && entity.isAlive()){
                        entity.setNoAi(false)
                        entity.startSeenByPlayer(player)
                        player.tell(Text.translate("message.rod.has_ai").green())
                    }
                })
            }
        }
    })

    if(!found){
        player.tell(Text.translate("message.rod.not_found").red())
    }
    player.getCooldowns().addCooldown(player.mainHandItem.getIdLocation(),time)
})


ItemEvents.rightClicked('kubejs:alloy_source',event =>{
    const {hand, player, level} = event
    if(hand.name() !== "MAIN_HAND") return
    if(!player.isShiftKeyDown()) return
    const {x, y, z} = player
    /**
     * @type {$List_<$Mob_>}
     */
    const entities = level.getEntitiesOfClass($Mob,AABB.of(x - r, y - r, z - r, x + r, y + r, z + r))
    var found = false
    if(entities == null || entities.isEmpty()){
        player.tell(Text.translate("message.rod.not_found").red())
        return
    }

    entities.forEach(/**@param {$Mob_} entity */ entity =>{
        if(entity.getType() == "minecraft:ender_dragon"){
            found = true
            var b = entity.isNoAi()
            if(b){
                entity.startSeenByPlayer(player)
                entity.setNoAi(!b)
                player.tell(Text.translate("message.rod.has_ai").green())
            }
        }
    })

    if(!found){
        player.tell(Text.translate("message.rod.not_found").red())
    }
})