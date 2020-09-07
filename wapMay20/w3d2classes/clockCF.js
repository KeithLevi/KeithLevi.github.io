/*jshint esversion: 6 */

(function () {
    "use strict";

    function ClockCF({template}) {

        let timer;

        function render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) { hours = '0' + hours; }

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function () {
            clearInterval(timer);
        };

        this.start = function () {
            render();
            timer = setInterval(render, 1000);
        };

    }

    let clockcf = new ClockCF({template: 'h:m:s'});
//clock.start();
//clock.stop();

    class Clock {
        constructor({template}) {
            //this.timer = null;
            this.template = template;
        }

        render() {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        stop() {
            clearInterval(this.timer);
        }

        start() {
            this.render();

           // this.timer = setInterval( this.render, 1000); //fails in render because this.template will be window.template
           // this.timer = setInterval( function(){this.render();}, 1000); //fails in render because this.template will be window.template
            this.timer = setInterval( function(){clock.render();}, 1000);  //WORKS (but requires the class code to have same name as variable, so a little odd)

            //this.timer = setInterval( ()=> this.render(), 1000); //WORKS this is lexical scope

            //this.timer = setInterval(this.render.bind(this), 1000);  //WORKS setInterval is global method on window
        }

    }

    let clock = new Clock({template: 'h:m:s'});
//clock.start();
//clock.stop();

    window.onload = function () {
        document.getElementById("startCF").onclick = clockcf.start;  //do not need bind because start is not using .this
        document.getElementById("stopCF").onclick = clockcf.stop;
        //document.getElementById("startClass").onclick = clock.start.bind(clock);  //need bind because start uses this, which would become the button
        document.getElementById("startClass").onclick = function(){clock.start();};
        document.getElementById("stopClass").onclick = clock.stop.bind(clock);
    };

})();