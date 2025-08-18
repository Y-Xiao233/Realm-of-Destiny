BlockEvents.modification(event =>{
    const blocks = [
        'ae2:fluix_block',
        'ae2:quartz_block',
        'ae2:smooth_sky_stone_block'
    ]
    blocks.forEach(block =>{
        event.modify(block, block =>{
            block.setDestroySpeed(0.4)
        })
    })
})