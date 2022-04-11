$(() => {

    console.log('JS LOADED')

    window.addEventListener('message', (event)  => {
        let progressBar = document.getElementsByClassName('progress');
        let barHealth   = document.getElementById('health');
        let setThing    = $;
        let e = event.data;
        initHud = (data) => {
            setThing(progressBar).css({'background-color' : data.custom.backColor})
            setThing(barHealth).css({'width': Math.round(data.health) + '%'});
        }

        switch( e.action ) {
            case 'update': initHud(e); break;
        }



    })
})