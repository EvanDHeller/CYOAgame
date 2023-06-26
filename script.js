 // Define your story object with scenes and options
      const story = {
        // Your story data
        // script.js

function startGame() {
    console.log("You have just woken up, you don't know where you are, or how you got there.");
    console.log("You don't even remember your name!");
    prompt("Press Enter to continue...");
    
    console.log("As you yawn and rub your eyes, you realize even a temporary name may be helpful...");
    prompt("Press Enter to continue...");
    
    let validName = false;
    while (!validName) {
        let name = prompt("You decide that for now, your name will be: ");
        if (/^[a-zA-Z]+$/.test(name)) {
            validName = true;
        } else {
            console.log("Please choose a valid name (letters only).");
        }
    }
    
    console.log("Thank you, " + name + ", your adventure begins now!");
    prompt("Press Enter to continue...");
    
    console.log("As you look around and take in your surroundings, you find yourself in a small wooded enclave.");
    prompt("Press Enter to continue...");
    
    console.log("In the center of the enclave, you notice a cleanly cut tree trunk with a large locked chest atop it.");
    
    // Open the HTML file to start the interactive part of the game
    window.open('game.html');
}


    // Implement the logic for each scene and its corresponding options

    if (nextScene === 'scene2') {
        showMessage("Cautiously approach the chest");
        showOptions([
            { text: "Open the chest", nextScene: "scene3" },
            { text: "Leave the chest alone", nextScene: "scene4" }
        ]);
    } else if (nextScene === 'scene3') {
        // Implement the logic for scene3
    } else if (nextScene === 'scene4') {
        // Implement the logic for scene4
    }
}

// Call the initial function to start the game
handleOptionClick('scene2');





// script.js

// ...previous code...

function handleOptionClick(nextScene) {
    showMessage('');
    showOptions([]);

    if (nextScene === 'scene2') {
        showMessage("Cautiously approach the chest and notice the big rusted lock clamping it shut.");
        input("Press Enter to continue...");
        
        showMessage("You look at the chest, wondering what could possibly be inside... You choose to:");
        showOptions([
            { text: "Kick at the rusted lock, hoping it will open.", nextScene: "scene2.1" },
            { text: "Look around to see if there is anything you can use to open the chest.", nextScene: "scene2.2" },
            { text: "You know, this is someone's property, I should probably leave it alone.", nextScene: "scene2.3" }
        ]);
    } else if (nextScene === 'scene2.3') {
        showMessage("While you were busy examining the chest, something crept up behind you. A twig snaps under the foot of something heavy.");
        input("Press Enter to continue...");
        
        showMessage("You spin around and see a giant black bear standing on its hind legs. It opens its mouth wide and you shudder, expecting a powerful roar.");
        input("Press Enter to continue...");
        
        showMessage("You stare in fear as the bear makes a terrifying sound from the back of its throat.");
        input("Press Enter to continue...");
        
        showMessage("Bear: 'I do apologize, I've had a cold and it's been absolutely grizzly.'");
        input("Press Enter to continue...");
        
        showMessage("Bear: 'I saw you checking out my little treasure box. I appreciate you leaving it alone. I can't begin to tell how many times humans have tried to steal my special stash.'");
        input("Press Enter to continue...");
        
        showMessage("Bear: 'My name is Beartholomy, and who might you be?'");
        showOptions([
            { text: "My name's [insert user inputted name], it's nice to meet you!", nextScene: "scene2.3.1" },
            { text: "Thinking of a quick lie, you say 'Hi Beartholomy! I'm... Humanee Personby... And I totally wasn't ever thinking of breaking into your treasure box. I mean, what treasure box? Oh THIS treasure box? Now that you mention it, I do see it now. How did I miss that before?'", nextScene: "scene2.3.2" }
        ]);
    } else if (nextScene === 'scene2.3.1') {
        showMessage("Bear: 'It's so nice to finally meet someone with some manners! Here, have some tea, it's been so long since I've had good company.'");
        input("Press Enter to continue...");
        
        showMessage("The bear busies himself, taking kettles and tea cups out from various hiding places, holes in trees, in the hollow trunk of a fallen tree, and even a small jar of honey that he seemed to take from his person, though you try not to think where he had it hidden.");
        input("Press Enter to continue...");
        
        showMessage("After carefully brewing tea, Beartholomy pours a cup of tea, drizzles some honey into it, and hands it to you while steeping his own cup with his other paw.");
        input("Press Enter to continue...");
        
        showOptions([
            { text: "Thank Beartholomy and gratefully accept the cup of tea.", nextScene: "scene2.3.1.1" },
            { text: "Hesitantly take the tea and...", nextScene: "scene2.3.1.2" }
        ]);
    } else if (nextScene === 'scene2.3.1.1') {
        showMessage("You take a sip of tea. Who knows what Beartholomy put in it, but you feel revitalized. Gain 10 Health.");
        health += 10;
        input("Press Enter to continue...");
        
        showMessage("You let out a satisfied sigh as you finish your tea.");
        input("Press Enter to continue...");
        
        showMessage("Bear: 'It was so nice to get to drink some tea with you, but I'm afraid I hive to bee somewhere soon for some honey.'");
        input("Press Enter to continue...");
        
        showMessage("For the good company, let me give you something special before you head out.'");
        input("Press Enter to continue...");
        
        showMessage("Beartholomy reaches back to wherever he pulled the jar of honey from and takes out a key, which he uses to unlock the chest and rummage around in it.");
        input("Press Enter to continue...");
        
        showMessage("Beartholomy reaches into the chest and pulls something out, handing it over to you.");
        input("Press Enter to continue...");
        
        showMessage("You reach out to receive your gift, looking at it confused, Beartholomy says: 'It's a [enter random item acquired through the higher rarity drop rates determined by not breaking the chest open] and it does [list effect granted by the randomly acquired item].'");
        input("Press Enter to continue...");
        
        showMessage("You thank Beartholomy for his hospitality and set off on your way.");
        input("Press Enter to continue...");
        
        showMessage("Exiting the enclave...");
        // Continue to the next part of the story (message 4.0 and beyond)
    }

    // ...continue with other scenes and options...
}

// script.js

// ...previous code...

} else if (nextScene === 'scene2.3.2') {
    showMessage("Beartholomy looks at you suspiciously before asking... 'Your name... is Humanee?'");
    input("Press Enter to continue...");

    showMessage("You look up meekly, just short of making eye contact and say 'I was named after my grandmother...'");
    input("Press Enter to continue...");

    showMessage("Bear: 'What a wonderful name! I'm sure she was a great woman to have raised such an upstanding human such as yourself!'");
    input("Press Enter to continue...");

    showMessage("You breathe a sigh of relief, but you're too nervous to even drink your tea after.");
    input("Press Enter to continue...");

    showMessage("Bear: 'It was so nice to get to chat, but I'm afraid I hive to bee somewhere soon for some honey.'");
    input("Press Enter to continue...");

    showMessage("For the good company, let me give you something special before you head out.");
    input("Press Enter to continue...");

    showMessage("Beartholomy reaches back to wherever he pulled the jar of honey from and takes out a key, which he uses to unlock the chest and rummage around in it.");
    input("Press Enter to continue...");

    showMessage("Beartholomy reaches into the chest and pulls something out, handing it over to you.");
    input("Press Enter to continue...");

    showMessage("You reach out to receive your gift, looking at it confused, Beartholomy says: 'It's a [enter random item acquired through the higher rarity drop rates determined by not breaking the chest open] and it does [list effect granted by the randomly acquired item].'");
    input("Press Enter to continue...");

    showMessage("You thank Beartholomy for his hospitality and set off on your way.");
    input("Press Enter to continue...");

    showMessage("Exiting the enclave...");
    // Continue to the next part of the story (message 4.0 and beyond)
} else if (nextScene === 'scene1.1') {
    showMessage("You kick the lock, it jingles but doesn't break... the same can't be said for your toe. You lost 30 health.");
    health -= 30;
    input("Press Enter to continue...");

    showMessage("What would you like to do now?");
    showOptions([
        { text: "Throw the chest at a tree in frustration.", nextScene: "scene1.1.1" },
        { text: "Look around to see if there is anything you can use to open the chest.", nextScene: "scene1.2" },
        { text: "Try kicking the lock again.", nextScene: "scene1.1.3" }
    ]);
} else if (nextScene === 'scene1.1.1') {
    showMessage("You throw the chest against a nearby tree with all your might. The lock didn't break, but the wood of the chest did... and so did most of the contents inside.");
    input("Press Enter to continue...");

    showMessage("What would you like to do now?");
    showOptions([
        { text: "Search the broken chest for anything that might be useful.", nextScene: "scene1.1.1.1" },
        { text: "Whoops. I guess I don't know my own strength. Start whistling and walk away, you didn't see anything here, just innocently walking through...", nextScene: "scene1.1.1.2" }
    ]);
} else if (nextScene === 'scene1.1.1.1') {
    // Handle scene 1.1.1.1
    // ...
} else if (nextScene === 'scene1.1.1.2') {
    showMessage("You start whistling and walk away, trying to act innocent. However, as you move away, you hear a low growl behind you.");
    input("Press Enter to continue...");

    // Redirect to the decision tree before hearing the growl
    nextScene = 'scene1.1.1.2.1';
} else if (nextScene === 'scene1.1.1.2.1' || nextScene === 'scene1.1.1.2.2') {
    // Handle scene 1.1.1.2.1 and scene 1.1.1.2.2
    // ...
}

// ...continue with other scenes and options...

// script.js

// ...previous code...

} else if (nextScene === 'scene1.1.1.1') {
    showMessage("You search through the contents of the chest. Most of it was broken when you threw it, but you managed to find [insert item acquired]. It [enter effect caused by the item].");
    // Adjust character's health according to the item they got
    // ...

    input("Press Enter to continue...");

    showMessage("Now that you gracefully got the chest open, do you want to leave the enclave?");
    showOptions([
        { text: "Time to leave the enclave and explore.", nextScene: "scene4.0" },
        { text: "Maybe I should look around some more first.", nextScene: "scene1.1.1.1.2" }
    ]);
} else if (nextScene === 'scene1.1.1.1.2') {
    showMessage("You hear a low growling nearby. Do you want to investigate?");
    input("Press Enter to continue...");

    showOptions([
        { text: "Better not risk it, maybe it is time to leave the enclave after all...", nextScene: "scene4.0" },
        { text: "Sounds like I might be able to make a new friend, let's go see who's growling.", nextScene: "scene1.1.1.1.2.2" }
    ]);
} else if (nextScene === 'scene1.1.1.1.2.2') {
    showMessage("You follow the noise and see a black bear on its hind legs, trying to reach for a beehive.");
    input("Press Enter to continue...");

    showOptions([
        { text: "You can't bear it and beeline for the bees and the bear.", nextScene: "scene1.1.1.1.2.2.1" },
        { text: "Slowly back away and retreat, maybe you are done with the enclave after all...", nextScene: "scene1.1.1.1.2.2.2" },
        { text: "Walk confidently towards the bear, calling out 'Hi, Mister Bear! I'm [insert user inputted name]. I can help you get some of that honey if you want!'", nextScene: "scene1.1.1.1.2.2.3" }
    ]);
} else if (nextScene === 'scene1.1.1.1.2.2.1') {
    showMessage("You run madly towards the bear. As you approach, you jump to try and tackle it, but hit your head on the beehive. The bees swarm you, and the bear snarls as it slashes you with its claws. Maybe that wasn't the best approach. Lose 360 health.");
    health -= 360;
    input("Press Enter to continue...");

    if (health <= 0) {
        showMessage(`${name} died before learning their true name or that you shouldn't try and tackle bears.`);
        // Game over logic...
    } else {
        // Continue with the story
        // ...
    }
} else if (nextScene === 'scene1.1.1.1.2.2.2') {
    showMessage("You manage to escape without being heard and make for the exit of the enclave.");
    input("Press Enter to continue...");

    // Continue with the story
    // ...
}

// ...continue with other scenes and options...

// script.js

// ...previous code...

} else if (nextScene === 'scene1.1.3') {
    showMessage("Kick me once, shame on me; kick me twice, shame on you. Lose 30 health.");
    health -= 30;
    input("Press Enter to continue...");

    showMessage("What now?");
    showOptions([
        { text: "Okay, maybe I should try and open it a different way.", nextScene: "scene1.2" },
        { text: "Kicking is the hill I die on, it's who I am! I'm nothing without it!", nextScene: "scene1.1.3.2.2" }
    ]);
} else if (nextScene === 'scene1.1.3.2.2') {
    showMessage("Using all your remaining energy, you kick your bloodied stump at the lock. You miss your kick entirely and fall backward, hitting your head on the ground. Consciousness is starting to fade... Lose 160 health.");
    health -= 160;
    input("Press Enter to continue...");

    if (health <= 0) {
        showMessage("You died the way you lived, kicking things to little avail.");
        // Game over logic...
    } else {
        // Continue with the story
        // ...
    }
} else if (nextScene === 'scene1.2') {
    showMessage("You survey the area and see a dead baby bird that fell out of its nest. Next to it is a large rock.");
    input("Press Enter to continue...");

    showOptions([
        { text: "Take the stone and smash it against the lock.", nextScene: "scene1.2.1" },
        { text: "Take the dead bird and smash it against the rock.", nextScene: "scene1.2.2" }
    ]);
} else if (nextScene === 'scene1.2.1') {
    showMessage("Bending down, you pick up the rock, carry it over to the chest, and smash it against the lock.");
    input("Press Enter to continue...");

    showMessage("The lock broke! It falls off, and you open the hinge and start to peek inside.");
    input("Press Enter to continue...");

    showMessage("As you open the lid, you hear a loud, angry growl. Scared, you quickly reach inside and grab the first thing you can before closing the lid and running.");
    input("Press Enter to continue...");

    showMessage("You run away, clutching your prize and hide behind the tree where you found the rock. Safe behind the tree, you finally have a chance to look at what you stole and find [insert random item acquired]! You have [insert what effect the item grants].");
    // Adjust character's health according to the item they got
    // ...

    // Continue with the story
    // ...
}

// ...continue with other scenes and options...

// script.js

// ...previous code...

} else if (nextScene === 'scene1.2.2') {
    showMessage("With all your strength, you smash the dead bird against the lock. The lock doesn't break, but the bird explodes on impact. Guts, viscera, and feathers fly everywhere. Some gets in your mouth. That can't be good... Lose 35 health.");
    health -= 35;
    input("Press Enter to continue...");

    showMessage("What now?");
    showOptions([
        { text: "Maybe I should use the rock instead...", nextScene: "scene1.2.1" },
        { text: "Maybe this chest just isn't worth it, I'm sick of this spot.", nextScene: "scene4.0" }
    ]);
} else if (nextScene === 'scene2') {
    showMessage("You dash towards the chest and trip over a tree root. You faceplant, but are relatively fine. You proceed towards the chest more carefully. Lose 15 health.");
    health -= 15;
    input("Press Enter to continue...");

    // Redirect to the same message as scene1
    nextScene = "scene1";
} else if (nextScene === 'scene3') {
    // Redirect to the same message as scene1.3
    nextScene = "scene1.3";
} else if (nextScene === 'scene1.3') {
    // Redirect to the same message as scene1.3
    nextScene = "scene1.3.2";
} else if (nextScene === 'scene1.3.2') {
    // Redirect to the same message as scene1.3
    nextScene = "scene1.3.2.1";
}

// ...continue with other scenes and options...

function getRandomItem() {
    const randomNumber = Math.random();
    if (nextScene === 'scene1.1.1.1' || nextScene === 'scene1.2.1') {
        if (randomNumber < 0.8) {
            return { name: 'Medicinal Honey', effect: 15 };
        } else if (randomNumber < 0.95) {
            return { name: 'Heart of a Night Rabbit', effect: 25 };
        } else {
            return { name: 'Chalice of the Bear', effect: 35 };
        }
    } else if (nextScene === 'scene1.3.2.1' || nextScene === 'scene1.3.2.2') {
        if (randomNumber < 0.5) {
            return { name: 'Medicinal Honey', effect: 15 };
        } else if (randomNumber < 0.8) {
            return { name: 'Heart of a Night Rabbit', effect: 25 };
        } else {
            return { name: 'Chalice of the Bear', effect: 35 };
        }
    }
}

// ...previous code...

} else if (nextScene === 'scene1.2.1') {
    showMessage("Bending down, you pick up the rock, carry it over to the chest, and smash it against the lock.");
    input("Press Enter to continue...");

    showMessage("The lock broke! It falls off, and you open the hinge and start to peek inside.");
    input("Press Enter to continue...");

    showMessage("As you open the lid, you hear a loud, angry growl. Scared, you quickly reach inside and grab the first thing you can before closing the lid and running.");
    input("Press Enter to continue...");

    showMessage("You run away, clutching your prize and hide behind the tree where you found the rock. Safe behind the tree, you finally have a chance to look at what you stole.");
    const item = getRandomItem();
    showMessage(`You find ${item.name}! You have ${item.effect} health.`);
    health += item.effect;
    input("Press Enter to continue...");

    // Continue with the story
    // ...
}

// ...continue with other scenes and options...


// script.js

// ...previous code...

} else if (nextScene === 'scene4.0') {
    showMessage("Your memory is still gone, but you're not going to find more answers sitting around here. It's time to explore!");
    input("Press Enter to continue...");

    showMessage("You exit the enclave, walking past the tight thicket of trees and barely manage to make out several game trails, each branching out in different directions.");
    input("Press Enter to continue...");

    showMessage("You see the late-afternoon sun in the sky and determine the game trail in that direction must be West. There's an eerie and out-of-place fog in that direction, you can't see much else that way. Looking down the trail to the East, you see a medium-sized hill with a mountainous tree at its peak, and as you look to the North, you realize that the trail may have been made by humans, though it clearly has not been well maintained. The forest seems to thin out in that direction.");
    input("Press Enter to continue...");

    showMessage("Well, I might as well start by checking out...");
    showOptions([
        { text: "Set off into the spooky mist, it's not like you can get any more lost.", nextScene: "scene4.1" },
        { text: "Head East towards the gigantic tree on the hill, an aerial view might help.", nextScene: "scene4.2" },
        { text: "Go North and follow the path, if it was made by humans, maybe it will lead to humans.", nextScene: "scene4.3" }
    ]);
} else if (nextScene === 'scene4.1') {
    showMessage("You can't remember for sure, but you have a sinking feeling this isn't your first time being ghosted. You walk further into the fog and soon lose all sense of direction among a blanket of white engulfing you from all sides.");
    input("Press Enter to continue...");

    // Continue with the story
    // ...
} else if (nextScene === 'scene4.2') {
    showMessage("With such a tall landmark, it will be hard getting lost, but the path turns to brambles and walking becomes difficult. Still, you trudge on, trying not to get hit by too many branches as you weave through the thicket. Lose 5 health.");
    health -= 5;
    input("Press Enter to continue...");

    // Continue with the story
    // ...
} else if (nextScene === 'scene4.3') {
    showMessage("You follow the path North, and after a mile or two, the path begins to widen, and you see a faint light coming from the direction of the path. Maybe you'll be out of the forest sooner than you thought.");
    input("Press Enter to continue...");

    // Continue with the story
    // ...
}

// ...continue with other scenes and options...

      };

      // Function to handle option clicks
      function handleOptionClick(nextScene) {
        // Update the current scene and display the next scene
        currentScene = nextScene;
        displayScene();
      }

      // Function to display the current scene
      function displayScene() {
        // Get the current scene object
        const scene = story[currentScene];

        // Update the messages
        messages.innerHTML = scene.message;

        // Remove existing option buttons
        while (options.firstChild) {
          options.removeChild(options.firstChild);
        }

        // Add option buttons for the current scene
        scene.options.forEach((option) => {
          const optionButton = document.createElement('button');
          optionButton.textContent = option.text;

          // Add click event listener to the option button
          optionButton.addEventListener('click', () => {
            handleOptionClick(option.nextScene);
          });

          options.appendChild(optionButton);
        });
      }

      // Initial display of the first scene
      displayScene();


