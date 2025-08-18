

/**
 * 
 * @param {$CommandContext_<$CommandSourceStack_>} ctx
 */
function CodeTest(ctx){
    const {player, server, level} = ctx.source
    output_post("t","tt",1,createDefaultJsonObject("test key",'test value'))
}
