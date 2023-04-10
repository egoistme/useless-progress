class UselessProgress {
    constructor(config = {}) {
        this.progress = 0;
        this.count = 0;
        this.onprogress = config.onprogress;
        this.extremeTime = config.extremeTime || 60000;
        this._interval = null;
        this._coefficient = 461 / this.extremeTime;

    }

    getProgress() {
        return this.progress;
    }

    setProgress(progress) {
        this.progress = progress;
    }

    start() {
        this._startTime = new Date().getTime();
        this.progress = 0
        this._interval = setInterval(this._onInterval.bind(this), 100);
    }
    stop() {
        clearInterval(this._interval);
        return this.getProgress();
    }
    end() {
        this.setProgress(1);
        this.stop();
    }

    _onInterval() {
        this.setProgress(1 - Math.exp(-this.count++ * this._coefficient))
        if (this.onprogress) {
            this.onprogress(this.getProgress());
        }
    }

}

export default UselessProgress;
