WorldgenEvents.remove(event =>{
  event.removeOres(props =>{
    props.blocks = [/^(?=.*end)(?=.*ore).*$/i]
  })
})