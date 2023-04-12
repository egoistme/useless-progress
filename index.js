class UselessProgress {
    constructor(config = {}) {
        this.progress = 0;
        this.onprogress = config.onprogress;
        this.extremeTime = config.extremeTime || 60000;
        this.frequency = config.frequency || 200;
        this._count = 0;
        this._interval = null;
        this._coefficient = 4.61 * this.frequency / this.extremeTime;
    }

    getProgress() {
        return this.progress;
    }

    setProgress(progress) {
        this.progress = progress;
    }

    start() {
        this.progress = 0
        this._interval = setInterval(this._onInterval.bind(this), this.frequency);
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
        let count = 1 - Math.exp(-this._count++ * this._coefficient);
        if (count === 1) {
            count = 0.9999999999999999;
        }
        this.setProgress(count)
        if (this.onprogress) {
            this.onprogress(this.getProgress());
        }
    }

}

export default UselessProgress;
