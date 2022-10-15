//================================= Classes and factories =========================================================

//========================================= Hamster =================================================================

// class Hamster{
//     constructor(owner, name, price) {
//         this.owner ="";
//         this.name = name;
//         this.price = 15;
//     }
//             wheelRun() {
//                 this.wheelRun = true;
//                     console.log(this.owner + "Squeak Squeak")
//             }
//             eatFood() {
//                 this.eatFood = true;
//                     console.log(this.owner + "nibble nibble")
//             }
//             getPrice() {
//                 this.getPrice = true;
//                     return this.price
//             }
        
    
    
// }


//================================================= Person ============================================================================

// class Person{
//     constructor(nameParam2, age, heightParam2, weight, mood, bankAccountParam) {
//         this.name = nameParam2,
//         this.age = age,
//         this.height = heightParam2,
//         this.weight = weight,
//         this.mood = mood,
//         this.hamster = []
//         this.bankAccount = bankAccountParam
//     }
//             getName() {
//                     return this.name;
//             }
//             getAge() {
//                     return this.Age;
//             }
//             getWeight() {
//                     return this.weight;
//             }
//             greet() {
//                 console.log(`hi i'm ${this.name} good evening`)
//             }
//             eat() {
//                 weight++
//                 mood++
//             }
//             excerise() {
//                 weight--
//             }
//             ageUp(){
//                 age++
//                 height++
//                 weight++
//                 mood--
//                 bankAccount+10
//             }
//             buyHamster(hamster){
//                 this.hamster.push (hamster)
//                 this.mood += 10
//                 this.bankAccount -= hamster.getPrice()
//             }
// }

// console.log(Person.age)
//============================== Create a Story with your Person class ====================================================================


// 1. Instantiate a new Person named Timmy

// //ANSWER
// const timmy = new Person("Timmy")

// 2. Age Timmy five years

// //ANSWER
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()

// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.

// //ANSWER
// timmy.eat()
// timmy.eat()
// timmy.eat()
// timmy.eat()


// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times

// //ANSWER
// timmy.excerise()
// timmy.excerise()
// timmy.excerise()
// timmy.excerise()
// timmy.excerise()

// 5. Age Timmy 9 years

// //ANSWER
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()

// 6. Create a hamster named "Gus"

// //ANSWER
// const gus = new Hamster("", "gus")
// console.log(gus)

// 7. Set gus's owner to the string "Timmy"

// gus.owner += "Timmy"

// 8. Have Timmy "buy" gus

// //ANSWER
// timmy.buyHamster(gus)
// console.log(gus)

// 9. Age Timmy 15 years

// //ANSWER
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()


// 10. Have Timmy eat twice

// //ANSWER
// timmy.eat()
// timmy.eat()


// 11. Have Timmy exercise twice

// timmy.excerise()
// timmy.excerise()

//================================= Chef Make Dinners ==========================================================================

//ANSWER ======================== This was a quite the journey
// class Dinner {
//     constructor(appetizer, entree, dessert){
//         this.appetizer = appetizer,
//         this.entree = entree,
//         this.dessert = dessert
//     }
// }

// class Chef {
//     static createDinner(plate1, plate2 ,plate3){
//             console.log(new Dinner(plate1, plate2, plate3))
//     }
// }

// Chef.createDinner("Rice", "beans", "chicken")
// Chef.createDinner("brocoli", "mash", "steak")
// Chef.createDinner("pasta", "shrimp", "garlic knots")
