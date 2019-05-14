$(document).ready(function(){

let memberColl = [];

    class Lane {
        constructor(available) {
            this.available = true;
        }
    }

    class Member {
        constructor (name, playClass, available) {
            this.name = name;
            this.playClass = 1;
            this.available = true;
            this.memberColl = this.collectMembers();
        } 
        //Add member to members collection
        collectMembers() {
            memberColl.push([this.name, this.playClass, this.available]);     
        } 
    }

    class Game {
        constructor() {
            this.playerColl = [];
            this.lanesColl = [];
        }

        //Fill player collection
        fillPlayerColl (numPlayers){
            let playerCount = 0;         
            while (playerCount <= numPlayers-1) {
                let randomVal = helperFnct.randomNmbr (0, memberColl.length-1);
                console.log(playerCount);
                console.log(numPlayers);
                if (!(this.playerColl.includes(memberColl[randomVal]))) {
                    this.playerColl.push(memberColl[randomVal]);
                    playerCount++;  
                };
            }  
            }
                
        //Fill lanes
        fillLanesColl (numLanes, maxPlayersLane) {
            for (let count = 0; count <= numLanes-1; count++) {
                for (let counter = 0; counter <= maxPlayersLane-1; counter++) {
                    let randomVal = helperFnct.randomNmbr(0, 3); 
                    if (this.playerColl[randomVal].available === true) { 
                    let x = ["lane " + (count + 1), this.playerColl[randomVal].name];   
                    this.lanesColl.push(x); 
                    console.log()   
                    this.playerColl[randomVal].available = false;
                    } else {
                        console.log("Speler niet beschikbaar");
                    }                                                
                }
            }
        }
    }       



let member1 = new Member('Henk');
let member2 = new Member('Kees');
let member3 = new Member('Piet');
let member4 = new Member('Jan');
let member5 = new Member('Ivo');
let member6 = new Member('Jeroen');
let member7 = new Member('Michael');
let member8 = new Member('Arnoud');

let newGame = new Game();


newGame.fillPlayerColl(4);
//newGame.fillLanesColl(2,2);

console.log(memberColl);
console.log(newGame.playerColl);
//console.log(newGame.lanesColl);



}) //Final bracket