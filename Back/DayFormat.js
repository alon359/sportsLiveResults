class DayFormat {
    constructor(today, day, month, year){
        this.today = new Date();
        this.day = this.today.getUTCDate()
        this.month = this.today.getMonth() + 1
        this.year = this.today.getFullYear()
        this.format()
        this.formatStr = "" + this.year + "-" + this.day + "-" + this.month
    }

    format() {
        if(this.day < 10){
            this.day = '0' + this.day
        }else {
            this.day = '' + this.day
        }
        if(this.month < 10){
            this.month = '0' + this.month
        }else {
            this.month = '' + this.month
        }
        this.year = '' + this.year
    }
    
    getFormatStr() {
        return this.formatStr;
    }
}

module.exports = DayFormat;