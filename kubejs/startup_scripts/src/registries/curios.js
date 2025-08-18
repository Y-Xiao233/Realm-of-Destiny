var $DiscountRing = Java.loadClass("com.hollingsworth.arsnouveau.common.items.curios.DiscountRing")
var $PerkAttributes = Java.loadClass("com.hollingsworth.arsnouveau.api.perk.PerkAttributes")

StartupEvents.registry("item",event =>{
    mana_ring(event,"creative_mana_ring",9999,9999)
})

/**
 * 
 * @param {$RegistryEventJS_<Item>} event 
 * @param {string} id 
 * @param {integer} max_mana 
 * @param {integer} mana_regen 
 */
function mana_ring(event,id,max_mana,mana_regen){
    event.create(id)
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {})
                .onEquip((slotContext, oldStack, newStack) => {})
                .onUnequip((slotContext, oldStack, newStack) => {})
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "ars_nouveau:ars_nouveau.perk.max_mana",
                    UUID,
                    max_mana,
                    'addition'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "ars_nouveau:ars_nouveau.perk.mana_regen",
                        "identifier",
                        mana_regen,
                        'addition'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
                .modifyFortuneLevel((slotContext, lootContext, stack) => 0)
                .modifyLootingLevel((slotContext, source, target, baseLooting, stack) => 0)
                .makesPiglinsNeutral((slotContext, stack) => false)
                .canWalkOnPowderedSnow((slotContext, stack) => false)
                .isEnderMask((slotContext, enderMan, stack) => false)
        )
        .maxStackSize(1)
        .tag("curios:ring")
}