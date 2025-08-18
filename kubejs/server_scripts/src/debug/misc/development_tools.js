/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx 
 */
function getDevelopmentTools(ctx){
    const {player} = ctx.source
    const items = player.getInventory().asContainer()
    items.setStackInSlot(40,'minecraft:diamond')
    items.setStackInSlot(39,'create:goggles')
}