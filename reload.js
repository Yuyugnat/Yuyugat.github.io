window.matchMedia('(orientation: landscape) and (min-width: 741px)').addEventListener('change', () => {
    location.reload();
});

window.matchMedia('(orientation: portrait),(min-width: 760px)').addEventListener('change', () => {
    location.reload();
});