var $BlockContainerJS = Java.loadClass("dev.latvian.mods.kubejs.level.BlockContainerJS")

PlayerEvents.loggedIn(event =>{
    const {player, level, server} = event
    if(!player.stages.has('tp')) {
        player.stages.add('tp')
        player.teleportTo("minecraft:overworld",-10,-47,-13,3.0,4.5)
        server.players.forEach(/** @param {$ServerPlayer_} p*/p =>{
            p.setSpawnLocation(new $BlockContainerJS(level,new BlockPos(-10,-47,-13)))
        })
    }
})