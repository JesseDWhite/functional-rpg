import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl } from './js/creation-factory';
import { changeState } from './js/creation-factory';

$(document).ready(function () {
  $("#character-create").submit(function (event) {
    event.preventDefault();
    const characterName = changeState("name")($("#name").val());
    const characterClass = changeState("class")($("#class").val());
    const characterStrength = changeState("strength")($("#strength").val());
    const characterEndurance = changeState("endurance")($("#endurance").val());
    const characterIntelligence = changeState("intelligence")($("#interlligence").val());
    const characterDexterity = changeState("dexterity")($("#dexterity").val());
    const characterLuck = changeState("luck")($("#luck").val());

    const createdCharacter = stateControl(characterName) {
      return stateControl(characterClass) {
        return stateControl(characterStrength) {
          return stateControl(characterEndurance) {
            return stateControl(characterIntelligence) {
              return stateControl(characterDexterity) {
                return stateControl(characterLuck) {
                }
              }
            }
          }
        }
      }
  }




    $("#current-stats").text(createdCharacter.class);

  console.log(`name: ${createdCharacter.name} class: ${createdCharacter.class} strength: ${createdCharacter.strength}`);
  console.log(createdCharacter);
});



  // I need to be able to pass in the value of each property above into the creation-factory function


});

//function factory that can create new instances of either characters, creatures, and or itmes/weapons
//declare a few premade items and creatures const greenHerb = someFunction(health)(5) yourCharacter(someFunction(greenHerb))
