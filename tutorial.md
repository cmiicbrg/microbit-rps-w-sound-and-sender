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

## {Step 2}

Now we need to make a variable to keep track of whether we have a Rock, Paper or Scissors in our hand. A variable is a container for storing values. Click on the ``||variables:Variables||`` category in the Toolbox. Click on the Make a Variable button. Give your new variable the name "hand" and click Ok.

![A animation that shows how to create a variable](/static/mb/projects/rock-paper-scissors/newvar.gif)

## {Step 3}

Click on the ``||variables:Variables||`` category in the Toolbox again. You'll notice that there are some new blocks that have appeared. Drag a ``||variables:set hand||`` block into the ``||input:on shake||`` block. We'll start our Rock Paper Scissors game when we shake 👋 our micro:bit.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
// @highlight
    hand = 0
})
```

## {Step 4}

Click on the ``||math:Math||`` category in the Toolbox. Drag a ``||math:pick random||`` block and drop it into the ``||variables:set hand||`` block replacing the number 0. Now when we shake our micro:bit, the variable hand will contain a random number between 1 and 3.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
// @highlight
    hand = randint(1, 3)
})
```

## {Step 5}

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

## {Step 6}

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

## {Step 7}

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

## {Step 8}

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

## {Step 9}

Test your code constantly. You can do this by using the simulator on the left or by downloading your code to your micro:bit and shaking it to see if it displays the correct icon. After some shaking, you should see your first small square representing a Rock.

## {Step 10}

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

## {Step 11}

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

## {Step 12}

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

## {Step 13}

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

## {Step 14}

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

#### Metadata (used for search, rendering)

* for PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

```validation.global
# BlocksExistValidator
* markers: validate-exists
```
