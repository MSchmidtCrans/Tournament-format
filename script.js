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
            let member = {name: this.name, playClass: this.playClass, available: this.available};
            memberColl.push(member);     
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
                if (!(this.playerColl.includes(memberColl[randomVal]))) {
                    this.playerColl.push(memberColl[randomVal]);
                    playerCount++; 
                };
            }  
            }
                
        //Fill lanes
        fillLanesColl (numLanes, maxPlayersLane) {
            
            for (let count = 0; count <= numLanes-1; count++) {  
                let check = 0;
                while (check < maxPlayersLane) {
                    let randomVal = helperFnct.randomNmbr(0, (this.playerColl.length-1)); 
                    if (this.playerColl[randomVal].available === true) { 
                    let x = ["lane " + (count + 1), this.playerColl[randomVal].name];   
                    this.lanesColl.push(x);      
                    this.playerColl[randomVal].available = false;               
                    check++; 
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


newGame.fillPlayerColl(8);
newGame.fillLanesColl(4, 2);

console.log(newGame.playerColl);
console.log(newGame.lanesColl);



}) //Final bracket