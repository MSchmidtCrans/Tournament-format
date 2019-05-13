$(document).ready(function(){

let memberColl = [
    ["Henk", 1],
    ["Jan", 1],
    ["Piet", 1],
    ["Kees", 1]
];

    class playHall {
        constructor (numberLanes) {
            this.numberLanes = 1;
        }
    }

    class Lane {
        constructor(available) {
            this.available = true;
        }
    }

    class Member {
        constructor (name, playClass, available) {
            this.name = this.getName();
            this.playClass = 1;
            this.available = true;
        }
        //Pick random name
        getName() {
            let randomVal = helperFnct.randomNmbr (0, 3); 
                return memberColl[randomVal][0];
        }

    }

    class Game {
        constructor() {
            this.playerColl = memberColl; //Change value back after testing
            this.lanesColl = [];
        }

        //Fill player collection
        fillPlayerColl (numPlayers){
        for (let count = 0; count <= numPlayers-1; count++) {
            let randomVal = helperFnct.randomNmbr (0, 3);
            this.playerColl.push(new Member);
            };
        }

        //Fill lanes
        fillLanesColl (numLanes, maxPlayersLane) {
            for (let count = 0; count <= numLanes-1; count++) {
                for (let counter = 0; counter <= maxPlayersLane-1; counter++) {
                    let randomVal = helperFnct.randomNmbr (0, 3);
                    this.lanesColl.push("Lane " + count);       
                    this.lanesColl[counter] = ["lane " + count+1, this.playerColl[randomVal][0], this.playerColl[randomVal][1]] ;    
                                                    
                }
            }
        }
    }       


let newGame = new Game();

console.log(newGame.playerColl);
newGame.fillLanesColl(1,4);
console.log(newGame.lanesColl);



}) //Final bracket