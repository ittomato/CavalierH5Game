cc.Class({
    extends: cc.Component,

    properties: {
        rank:{
            default:null,
            type:cc.Node,
            displayName:'RankBtn'
        },
        
    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    ToRank: function () {
        cc.director.loadScene('Rank');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
