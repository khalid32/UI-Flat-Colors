# Flat-UI-Colors

[![npm version](https://badge.fury.io/js/ui-flat-colors.svg)](https://badge.fury.io/for/js/ui-flat-colors)

This simple package is a collection of 280 colors from https://flatuicolors.com/ to use it on `react-native`.

## Installation

Using npm:
```bash
npm install --save ui-flat-colors
# or
yarn add ui-flat-colors
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

#### `FlatUI()` Palette v1:

![Flat_UI_palette_v1](https://user-images.githubusercontent.com/8571179/62419777-619ebf80-b6aa-11e9-8662-848ac4296c71.png)

| | | | | |
| --- | --- | --- | --- | --- |
| cyan | green | blue | lightGray | black |
| darkCyan | darkGreen | darkBlue | white | darkBlack |
| yellow | orange | red | purple | gray |
| darkYellow | darkOrange | darkRed | darkPurple | darkGray |


#### `American()` Palette:

![American_Palette](https://user-images.githubusercontent.com/8571179/62420182-d6c0c380-b6af-11e9-84f6-47d50980ed8b.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightGreen | lightSky | lightBlue | lightPurple | white |
| green | sky | blue | purple | gray |
| lightYellow | lightOrange | lightRed | lightPink | darkGray |
| yellow | orange | red | pink | black |


#### `Aussie()` Palette:

![Aussie_Palette](https://user-images.githubusercontent.com/8571179/62420273-2489fb80-b6b1-11e9-9a1f-88bba43eba4f.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightYellow | lightOrange | lightRed | lightGreen | white |
| yellow | orange | red | green | gray |
| lightSky | lightPink | lightBlue | deepBlue | darkGray |
| sky | pink | blue | deepDarkBlue | black |


#### `British()` Palette:

![British_Palette](https://user-images.githubusercontent.com/8571179/62420340-68313500-b6b2-11e9-95a9-ae8b834e154b.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightSky | lightPurple | lightYellow | green | blue |
| sky | purple | yellow | darkGreen | navalBlue |
| lightRed | white | grayBlue | deepBlue | blackOne |
| red | darkWhite | darkGrayBlue | deepDarkBlue | blackTwo |


#### `Canadian()` Palette:

![Canadian_palette](https://user-images.githubusercontent.com/8571179/62421237-7423f380-b6c0-11e9-9b1a-5c23048ea644.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightPink | lightYellow | lightRed | lightSky | lightGreen |
| pink | yellow | red | sky | green |
| lightCyan | lightBlue | lightPurple | white | gray |
| cyan | blue | purple | lightGray | black |


#### `Chinese()` Palette:

![Chinese_Palette](https://user-images.githubusercontent.com/8571179/62421330-c1ed2b80-b6c1-11e9-8554-df9b5c02bf69.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightOrange | lightRed | lightPink | lightGray | darkGray |
| orange | red | pink | gray | black |
| lightGreen | lightSky | lightBlue | lightWhite | darkWhite |
| green | sky | blue | white | darkerWhite |


#### `Dutch()` Palette:

![Dutch_Palette](https://user-images.githubusercontent.com/8571179/62421406-fe6d5700-b6c2-11e9-89b2-1e1256f79baa.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lighterOrange | lighterGreen | lightSky | lighterPink | pink |
| lightOrange | lightGreen | lightCyan | lightPink | darkPink |
| orange | green | sky | lightPurple | purple |
| red | cyan | darkBlue | darkPurple | darkerPurple |


#### `French()` Palette:

![French_Palette](https://user-images.githubusercontent.com/8571179/62422027-9708d480-b6cd-11e9-9117-78888ceca2c3.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightYellow | lightRed | lightBlue | lightSky | lightGreen |
| yellow | red | blue | sky | green |
| lightOrange | darkRed | darkBlue | darkSky | lightCyan |
| orange | pink | darkerBlue | darkerSky | cyan |


#### `German()` Palette:

![German_Palette](https://user-images.githubusercontent.com/8571179/62422089-c10ec680-b6ce-11e9-9022-2d9bd3877255.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightRed | lightOrange | lightYellow | lightGreen | lightCyan |
| red | orange | yellow | green | cyan |
| lightSky | lightBlue | lightPurple | white | darkGray |
| sky | blue | purple | lightGray | black |


#### `Indian()` Palette:

![Indian_Palette](https://user-images.githubusercontent.com/8571179/62422216-99b8f900-b6d0-11e9-809c-85170b5163ef.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightOrange | lightSky | yellow | cyan | white |
| orange | sky | lightYellow | darkCyan | black |
| darkPink | blue | lightPink | lightCyan | lightPurple |
| darkerPink | darkBlue | pink | grayYellow | purple |


#### `Russian()` Palette:

![Russian_Palette](https://user-images.githubusercontent.com/8571179/62422358-28c71080-b6d3-11e9-9374-6d52d8152934.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightOrange | lightYellow | lightBlue | lightRed | darkPink |
| orange | yellow | blue | red | darkerPink |
| lightPurple | lighterPink | lightSky | pinker | gray |
| purple | lightPink | sky | pink | black |


#### `Spanish()` Palette:

![Spanish_Palette](https://user-images.githubusercontent.com/8571179/62424144-8caa0300-b6ec-11e9-9bee-ba075d6d5365.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightOrange | lightBlue | white | lightSky | lightGreen |
| orange | blue | darkGray | sky | green |
| lightRed | darkBlue | lightGray | yellow | lightYellow |
| red | darkerBlue | black | darkYellow | grayYellow |


#### `Swedish()` Palette

![Swedish_Palette](https://user-images.githubusercontent.com/8571179/62424233-d8a97780-b6ed-11e9-9ee2-275ebaaceb10.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightPink | lightBlue | lightSky | lightCyan | lightGreen |
| pink | blue | sky | cyan | green |
| lightOrange | lightYellow | lightRed | white | darkGray |
| orange | yellow | red | gray | black |


#### `Turkish()` Palette

![Turkish_Palette](https://user-images.githubusercontent.com/8571179/62424307-faefc500-b6ee-11e9-8a3f-fe25873d1135.png)

| | | | | |
| --- | --- | --- | --- | --- |
| lightPurple | lightPink | lightRed | lightOrange | lightYellow |
| purple | pink | red | orange | yellow |
| lightGreen | lightSky | lightCyan | lightBlue | gray |
| green | sky | cyan | blue | black |
