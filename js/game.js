// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster or something!",
            choices: [
                {
                    text: "Turn Back",
                    nextLevel: "start",
                },
                
                {
                    text: "Go Forward",
                    nextLevel: "field",
                    
                },
            ]
        
         },
    
      

        field: {
            background_image: "poppy.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "The field is full of beautiful poppies, do you....",
            choices: [
                {
                    text: "Pick a pretty flower",
                    nextLevel: "loser",
                },
                {
                    text: "Forge Ahead",
                    nextLevel: "ocean",
                    
                },
                
            ]
        },
        
        
        ocean: {
            background_image: "ocean.jpeg",
            message: "You have arrived at the choppy sea, do you?...",
            choices: [
                {
                    text: "Swim Across",
                    nextLevel: "loser",
                    
                },
                
                {
                    text: "Build a Boat",
                    nextLevel: "winner"
                    
                },
                
                ]
                
        },
                
        winner: {
            background_image: "Pot-of-Gold-672x372.jpg",
            message: "You have reached the pot of gold!"
            
        },
        
        loser: {
        background_image: "monster.jpg",
          message: "Uh oh! You got eaten by a monster!"  
        },
            
            
        },

};
