# Schere, Stein, Papier

## {Einleitung @unplugged}

Wir werden das Spiel Schere, Stein, Papier programmieren.

Das Spiel wertet, mit Hilfe des vom micro:bit gesendeten Werts automatisch aus, wer gewonnen hat, und zählt, wie oft du bereits gewonnen hast.

## {Schritt 1}

Zu Beginn des Programms ist es ratsam, etwas anzuzeigen, damit wir wissen, dass das Programm oder der micro:bit gestartet ist. Füge dazu den ``||basic:zeige Symbol||`` Block aus der Kategorie ``||basic:Grundlagen||`` in den ``||basic:beim Start||`` Block ein.

Lade das Programm auf den micro:bit und schau, was passiert. **[Anleitung](https://makecode.microbit.org/device/usb/webusb)**

```blocks
// @highlight
basic.showIcon(IconNames.Heart)
```

## {Schritt 2}

Klicke auf die Kategorie `||input:Eingabe||` in der Werkzeugkiste. Ziehe den `||input:wenn geschüttelt||` Block auf die Arbeitsfläche. Dieser Block wird den Code in ihm ausführen, wenn der micro:bit geschüttelt wird.

```blocks
// @highlight
input.onGesture(Gesture.Shake, function() {
    
})
```

## {Schritt 2}

Nun benötigen wir eine Variable, um zu verfolgen, ob wir Schere, Stein oder Papier in der Hand haben. Eine Variable ist ein Behälter, um Werte zu speichern. Klicke in der Werkzeugkiste auf die Kategorie ``||variables:Variablen||``. Klicke auf den Button ``|Erstelle eine Variable|``. Gib deiner neuen Variable den Namen „hand“ und klicke auf OK.

![Eine Animation, die zeigt, wie man eine Variable erstellt](/static/mb/projects/rock-paper-scissors/newvar.gif)

## {Schritt 3}

Klicke erneut auf die Kategorie ``||variables:Variablen||`` in der Werkzeugkiste. Du wirst bemerken, dass einige neue Blöcke erschienen sind. Ziehe einen ``||variables:setze hand||`` Block in den ``||input:wenn geschüttelt||`` Block. Wir starten unser Spiel Schere, Stein, Papier, wenn wir unseren micro:bit schütteln 👋.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
// @highlight
    hand = 0
})
```

## {Schritt 4}

Klicke auf die Kategorie ``||math:Mathematik||`` in der Werkzeugkiste. Ziehe einen ``||math:wähle eine zufällige Zahl ...||`` Block und setze ihn in den ``||variables:setze hand||`` Block, indem du die Zahl 0 ersetzt. Jetzt wird, wenn wir unseren micro:bit schütteln, die Variable hand eine zufällige Zahl zwischen 1 und 3 enthalten.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
// @highlight
    hand = randint(1, 3)
})
```

## {Schritt 5}

Klicke auf die Kategorie ``||logic:Logik||`` in der Werkzeugkiste. Ziehe den ``||logic:wenn wahr dann ansonsten||`` Block heraus auf die Arbeitsfläche und setze ihn in den ``||input:wenn geschüttelt||`` Block unter den ``||variables:setze hand||`` Block.

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

## {Schritt 6}

Aus der Kategorie ``||logic:Logik||``, ziehe einen ``||logic:0 = 0||`` Vergleichsblock und setze ihn in den ``||logic:wenn wahr dann ansonsten||`` Block, indem du **wahr** ersetzt.

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

## {Schritt 7}

Klicke auf die Kategorie ``||variables:Variablen||`` in der Werkzeugkiste. Ziehe einen ``||variables:hand||`` Block heraus und setze ihn in den ``||logic:0 = 0||`` Vergleichsblock, indem du die erste **0** ersetzt. Klicke auf die zweite 0 im Vergleichsblock und ändere sie zu **1**.

```blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() {
    hand = randint(1, 3)
    if (hand == 1) {
        
    } else {
        
    }
})
```

## {Schritt 8}

Klicke auf die Kategorie ``||basic:Grundlagen||`` in der Werkzeugkiste. Ziehe einen ``||basic:zeige Symbol||`` Block heraus und setze ihn unter ``||logic:wenn hand = 1 dann||``. Im ``||basic:zeige Symbol||`` Block, klicke auf das Herzsymbol und wähle stattdessen das kleine Quadratsymbol aus, um einen 💎 Stein darzustellen.

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

## {Schritt 9}

Teste deinen Code ständig. Du kannst dies tun, indem du den Simulator auf der linken Seite verwendest oder deinen Code auf deinen micro:bit herunterlädst und ihn schüttelst, um zu sehen, ob das richtige Symbol angezeigt wird. Nach einigem Schütteln solltest du dein erstes kleines Quadrat sehen, das einen Stein darstellt.

## {Schritt 10}

Am unteren Rand des Blocks ``||logic:wenn dann ansonsten||``, klicke auf das Pluszeichen **'+'**. Dies erweitert den Code, um eine ``||logic:sonst wenn||``-Klausel einfügen.

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

## {Schritt 11}

Aus der Kategorie ``||logic:Logik||``, ziehe einen ``||logic:0 = 0||`` Vergleichsblock und setze ihn in den freien Platz neben der ``||logic:sonst wenn||``-Klausel.

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

## {Schritt 12}

Aus der Kategorie ``||variables:Variablen||``, ziehe einen ``||variables:hand||`` Block heraus und setze ihn in den ``||logic:0 = 0||`` Vergleichsblock, indem du die erste **0** ersetzt. Klicke auf die zweite 0 im Vergleichsblock und ändere sie zu **2**.

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

## {Schritt 13}

Aus der Kategorie ``||basic:Grundlagen||``, ziehe einen ``||basic:zeige Symbol||`` Block heraus und setze ihn unter ``||logic:sonst wenn hand = 2 dann||``. Im ``||basic:zeige Symbol||`` Block, klicke auf das Herzsymbol und wähle stattdessen das große Quadratsymbol aus, um 📃 Papier darzustellen.

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

## {Schritt 14}

Nun kümmern wir uns um die letzte Bedingung – wenn unsere Variable „hand“ weder eine 1 (Stein) noch eine 2 (Papier) hält, dann muss es eine 3 (✀ Schere) sein! Aus der Kategorie ``||basic:Grundlagen||``, ziehe einen weiteren ``||basic:zeige Symbol||`` Block heraus und setze ihn in die letzte Öffnung unter dem ``||logic:ansonsten||``. Im ``||basic:zeige Symbol||`` Block, klicke auf das Herzsymbol und wähle das Scherensymbol.

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

## {Zeit zum Testen! @unplugged}

### Zeit zum Testen

Schüttle deinen micro:bit und sieh nach, ob das korrekte Symbol für Stein, Papier oder Schere angezeigt wird. Wenn nicht, überprüfe deinen Code. Du kannst auch den Simulator auf der linken Seite nutzen, um deinen Code zu testen.

### Reiche den ersten Meilenstein deines Projekts ein

Wenn du mit deinem Code zufrieden bist, trenne den micro:bit, indem du das USB-Kabel abziehst, klicke den ``|Download|``-Button, um den Code auf deinen Computer herunterzuladen. Lade die .hex-Datei in der Aufgabe in deinem Lernmanagementsystem hoch.

#### Metadaten (für Suche, Darstellung verwendet)

* für PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

```validation.global
# BlocksExistValidator
* markers: validate-exists
```
