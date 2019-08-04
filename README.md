# Flat-UI-Colors

[![npm version](https://badge.fury.io/js/ui-flat-colors.svg)](https://badge.fury.io/for/js/ui-flat-colors)

This simple package is a collection of 280 colors from https://flatuicolors.com/ to use it on `react-native`.

## Installation

Using npm:
```bash
npm install --save ui-flat-colors
```

## Bundled Icon Sets

- [Flat UI Palette v1](https://flatuicolors.com/palette/defo)
- [American Palette](https://flatuicolors.com/palette/us)
- [Aussie Palette](https://flatuicolors.com/palette/au)
- [British Palette](https://flatuicolors.com/palette/gb)
- [Canadian Palette](https://flatuicolors.com/palette/ca)
- [Chinese Palette](https://flatuicolors.com/palette/cn)
- [Dutch Palette](https://flatuicolors.com/palette/nl)
- [French Palette](https://flatuicolors.com/palette/fr)
- [German Palette](https://flatuicolors.com/palette/de)
- [Indian Palette](https://flatuicolors.com/palette/in)
- [Russian Palette](https://flatuicolors.com/palette/ru)
- [Spanish Palette](https://flatuicolors.com/palette/es)
- [Swedish Palette](https://flatuicolors.com/palette/se)
- [Turkish Palette](https://flatuicolors.com/palette/tr)

## Usage

Here Its focus on `rgba()` format to control opacity. 

```javascript
import American from 'ui-flat-colors'; // American as default
// or
import { British } from 'ui-flat-colors';
// or
import { Canadian, Russian } from 'ui-flat-colors';
```

For example, you can invoke functions as `American().black` where opacity is by default 1 when argument is blank.

```javascript
backgroundColor: American().black,
```

You don't need to put floating number; just place a number range `[0, 9]` to control opacity.
```javascript
American(8).black
```

## Component Naming:

#### Flat UI Palette v1:

![Flat_UI_palette_v1](https://user-images.githubusercontent.com/8571179/62419777-619ebf80-b6aa-11e9-8662-848ac4296c71.png)

| | | | | |
| --- | --- | --- | --- | --- |
| cyan | green | blue | lightGray | black |
| darkCyan | darkGreen | darkBlue | white | darkBlack |
| yellow | orange | red | purple | gray |
| darkYellow | darkOrange | darkRed | darkPurple | darkGray |

```javascript
// example:
FlatUI().cyan
```

#### American Palette:

![American_Palette](https://user-images.githubusercontent.com/8571179/62420182-d6c0c380-b6af-11e9-84f6-47d50980ed8b.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightGreen | lightSky | lightBlue | lightPurple | white |
| green | sky | blue | purple | gray |
| lightYellow | lightOrange | lightRed | lightPink | darkGray |
| yellow | orange | red | pink | black |

```javascript
// example:
American().green
```

#### Aussie Palette:

![Aussie_Palette](https://user-images.githubusercontent.com/8571179/62420273-2489fb80-b6b1-11e9-9a1f-88bba43eba4f.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightYellow | lightOrange | lightRed | lightGreen | white |
| yellow | orange | red | green | gray |
| lightSky | lightPink | lightBlue | deepBlue | darkGray |
| sky | pink | blue | deepDarkBlue | black |

```javascript
// example:
Aussie().blue
```

#### British Palette:

![British_Palette](https://user-images.githubusercontent.com/8571179/62420340-68313500-b6b2-11e9-95a9-ae8b834e154b.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightSky | lightPurple | lightYellow | green | blue |
| sky | purple | yellow | darkGreen | navalBlue |
| lightRed | white | grayBlue | deepBlue | blackOne |
| red | darkWhite | darkGrayBlue | deepDarkBlue | blackTwo |

```javascript
// example:
British().red
```