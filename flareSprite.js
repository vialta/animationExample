const flareSprite ={
    name:"flare",
    size:{width:200, height:200},
    animationTypes:['MOVE'],
    frames:[
        require('./Sprite.png')
    ],
    animationIndex: function getAnimationIndex(animationType){
        switch(animationType){
            case 'MOVE':
                return [0];
        }
    }
};

export default flareSprite;