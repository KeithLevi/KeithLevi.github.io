class ExtendedClock extends Clock{
    constructor(templateObj) {
        super(templateObj);
        this.precision = templateObj.precision
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}