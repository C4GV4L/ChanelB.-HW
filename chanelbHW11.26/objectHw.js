let hairstyles ={
    updo: "Pony Tail", 
    natural: "Bantu Knots",
    weave: "Sew-ins",
    braids: "Goddess Braids",
    price: 250, 
        set(hairstylePrice){
            if (typeof hairstylePrice != "number"){ 
                console.log("Something's not right.");
            }else {
                this.price = hairstylePrice 
            }
        },
        get price(){ 
            return this.price
        } 

        }

        console.log(hairstyles);

let camping = { 
    activities: "Story Telling",
    memory: "Camp Song", 
    who: "Family & Friends", 
    fun: "Horseback Riding", 
        new_object: { love: "Camp Fire", nature: "valley", exercise: "hiking"},
     camp_func: function(){ 
         console.log( `What is your favorite ${this.memory}?`);
     }, 

     smore_func: function(){ 
         console.log(`I love camping! Especially when I go with ${this.who}`);
     }
}

console.log(camping.fun); 
camping.camp_func(); 

camping.smore_func(); 


