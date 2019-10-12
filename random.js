class BBS {
    constructor(p, q, seed) {
        this.p = p;
        this.q = q;
        this.x0 = seed;
        this.n = p * q;
    }

    getRandNumb() {
        var nextRandNumb = (this.x0 * this.x0) % this.n;
        this.x0 = nextRandNumb;
        return nextRandNumb;
    }

    getRandBit() {
        return this.getRandNumb() % 2;
    }
}

let p = 11, q = 19, s = 5;
bbs = new BBS(p, q, s);
for (var i = 0; i < 6; i++) {
    console.log(bbs.getRandNumb());
}
