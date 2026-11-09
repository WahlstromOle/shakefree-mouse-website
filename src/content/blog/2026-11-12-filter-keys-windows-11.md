---
title: "Filter Keys: stop repeated and accidental key presses"
description: "How to set up Filter Keys in Windows 11 so a shaky hand types each letter once: which of the three options to choose, how to set the waiting times, and what to do if typing suddenly stops working."
summary: The three Filter Keys options explained, how to tune them for a tremor, and how to fix a keyboard that seems to ignore you.
keyword: filter keys windows 11
topic: computer-setup
date: 2026-11-12
readTime: 6
image: images/filter-keys-windows-11.webp
imageWidth: 1448
imageHeight: 965
imageAlt: A person typing on a black keyboard at a desk with two monitors
lead: "With a hand tremor, one press can become two or three, and a finger resting on a key can fill a line with letters. Filter Keys is a free Windows setting that makes the keyboard ignore presses that are too short, too quick or repeated, so what you meant to type is what appears."
---

To turn on Filter Keys in Windows 11, press the **Windows key and U**, select **Keyboard**, and switch on **Filter keys**. Then select the arrow next to it and choose which kind of mistake you want Windows to ignore. Most people with a tremor start with **Ignore unintended keystrokes**, which stops doubled letters.

Our [guide to Windows 11 accessibility settings for hand tremors](/windows-11-accessibility-tremor) gives a short overview. This guide goes further: what each option does, how to choose the waiting times, and how to fix things when Filter Keys gets in the way.

## Which problem do you have?

Filter Keys has three options, and each one fixes a different typing problem. Match the problem first, then turn on only the option you need.

| What happens when you type | Option to try | Its other name |
|---|---|---|
| Letters appear twice ("thhe", "helllo") | **Ignore unintended keystrokes** | Bounce keys |
| Stray letters from keys you brushed on the way | **Ignore quick keystrokes** | Slow keys |
| A key you rest on repeats across the line | **Ignore repeated keystrokes** | Repeat keys |

You can combine them later if you need to, but one at a time makes it much easier to tell what helps.

## How to turn on Filter Keys

1. Press the **Windows key and U** together. **Settings** opens at **Accessibility**.
2. Scroll down to **Interaction** and select **Keyboard**.
3. Turn on the **Filter keys** switch.
4. Select the arrow next to the switch to open its options.
5. Turn on the option that matches your problem from the table above.

<!-- SCREENSHOT: Settings > Accessibility > Keyboard > Filter keys page, with the three options and their drop-downs visible -->

Microsoft describes Filter Keys as a way to set the keyboard's sensitivity so it ignores brief or repeated keystrokes. The settings are saved for your own Windows account.

## Ignore unintended keystrokes: for doubled letters

After you press a key, Windows waits a short moment before it will accept that same key again. A shaky second press inside that moment is simply ignored.

Use the drop-down under the option to set how long Windows waits. A good way to find your setting:

1. Start with the shortest time.
2. Type a few lines as you normally would, for example an email to yourself.
3. If you still see doubled letters, choose the next longer time and try again.

Stop at the shortest time that stops the doubles. If the wait is too long, words with genuine double letters, such as "letter" or "coffee", can lose a letter when you type quickly. If that happens, go back one step.

## Ignore quick keystrokes: for keys you brush by accident

With this option, a key only counts if you hold it down for a moment. Quick, accidental touches on the way to the right key are ignored.

This helps if your fingers land on neighbouring keys before they settle on the one you want. The cost is that every key now needs a slightly longer press, so typing feels slower at first. Choose a short waiting time to start with, and lengthen it only if stray letters still get through.

If you rest your hands on the keyboard between words, this option can also stop those resting fingers from typing.

## Ignore repeated keystrokes: for keys that run on

Normally, holding a key down makes it repeat: "aaaaaaa". With a tremor it's easy to hold a key a fraction too long. This option makes Windows wait longer before a held key starts repeating, and slows the repeats down.

There is also a separate, older setting for the same thing that works whether or not Filter Keys is on:

1. Press the **Windows key**, type **keyboard**, and open **Keyboard** (the Control Panel item).
2. On the **Speed** tab, move **Repeat delay** towards **Long** and **Repeat rate** towards **Slow**.
3. Select **OK**.

<!-- SCREENSHOT: Keyboard Properties > Speed tab, with Repeat delay and Repeat rate sliders. Check on your PC: in some newer Windows 11 versions these sliders may have moved to Settings > Accessibility > Keyboard -->

## The other switches on the Filter Keys page

Below the three options there are a few more switches. Check them once:

- **Keyboard shortcut for Filter keys.** When this is on, holding the right **Shift** key for eight seconds turns Filter Keys on or off. That's handy if you want to switch it quickly, but with a tremor it's also easy to trigger by accident. If Filter Keys keeps switching itself on or off, turn this shortcut off.
- **Sounds and a taskbar icon.** You can have Windows beep when a key is accepted, and show a small Filter Keys icon on the taskbar. The icon is a useful reminder that it's on.

<!-- SCREENSHOT: the lower part of the Filter keys page showing the shortcut, sound and taskbar icon switches -->

## When Filter Keys gets in the way

**"My keyboard has stopped typing, or types very slowly."**
This is the most common surprise. It usually means **Ignore quick keystrokes** is on with a long waiting time, so short presses don't count. Hold each key down a little longer, or press the **Windows key and U**, open **Keyboard** and either shorten the time or turn the option off. If you can't type at all, hold the right **Shift** key for eight seconds to switch Filter Keys off.

**"Filter Keys turned on by itself."**
Probably the right **Shift** shortcut. Turn off **Keyboard shortcut for Filter keys** as described above.

**"It works on my laptop keyboard but not my other keyboard."**
Filter Keys is a Windows setting, so it should apply to every keyboard you plug in. If a keyboard came with its own software, check that app's settings too.

## Filter Keys and the mouse

Filter Keys only works on the keyboard. Windows has no matching setting that ignores accidental mouse clicks. For that, see [How to stop accidental double-clicks in Windows](/accidental-double-click), and for mouse movement, our [guide to smoothing software for tremors](/mouse-stabilizer-software).

## Frequently asked questions

**Which Filter Keys option is best for a tremor?**
It depends on the mistake. For doubled letters, **Ignore unintended keystrokes**. For stray letters from neighbouring keys, **Ignore quick keystrokes**. Many people only need the first one.

**Will Filter Keys slow down my typing?**
**Ignore quick keystrokes** does, a little, because each key needs a longer press. **Ignore unintended keystrokes** usually doesn't, as long as the waiting time is short.

**Is Filter Keys the same as Sticky Keys?**
No. Filter Keys ignores unwanted presses. [Sticky Keys](/windows-11-accessibility-tremor) lets you press shortcuts such as Ctrl and C one key at a time. You can use both together.

**Do I need to install anything?**
No. Filter Keys is built into Windows 11.

## A note on your health

Filter Keys makes typing easier; it doesn't treat a tremor. The NHS suggests seeing a GP if a tremor is getting worse over time or affecting your daily activities, so talk to your doctor if that's the case for you. An occupational therapist can also suggest equipment and ways of working that suit you.

## Sources

- [Make your mouse, keyboard, and other input devices easier to use](https://support.microsoft.com/en-us/accessibility/windows/make-your-mouse-keyboard-and-other-input-devices-easier-to-use) (Microsoft Support)
- [Windows keyboard shortcuts for accessibility](https://support.microsoft.com/en-us/accessibility/windows/windows-keyboard-shortcuts-for-accessibility) (Microsoft Support)
- [How to avoid unwanted keystrokes using Filter Keys in Windows 11](https://mcmw.abilitynet.org.uk/how-to-avoid-unwanted-keystrokes-using-filter-keys-in-windows-11) (AbilityNet, My Computer My Way)
- [Using a computer if you have tremors](https://abilitynet.org.uk/blog/using-computer-if-you-have-tremors) (AbilityNet)
- [Tremor or shaking hands](https://www.nhs.uk/conditions/tremor/) (NHS)
