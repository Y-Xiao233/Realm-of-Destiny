const $AbstractSourceMachine = Java.loadClass("com.hollingsworth.arsnouveau.api.source.AbstractSourceMachine")

BlockEvents.rightClicked('ars_nouveau:source_jar',event =>{
    const {block,item,level,hand} = event

    if(hand.name() !== "MAIN_HAND") return
    if(item.id !== 'ars_nouveau:magebloom') return
    /**
     * @type {$AbstractSourceMachine_}
     */
    let entity = block.getEntity()

    if(entity !== null && entity.getSource() <= 9900){
        entity.addSource(100)
        item.count --
    }
})