class Contestant{
    constructor(){
        this.index = null;
        this.name = null;
        this.answer = 0;
    }

    getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
    })
    }

    updateCount(){
        database.ref('/').update({
            contestantCount: count
        });
    }

    update(){
        var contestantIndex = "contestants/contestant"+this.index;
        database.ref(contestantIndex).Contestant({
            name:this.name,
            answer:this.answer
        });
    }
    static getPlayerInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
            allContestants = data.val();
        })
    }
}