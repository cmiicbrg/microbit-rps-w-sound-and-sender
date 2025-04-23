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

Klicke auf die Kategorie ``||input:Eingabe||`` in der Werkzeugkiste. Ziehe den ``||input:wenn geschüttelt||`` Block auf die Arbeitsfläche. Dieser Block wird den Code in ihm ausführen, wenn der micro:bit geschüttelt wird.

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

## {Schritt 16}

Um den Funk zu nutzen, müssen wir die Funkgruppennummer festlegen. Klicke auf die Kategorie ``||radio:Funk||`` in der Werkzeugkiste. Ziehe den ``||radio:setze Funkgruppe auf||`` Block und setze ihn in den ``||basic:beim Start||`` Block.
Statt 0 oder 88 solltest du eine beliebige Zahl zwischen 0 und 255 wählen, die noch nicht auf der Tafel steht. Diese Zahl wird verwendet, um die Gruppe von micro:bits zu identifizieren, die miteinander kommunizieren können. Wenn du mit einem micro:bit in einer anderen Gruppe kommunizieren möchtest, musst du die Funkgruppennummer auf beiden micro:bits ändern.

Schreibe die Zahl, die du gewählt hast auf die Tafel!

```blocks
basic.showIcon(IconNames.Heart)
// @highlight
radio.setGroup(88)
```

## {Schritt 17}

Nun müssen wir einige weitere Variablen erstellen.

- "winCount", um zu verfolgen, wie oft wir gewonnen haben
- "otherHand", um die Hand des anderen Spielers zu verfolgen
- "mayReceive", um zu verfolgen, ob wir berechtigt sind, eine Nachricht zu empfangen

Klicke auf die Kategorie ``||variables:Variablen||`` in der Werkzeugkiste. Klicke auf den Button ``|Erstelle eine Variable|``. Erstelle die Variablen "winCount", "otherHand" und "mayReceive".

![Eine Animation, die zeigt, wie man eine Variable erstellt](/static/mb/projects/rock-paper-scissors/newvar.gif)

## {Schritt 18}

Nach dem Start des Spiels müssen wir die Variable "mayReceive" auf wahr setzen. Dies ermöglicht es uns, die Hand des anderen Spielers zu empfangen.

Klicke auf die Kategorie ``||variables:Variablen||`` in der Werkzeugkiste. Ziehe den Block ``||variables:setze mayReceive auf||`` und setze ihn in den ``||basic:beim Start||`` Block. Gehe zur Kategorie ``||logic:Logik||`` und ziehe den ``||logic:wahr||`` Block in den ``||variables:setze mayReceive auf||`` Block anstelle der ``||Math:0||``.

```blocks
basic.showIcon(IconNames.Heart)
radio.setGroup(88)
// @highlight
mayReceive = true
```

## {Schritt 19}

Knopf A wird verwendet, um eine Runde des Spiels zu starten. Wenn wir Knopf A drücken, setzen wir die Variable "mayReceive" auf wahr und die Variable "hand" auf 0. Wir zeigen auch ein Häkchen auf dem LED-Bildschirm an.

Klicke auf die Kategorie ``||input:Eingabe||`` in der Werkzeugkiste. Ziehe den Block ``||input:wenn Knopf A geklickt||`` und setze ihn in die Arbeitsfläche.

Dupliziere den Block ``||variables:setze mayReceive auf||`` aus dem ``||basic:beim Start||``, indem du mit der rechten Maustaste darauf klickst und **Duplizieren** auswählst. Verschiebe den duplizierten Block in den Block ``||input:wenn Knopf A geklickt||``.

Du solltest bereits wissen, wie man die Variable "hand" auf 0 setzt und ein Häkchen auf dem LED-Bildschirm anzeigt.

```blocks
// @highlight
input.onButtonPressed(Button.A, function () {
    mayReceive = true
    hand = 0
    basic.showIcon(IconNames.Yes)
})
```

## {Schritt 20}

Wenn die Knöpfe A und B gleichzeitig gedrückt werden, werden wir das Spiel zurücksetzen.

Setze die Variablen:

- "mayReceive" auf wahr
- "hand" auf 0
- "winCount" auf 0

Zeige ein Herz auf dem LED-Bildschirm an.

Der einfachste Weg, dies zu erreichen, ist, mit der rechten Maustaste auf den Block ``||input:wenn Knopf A geklickt||`` zu klicken und **Duplizieren** auszuwählen. Klicke dann auf das **A** im neuen Block und wähle **A+B**.

```blocks
// @highlight
input.onButtonPressed(Button.AB, function () {
    mayReceive = true
    hand = 0
    basic.showIcon(IconNames.Heart)
    winCount = 0
})
```

## {Schritt 21}

Wenn Knopf B gedrückt wird, zeigen wir die Anzahl der Siege an.

Klicke auf die Kategorie ``||input:Eingabe||`` in der Werkzeugkiste. Ziehe den Block ``||input:wenn Knopf A geklickt||`` und setze ihn in die Arbeitsfläche. Ändere das **A** im neuen Block auf **B**. Klicke auf die Kategorie ``||basic:Grundlagen||`` in der Werkzeugkiste. Ziehe einen ``||basic:zeige Zahl||`` Block heraus und setze ihn in den Block ``||input:wenn Knopf B geklickt||``.
Anstelle von 0, ziehe den Block ``||variables:winCount||`` in den Block ``||basic:zeige Zahl||``.

```blocks
input.onButtonPressed(Button.B, function () {
// @highlight
    basic.showNumber(winCount)
})
```

## {Zeit zum Testen! @showdialog}

### Zeit zum Testen

Nach jedem Schritt, in dem du etwas geändert hast, das du unmittelbar sehen kannst, solltest du dein Programm testen. Verbinde den micro:bit über ein USB-Kabel mit deinem Computer und stelle sicher, dass WebUSB verbunden ist. Klicke auf den ``|Download|``-Button, um den Code auf den micro:bit zu übertragen. Teste die Knöpfe A, B, A+B und schüttle den micro:bit, um zu sehen, ob das Spiel wie erwartet funktioniert.

## {Schritt 22}

Nachdem der micro:bit geschüttelt wurde, müssen wir auch die Nummer der Hand, die wir gewählt haben, senden.

Verwende den Block ``||radio:sende Zahl über Funk||``, um die Nummer der Hand, die wir gewählt haben, zu senden. Dieser Block sollte am Ende des Blocks ``||input:wenn geschüttelt||`` platziert werden. Ersetze die **0** mit der Variablen **hand**.

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

## {Schritt 23}

Wenn wir eine Zahl vom anderen Spieler erhalten, müssen wir zunächst überprüfen, ob wir bereit sind, eine Nachricht zu empfangen.

Füge den Block ``||radio:wenn Zahl empfangen||`` hinzu. Füge einen ``||logic:wenn||`` Block innerhalb des ``||radio:wenn Zahl empfangen||`` Blocks hinzu. Ersetze den Logikwert **wahr** durch die Variable **mayReceive**.

```blocks
radio.onReceivedNumber(function (receivedNumber) {
// @highlight
    if (mayReceive) {
        
    }
})
```

## {Schritt 24}

Innerhalb der if-Bedingung setze die Variable "otherHand" auf die Zahl, die wir erhalten haben, und setze die Variable "mayReceive" auf falsch.

Um die Variable "otherHand" auf die empfangene Zahl zu setzen, ziehe den Block ``||variables:setze otherHand auf||`` in die ``||logic:wenn||``-Bedingung. Ersetze die **0** mit der Variable **receivedNumber**. Den Block **receivedNumber** erhältst du aus dem ``||radio:wenn Zahl empfangen||`` Block, indem du ihn herausziehst.

Außerdem müssen wir ``||variables:mayReceive||`` auf false setzen.

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

## {Schritt 25}

Es kann vorkommen, dass wir eine Zahl vom anderen Spieler erhalten haben, bevor wir unsere Hand gewählt haben. Wir müssen warten, bis wir unsere Hand gewählt haben (d.h. den micro:bit geschüttelt haben), bevor wir fortfahren.

Aus ``||loops:Schleifen||`` ziehe einen ``||loops:während||`` Block und setze ihn in die ``||logic:wenn||``-Bedingung. Ersetze **falsch** durch einen ``||logic:0 = 0||`` Vergleichsblock und ersetze die erste **0** mit der Variable **hand**.

Füge einen ``||basic:pausiere||`` Block innerhalb des ``||loops:während||`` Blocks hinzu und setze die Pausenzeit auf 500 ms.

Da wir unsere eigene Hand auf dem LED-Bildschirm nicht sehen würden, wenn wir die Hand des anderen unmittelbar nach dem Schütteln unseres eigenen micro:bit erhalten, fügen wir einen weiteren ``||basic:pausiere||`` Block nach dem ``||loops:während||`` Block hinzu und setzen die Pausenzeit auf 500 ms.

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

## {Schritt 26}

Nun müssen wir die beiden Hände vergleichen und den Gewinner ermitteln.

Füge einen ``||logic:wenn dann ansonsten||`` Block nach dem zweiten ``||basic:pausiere||`` Block hinzu. Verwende den ``||logic:0 = 0||`` Vergleichsblock aus der Kategorie ``||logic:Logik||`` als Bedingung statt dem ``||logic:wahr||``. Ersetze die erste **0** mit der Variablen ``||variables:hand||`` und die zweite **0** mit der Variablen ``||variables:otherHand||``.

In diesem Fall werden wir den String "Unentschieden" auf dem LED-Bildschirm anzeigen, weil die beiden Hände gleich sind.

Füge einen ``||basic:zeige Symbol||`` Block innerhalb des ``||logic:wenn||`` Blocks ein und verwende als Symbol das X (Nein).

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
            basic.showIcon(IconNames.No)
        } else {

        }
    }
})
```

## {Schritt 27}

Klicke auf das **+** Zeichen am unteren Rand des ``||logic:wenn dann ansonsten||`` Blocks (das innere wenn), um eine ``||logic:sonst wenn||`` Klausel hinzuzufügen.

Füge einen ``||logic:und||`` Block innerhalb der ``||logic:sonst wenn||`` Klausel ein. Setze einen ``||logic:0 = 0||`` Vergleichsblock in beide Slots des ``||logic:und||`` Blocks.

Im ersten Vergleichsblock ersetze die erste **0** mit der Variablen ``||variables:hand||`` und die zweite **0** mit 1.

Im zweiten Vergleichsblock ersetze die erste **0** mit der Variablen ``||variables:otherHand||`` und die zweite **0** mit 2.

In diesem Fall haben wir verloren, weil wir Stein gewählt haben und der andere Spieler Papier.

Füge einen ``||basic:zeige Symbol||`` Block innerhalb des ``||logic:sonst wenn||`` Blocks ein und verwende als Symbol das traurige Smiley 🙁.

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
            basic.showIcon(IconNames.No)
        } else if (hand == 1 && otherHand == 2) {
            basic.showIcon(IconNames.Sad)
        } else {

        }
    }
})
```

## {Schritt 28}

Füge zwei weitere ``||logic:sonst wenn||`` zum ``||logic:wenn||`` Block hinzu, indem du zweimal auf das **+** Zeichen am unteren Rand des ``||logic:wenn dann ansonsten||`` Blocks klickst (das ist das innere wenn).

Rechtsklicke den ``||logic:und||`` Block innerhalb des ersten ``||logic:sonst wenn||`` und wähle **Duplizieren**. Verschiebe den duplizierten ``||logic:und||`` Block in das zweite ``||logic:sonst wenn||``.

Wiederhole den letzten Schritt für das dritte ``||logic:sonst wenn||``.

Im zweiten ``||logic:sonst wenn||`` ersetze die **1** durch eine **2** und die **2** durch eine **3**.

Im dritten ``||logic:sonst wenn||`` ersetze die **1** durch eine **3** und die **3** durch eine **1**.

Zeige ein trauriges Smiley im zweiten und dritten ``||logic:sonst wenn||``.

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
            basic.showIcon(IconNames.No)
        } else if (hand == 1 && otherHand == 2) {
// @highlight
            basic.showIcon(IconNames.Sad)
        } else if (hand == 2 && otherHand == 3) {
// @highlight
            basic.showIcon(IconNames.Sad)
        } else if (hand == 3 && otherHand == 1) {
            basic.showIcon(IconNames.Sad)
        } else {
                
        }
    }
})
```

## {Schritt 29}

Es bleibt nur noch eine Möglichkeit übrig. Wenn wir nicht unentschieden gespielt und nicht verloren haben, dann haben wir gewonnen.

Füge einen ``||basic:show icon||`` Block innerhalb des ``||logic:ansonsten||`` Blocks ein und verwende ein ein glückliches Smiley 😀 als Symbol.

Füge einen ``||variables:ändere winCount um 1||`` Block innerhalb des ``||logic:ansonsten||`` Blocks ein.

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
            basic.showIcon(IconNames.No)
        } else if (hand == 1 && otherHand == 2) {
            basic.showIcon(IconNames.Sad)
        } else if (hand == 2 && otherHand == 3) {
            basic.showIcon(IconNames.Sad)
        } else if (hand == 3 && otherHand == 1) {
            basic.showIcon(IconNames.Sad)
        } else {
// @highlight
            basic.showIcon(IconNames.Happy)
// @highlight
            winCount += 1
        }
    }
})
```

## {Schritt 30}

In unserem Programm ist ein kleiner Fehler übrig geblieben. Wir müssen sicherstellen, dass wir unsere Hand nicht mehr als einmal in einer Runde ändern. Wir werden alles außer dem ``||radio:sende Zahl über Funk||`` im Block ``||input:wenn geschüttelt||`` mit einem ``||logic:wenn||`` Block umschließen. Wir werden die Hand nur ändern, wenn die Variable ``||variables:hand||`` 0 ist.

Füge einen ``||logic:wenn||`` Block am Anfang des ``||input:wenn geschüttelt||`` Blocks ein.

Verwende den ``||logic:0 = 0||`` Vergleichsblock aus der Kategorie ``||logic:Logik||``. Ersetze die erste **0** mit der Variablen ``||variables:hand||``.

Ziehe alles außer dem ``||radio:sende Zahl über Funk||`` Block in den ``||logic:wenn||`` Block.

```blocks
input.onGesture(Gesture.Shake, function () {
// @highlight
    if (hand == 0) {
        hand = randint(1, 3)
        if (hand == 1) {
            basic.showIcon(IconNames.SmallSquare)
        } else if (hand == 2) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
    }
    radio.sendNumber(hand)
})
```

## {Herzlichen Glückwunsch! Du hast das Schere, Stein, Papier-Spiel fertiggestellt. @showdialog}

### Zeit zu spielen

Finde jetzt jemanden zum Spielen. Du benötigst zwei micro:bits, um das Spiel zu spielen. Einigt euch auf eine der beiden Funkgruppennummern, die eure Gruppe (einer von euch beiden) auf die Tafel geschrieben hat und stellt die gleiche Gruppennummer auf beiden micro:bits ein, indem ihr die Zahl im Block ``||radio:setze Funkgruppe auf||`` ändert.

Schüttle deinen micro:bit, um deine Hand zu wählen, dein Freund wird das Gleiche tun. Nachdem ihr beide eure Hände gewählt habt, werden die micro:bits die Hände vergleichen und das Ergebnis auf dem LED-Bildschirm anzeigen.

### Herzlichen Glückwunsch! Du hast das Schere, Stein, Papier-Spiel fertiggestellt

Wenn du mit deinem Code zufrieden bist, trenne den micro:bit erneut, indem du das USB-Kabel abziehst, klicke den ``|Download|`` Button, um den Code auf deinen Computer herunterzuladen. Lade die .hex-Datei in der Aufgabe in deinem Lernmanagementsystem hoch.

#### Metadaten (für Suche, Darstellung verwendet)

- für PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

```validation.global
# BlocksExistValidator
    * enabled: true
```
