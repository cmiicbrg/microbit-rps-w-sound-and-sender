# Rock, Paper, Scissors

## {Introduction @showdialog}

We are going to program the game Rock, Paper, Scissors.

The game automatically evaluates who has won with the help of the value sent by the micro:bit and counts how often you have already won.

## {Step 1}

At the beginning of the program it is advisable to display something so that we know that the program or the micro:bit has started. To do this, add the ``||basic:show icon||`` block from the ``||basic:Basic||`` category to the ``||basic:on start||`` block and select a symbol.

Load the program onto the micro:bit and see what happens. **[Instructions](https://makecode.microbit.org/device/usb/webusb)**

```blocks
// @highlight
basic.showIcon(IconNames.Heart)
```

## {Step 2}

Click on the ``||input:Input||`` category in the Toolbox. Drag the ``||input:on shake||`` block out to the workspace. This block will run the code inside it when the micro:bit is shaken.

```blocks
// @highlight
input.onGesture(Gesture.Shake, function() {
    
})
```

## {Step 3}

Now we need to make a variable to keep track of whether we have a Rock, Paper or Scissors in our hand. A variable is a container for storing values. Click on the ``||variables:Variables||`` category in the Toolbox. Click on the ``|Make a Variable...|`` button. Give your new variable the name "hand" and click Ok.

![A animation that shows how to create a variable](/static/mb/projects/rock-paper-scissors/newvar.gif)

## {Step 4}

Click on the ``||variables:Variables||`` category in the Toolbox again. You'll notice that there are some new blocks that have appeared. Drag a ``||variables:set hand||`` block into the ``||input:on shake||`` block. We'll start our Rock Paper Scissors game when we shake 👋 our micro:bit.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
// @highlight
    hand = 0
})
```

## {Step 5}

Click on the ``||math:Math||`` category in the Toolbox. Drag a ``||math:pick random||`` block and drop it into the ``||variables:set hand||`` block replacing the number 0. Now when we shake our micro:bit, the variable hand will contain a random number between 1 and 3.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
// @highlight
    hand = randint(1, 3)
})
```

## {Step 6}

Click on the ``||logic:Logic||`` category in the Toolbox. Drag the ``||logic:if true then else||`` block out to the workspace and drop it into the ``||input:on shake||`` block under the ``||variables:set hand||`` block.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
// @highlight
    if (true) {
     
    } else {
     
    }
})
```

## {Step 7}

From the ``||logic:Logic||`` category, drag a ``||logic:0 = 0||`` comparison block and drop it into the ``||logic:if true then else||`` block replacing **true**.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
// @highlight
    if (0 == 0) {
     
    } else {
     
    }
})
```

## {Step 8}

Click on the ``||variables:Variables||`` category in the Toolbox. Drag a ``||variables:hand||`` block out and drop it into the ``||logic:0 = 0||`` comparison block replacing the first **0**.  Click on the second 0 in the comparison block and change to **1**.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
// @highlight
    if (hand == 1) {
        
    } else {
        
    }
})
```

## {Step 9}

Click on the ``||basic:Basic||`` category in the Toolbox. Drag a ``||basic:show icon||`` block out and drop it under ``||logic:if hand = 1 then||``. In the ``||basic:show icon||`` block, click on the Heart icon and instead select the small square icon to represent a 💎 Rock.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
    if (hand == 1) {
// @highlight
        basic.showIcon(IconNames.SmallSquare)
    } else {
        
    }
})
```

## {Step 10}

Test your code constantly. You can do this by using the simulator on the left or by downloading your code to your micro:bit and shaking it to see if it displays the correct icon. After some shaking, you should see your first small square representing a Rock.

## {Step 11}

At the bottom of the ``||logic:if then else||`` block, click on the plus **'+'** sign. This will expand the code to include an ``||logic:else if||`` clause.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
// @highlight
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (false) {
        
    } else {
        
    }
})
```

## {Step 12}

From the ``||logic:Logic||`` category, drag a ``||logic:0 = 0||`` comparison block and drop it into the open space next to the ``||logic:else if||`` clause.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
// @highlight
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (0 == 0) {
        
    } else {
        
    }
})
```

## {Step 13}

From the ``||variables:Variables||`` category, drag a ``||variables:hand||`` block and drop it into the ``||logic:0 = 0||`` comparison block replacing the first **0**.  Click on the second 0 in the comparison block and change to **2**.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
// @highlight
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        
    } else {
        
    }
})
```

## {Step 14}

From the ``||basic:Basic||`` category, drag a ``||basic:show icon||`` block out and drop it under ``||logic:else if hand = 2 then||``. In the ``||basic:show icon||`` block, click on the Heart icon and instead select the large square icon to represent 📃 Paper.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
// @highlight
        basic.showIcon(IconNames.Square)
    } else {

    }
})
```

## {Step 15}

Now let's deal with the last condition - if our hand variable isn't holding a 1 (Rock) or a 2 (Paper), then it must be 3 (✀ Scissors)! From the ``||basic:Basic||`` category, drag another ``||basic:show icon||`` block out and drop it into the last opening under the ``||logic:else||``.  In the ``||basic:show icon||`` block, click on the Heart icon and select the Scissors icon.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
// @highlight
        basic.showIcon(IconNames.Scissors)
    }
})
```

## {Time to test! @showdialog}

### Time to test

Shake your micro:bit and see if it displays the correct icon for Rock, Paper or Scissors. If it doesn't, go back and check your code. You can also use the simulator on the left to test your code.

### Hand in the first milestone of your project

When you're happy with your code, disconnect the micro:bit by unplugging the USB cable, click the ``|Download|`` button to download the code to your computer. Upload the .hex file in the assignment in your learning management system.

## {Step 16}

To use the radio, we need to set the group number. Click on the ``||radio:Radio||`` category in the Toolbox. Drag the ``||radio:radio set group||`` block and drop it into the ``||basic:on start||`` block.
Instead of 0 or 88 you should choose any number between 0 and 255. This number is used to identify the group of micro:bits that can communicate with each other. If you want to communicate with a micro:bit in another group, you will need to change the group number on both micro:bits.

```blocks
basic.showIcon(IconNames.Heart)
// @highlight
radio.setGroup(88)
```

## {Step 17}

Now we need to create some more variables.

- "winCount"  to keep track of how many times we have won
- "otherHand" to keep track of the other player's hand
- "mayReceive" to keep track of whether we are allowed to receive a message

Click on the ``||variables:Variables||`` category in the Toolbox. Click on the ``|Make a Variable|`` button. Create the variables "winCount", "otherHand" and "mayReceive".

![A animation that shows how to create a variable](/static/mb/projects/rock-paper-scissors/newvar.gif)

## {Step 18}

After starting the game, we need to set the variable "mayReceive" to true. This will allow us to receive the other player's hand.

Click on the ``||variables:Variables||`` category in the Toolbox. Drag the ``||variables:set mayReceive to||`` block and drop it into the ``||basic:on start||`` block. Go to the category ``||logic:Logic||`` and drag the ``||logic:true||`` block into the ``||variables:set mayReceive to||`` block instead of the ``||Math:0||``.

```blocks
basic.showIcon(IconNames.Heart)
radio.setGroup(88)
// @highlight
mayReceive = true
```

## {Step 19}

Button A will be used to start one round of the game. When we press button A, we set the variable "mayReceive" to true and the variable "hand" to 0. We also show a check mark on the LED screen.

Click on the ``||input:Input||`` category in the Toolbox. Drag the ``||input:on button A pressed||`` block and drop it into the workspace.

Duplicate the ``||variables:set mayReceive to||`` block from the ``||basic:on start||`` by right-clicking on it and selecting **Duplicate**. Move the duplicated block into the ``||input:on button A pressed||`` block.

You should know by now how to set the variable "hand" to 0 and show a check mark on the LED screen.

```blocks
// @highlight
input.onButtonPressed(Button.A, function () {
    mayReceive = true
    hand = 0
    basic.showIcon(IconNames.Yes)
})
```

## {Step 20}

When the buttons A and B are pressed together, we will reset the game.

Set the variables:

- "mayReceive" to true
- "hand" to 0
- "winCount" to 0.

Show a heart on the LED screen.

The easiest way to accomplish this is to right-click on the ``||input:on button A pressed||`` block and select **Duplicate**. Then right-click on the **A** in the new block and select **AB**.

```blocks
// @highlight
input.onButtonPressed(Button.AB, function () {
    mayReceive = true
    hand = 0
    basic.showIcon(IconNames.Heart)
    winCount = 0
})
```

## {Step 21}

When button B is pressed, we will show the number of times we have won.

Click on the ``||input:Input||`` category in the Toolbox. Drag the ``||input:on button B pressed||`` block and drop it into the workspace. Click on the ``||basic:Basic||`` category in the Toolbox. Drag a ``||basic:show number||`` block out and drop it into the ``||input:on button B pressed||`` block.
Instead of 0, drag the ``||variables:winCount||`` block into the ``||basic:show number||`` block.

```blocks
input.onButtonPressed(Button.B, function () {
// @highlight
    basic.showNumber(winCount)
})
```

## {Time to test! @showdialog}

### Time to test

After every step where you could see something that has changed you should test your program. Connect the micro:bit to your computer using an USB cable and make sure WebUSB is connected. Click the ``|Download|`` button to transfer the code to the micro:bit. Test the Buttons A, B, A+B and shake the micro:bit to see if the game works as expected.

## {Step 22}

After shaking the micro:bit, we will also have to send the number of the hand we have chosen.

Use the ``||radio:radio send number||`` block to send the number of the hand we have chosen. This block should be placed at the end of the ``||input:on shake||`` block. Replace the **0** with the variable **hand**.

```blocks
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
// @highlight
    radio.sendNumber(hand)
})
```

## {Step 23}

When we receive a number from the other player, we will first have to check if we are allowed to receive a message.

Add the ``||radio:on radio received||``. Add an ``||logic:if||`` block inside the ``||radio:on radio received||`` block. Replace the logic value **true** with the variable **mayReceive**.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
// @highlight
    if (mayReceive) {
        
    }
})
```

## {Step 24}

Inside the if-Statement set the variable "otherHand" to the number we received and set the variable "mayReceive" to false.

To set the variable "otherHand" to the number we received, drag the ``||variables:set otherHand to||`` block into the if-Statement. Replace the **0** with the variable **receivedNumber**. You get the **receivedNumber** block from the ``||radio:on radio received||`` block by dragging it out.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (mayReceive) {
// @highlight
        otherHand = receivedNumber
// @highlight
        mayReceive = false
    }
})
```

## {Step 25}

We may have received a number from the other player before we have chosen our hand. We will have to wait until we have chosen our hand (i.e. shaken the micro:bit) before we continue.

From ``||loops:Loops||`` drag a ``||loops:while||`` block and drop it into the if-Statement. Replace **false** with a ``||logic:0 = 0||`` comparison block and replace the first **0** with the variable **hand**.

Add a ``||basic:pause||`` block inside the ``||loops:while||`` block, and set the pause time to 500 ms.

Since we wouldn't see our own hand on the LED screen if we received the other hand immediately after shaking our own micro:bit, we will add another ``||basic:pause||`` block after the ``||loops:while||`` block and set the pause time to 500 ms.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (mayReceive == true) {
        otherHand = receivedNumber
        mayReceive = false
// @highlight
        while (hand == 0) {
            basic.pause(500)
        }
// @highlight
        basic.pause(500)
    }
})
```

## {Step 26}

Now we have to compare the two hands and determine the winner.

Add an ``||logic:if then else||`` block after the second ``||basic:pause||`` block. Use the ``||logic:0 = 0||`` comparison block from the ``||logic:Logic||`` category. Replace the first **0** with the variable ``||Variables:hand||`` and the second **0** with the variable ``||Variables:otherHand||``.

In this case, we will show the string "Draw" on the LED screen because the two hands are the same.

Add a ``||basic:show string||`` block inside the ``||logic:if||`` block and replace the **Hello!** with **Draw**.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (mayReceive) {
        otherHand = receivedNumber
        mayReceive = false
        while (hand == 0) {
            basic.pause(500)
        }
        basic.pause(500)
// @highlight
        if (hand == otherHand) {
            basic.showString("Draw")
        } else {

        }
    }
})
```

## {Step 27}

Click the **+** sign at the bottom of the ``||logic:if||`` block to add an ``||logic:else if||`` clause.

Add an ``||logic:and||`` block inside the ``||logic:else if||`` clause. Insert a ``||logic:0 = 0||`` comparison block in both slots of the ``||logic:and||`` block.

In the first comparison Block replace the first **0** with the variable ``||Variables:hand||`` and the second **0** with 1.

In the second comparison Block replace the first **0** with the variable ``||Variables:otherHand||`` and the second **0** with 2.

In this case we lost, because we have chosen Rock and the other player has chosen Paper.

Add a ``||basic:show string||`` block inside the ``||logic:else if||`` block and replace the **Hello!** with **Lost**.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (mayReceive) {
        otherHand = receivedNumber
        mayReceive = false
        while (hand == 0) {
            basic.pause(500)
        }
        basic.pause(500)
// @highlight
        if (hand == otherHand) {
            basic.showString("Draw")
        } else if (hand == 1 && otherHand == 2) {
            basic.showString("Lost")
        } else {

        }
    }
})
```

## {Step 28}

Add two more ``||logic:else if||`` to the ``||logic:if||`` block by clicking the **+** sign at the bottom of the ``||logic:if||`` block.

Right click the ``||logic:and||`` block inside the first ``||logic:else if||`` and select **Duplicate**. Move the duplicated ``||logic:and||`` block into the second ``||logic:else if||``.

Repeat the last step for the third ``||logic:else if||``.

In the second ``||logic:else if||`` replace the **1** with a **2** and the **2** with a **3**.

In the third ``||logic:else if||`` replace the **1** with a **3** and the **3** with a **1**.

Show the string **Lost** in the second and third ``||logic:else if||``.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (mayReceive) {
        otherHand = receivedNumber
        mayReceive = false
        while (hand == 0) {
            basic.pause(500)
        }
        basic.pause(500)
        if (hand == otherHand) {
            basic.showString("Draw")
        } else if (hand == 1 && otherHand == 2) {
// @highlight
            basic.showString("Lost")
        } else if (hand == 2 && otherHand == 3) {
// @highlight
            basic.showString("Lost")
        } else if (hand == 3 && otherHand == 1) {
            basic.showString("Lost")
        } else {
                
        }
    }
})
```

## {Step 29}

There is only one possibility left. If we haven't drawn and we haven't lost, we have won.

Add a ``||basic:show string||`` block inside the ``||logic:else||`` block and replace the **Hello!** with **Won**.

Add a ``||variables:change winCount by 1||`` block inside the ``||logic:else||`` block.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
    if (mayReceive) {
        otherHand = receivedNumber
        mayReceive = false
        while (hand == 0) {
            basic.pause(500)
        }
        basic.pause(500)
        if (hand == otherHand) {
            basic.showString("Draw")
        } else if (hand == 1 && otherHand == 2) {
            basic.showString("Lost")
        } else if (hand == 2 && otherHand == 3) {
            basic.showString("Lost")
        } else if (hand == 3 && otherHand == 1) {
            basic.showString("Lost")
        } else {
// @highlight
            basic.showString("Won")
// @highlight
            winCount += 1
        }
    }
})
```

## {Congratulations! You have completed the Rock, Paper, Scissors game. @showdialog}

### Time to play

Now find someone to play with. You will need two micro:bits to play the game. Agree on a radio group number and set the same group number on both micro:bits, by changing the number in the ``||radio:radio set group||`` block.

Shake your micro:bit to choose your hand, your friend will do the same. After you have both chosen your hands, the micro:bits will compare the hands and show the result on the LED screen.

### Congratulations! You have completed the Rock, Paper, Scissors game

When you're happy with your code, once again disconnect the micro:bit by unplugging the USB cable, click the ``|Download|`` button to download the code to your computer. Upload the .hex file in the assignment in your learning management system.

#### Metadata (used for search, rendering)

- for PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

```validation.global
# BlocksExistValidator
    * enabled: true
```
