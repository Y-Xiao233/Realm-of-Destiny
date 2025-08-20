ServerEvents.recipes(event =>{
    const id_prefix = 'realm_of_destiny:recipes/lychee/special/'

    const dyes = [
        'black',
        'light_blue',
        'yellow',
        'purple',
        'white'
    ]

    for(let step = 0; step < dyes.length; step ++){
        event.custom({
            "type":"lychee:item_inside",
            "contextual":[{"type":"execute","command":`fill ~ ~ ~ ~ ~ ~ minecraft:air replace kubejs:${dyes[step]}_dye`}],
            "post":[step === dyes.length - 1 ? {"type":"drop_item","item":"kubejs:rainbow"} : {"type":"drop_item","item":"minecraft:sand","nbt":`{SequencedAssembly:{Progress:${(step + 1) / 5}f,Step:${step + 1},id:"realm_of_destiny:recipes/create/special_sequenced_assembly/special/rainbow"}}`}],
            "item_in":[step === 0 ? Item.of("minecraft:sand").strongNBT() : Item.of("minecraft:sand").withNBT(`{SequencedAssembly:{Progress:${step / 5}f,Step:${step},id:"realm_of_destiny:recipes/create/special_sequenced_assembly/special/rainbow"}}`).weakNBT()],
            "block_in":`kubejs:${dyes[step]}_dye`
        }).id(id_prefix+"rainbow_"+step)
    }

    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"chance","description":"lychee.rod.consume.fluix_block","chance":1}],
      "post":[{"type":"drop_item","item":'ae2:fluix_block'}],
      "item_in":[{"item":'kubejs:colorful_matter_ball'}],
      "block_in": 'ae2:fluix_block'
    }).id(id_prefix + 'fluix_block')

    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"chance","description":"lychee.rod.consume.quartz_block","chance":1}],
      "post":[{"type":"drop_item","item":'ae2:quartz_block'}],
      "item_in":[{"item":'kubejs:colorful_matter_ball'}],
      "block_in": 'ae2:quartz_block'
    }).id(id_prefix + 'quartz_block')

    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"chance","description":"lychee.rod.consume.smooth_sky_stone_block","chance":1}],
      "post":[{"type":"drop_item","item":'ae2:smooth_sky_stone_block'}],
      "item_in":[{"item":'kubejs:colorful_matter_ball'}],
      "block_in": 'ae2:smooth_sky_stone_block'
    }).id(id_prefix + 'smooth_sky_stone_block')

    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"chance","description":"lychee.rod.consume.iron_block","chance":1}],
      "post":[{"type":"drop_item","item":'minecraft:iron_block'}],
      "item_in":[{"item":'kubejs:colorful_matter_ball'}],
      "block_in": 'minecraft:gold_block'
    }).id(id_prefix + 'iron_block')

    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"chance","description":"lychee.rod.consume.rainbow","chance":1}],
      "post":[{"type":"drop_item","contextual": [{"type": "chance","chance": 0.714}],"item":'kubejs:rainbow'}],
      "item_in":[{"item":'kubejs:colorful_matter_ball'}],
      "block_in": 'kubejs:rainbow'
    }).id(id_prefix + 'rainbow')

  seven_ball("minecraft:gold_block","minecraft:iron_block","iron_block")
  seven_ball('kubejs:rainbow','kubejs:rainbow',"rainbow")
  seven_ball('ae2:fluix_block','ae2:fluix_block',"fluix_block")
  seven_ball('ae2:quartz_block','ae2:quartz_block',"quartz_block")
  seven_ball('ae2:smooth_sky_stone_block','ae2:smooth_sky_stone_block',"smooth_sky_stone_block")


  function seven_ball(block,item,id){
    event.custom({
      "type": "lychee:block_interacting",
      "post": [{"type": "prevent_default"},{"type": "drop_item","item":item,"count": 1},{"type": "execute","command": `fill ~ ~ ~ ~ ~ ~ minecraft:air replace ${block}`}],
      "item_in": {"item": "kubejs:colorful_matter_ball_seven"},
      "block_in": block
    }).id(id_prefix + "seven/" + id)
  }

  event.custom({
    "type": "lychee:block_interacting",
    "post": [{"type": "prevent_default"},{"type": "place","block":'ifeu:simulated_hydroponic_bed'}],
    "item_in": {"item": 'ifeu:hydroponic_simulation_processor'},
    "block_in": 'industrialforegoing:hydroponic_bed'
  }).id(id_prefix + "simulated_hydroponic_bed")

  //recraft charm
  // var json = createJsonObject()
  // addToJsonObject(json,"type","lychee:item_inside")
  // var posts = createJsonArray()
  // var p1 = createJsonObject()
  // var p3 = createJsonObject()
  // addToJsonObject(p1,"type","drop_item")
  // addToJsonObject(p1,"item","kubejs:random_essence")
  // addToJsonArray(posts,p1)
  // addToJsonObject(p3,"type","drop_item")
  // addToJsonObject(p3,"item","kubejs:recraft_charm")
  // addToJsonArray(posts,p3)
  // addToJsonObject(json,"post",posts)
  // var item_in = createJsonArray()
  // var i2 = createJsonObject()
  // addToJsonObject(i2,"item",'kubejs:recraft_charm')
  // addToJsonArray(item_in,i2)
  // for(let i = 0; i < 24; i ++){
  //   var i3 = createJsonObject()
  //   addToJsonObject(i3,"tag",'mysticalagriculture:essences')
  //   addToJsonArray(item_in,i3)
  // }
  // addToJsonObject(json,"item_in",item_in)
  // var block_in = createJsonObject()
  // var blocks = createJsonArray()
  // addToJsonArray(blocks,"starbunclemania:source_fluid_block")
  // addToJsonObject(block_in,"blocks",blocks)
  // var state = createJsonObject()
  // addToJsonObject(state,"level","0")
  // addToJsonObject(block_in,"state",state)
  // addToJsonObject(json,"block_in",block_in)
  // event.custom(json).id(id_prefix + "recraft")
})