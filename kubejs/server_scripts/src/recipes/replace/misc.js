ServerEvents.recipes(event =>{
    event.replaceInput({output:'ars_nouveau:imbuement_chamber'},'minecraft:gold_ingot','thermal:gold_plate')
    event.replaceInput({output:'powah:thermoelectric_plate'},'minecraft:blaze_powder','ars_nouveau:fire_essence')
    event.replaceInput({output:'ironfurnaces:iron_furnace'},'minecraft:iron_ingot','thermal:iron_plate')

    event.replaceInput({output:/functionalstorage:.*compacting_.*/},'minecraft:iron_ingot','minecraft:glowstone_dust')
    event.replaceInput({output:/functionalstorage:.*compacting_.*/},'minecraft:iron_nugget','create:brass_nugget')

    event.replaceInput({output:'functionalstorage:controller_extension'},'minecraft:quartz_block','ars_nouveau:source_gem_block')
    event.replaceInput({output:'functionalstorage:storage_controller'},'minecraft:quartz_block','ars_nouveau:source_gem_block')
})