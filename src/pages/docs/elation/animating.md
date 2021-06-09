# Animated Text

Animation is 12 fps.
An animation state is broken into two parts, the text, and the length that it is displayed.
`[boop,..]`: will display boop and hold it for two counts.
The `[ ]` represents a keyframe.

The number at the end of the string is how many times it repeats:

`[boop], [beep], [bolt]`
`[ [boop,..], [beep,...], [bolt,.]]`

<AnimatedText text={"[ [boop,..], [beep,...], [bolt,.]],0"}/>
