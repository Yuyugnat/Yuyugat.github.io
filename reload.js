window.matchMedia('(orientation: landscape) and (min-width: 741px)').addListener( () => {
    location.reload();
});

window.matchMedia('(orientation: portrait),(min-width: 760px)').addListener( () => {
    location.reload();
});