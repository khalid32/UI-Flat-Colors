/*
    Here is a simple code to use 280 colors on web & app design. Here I focus on "RGBA" format so developer can also control opacity. 
    For example, you can invoke functions as `FlatUI().black` where opacity is by default 1 when argument is blank.
    You don't need to put floating number; just place a number range [0, 9] to control opacity.
*/

import flatUI from './src/flatUI';
import american from './src/americanUI';
import aussie from './src/aussieUI';
import british from './src/britishUI';
import canadian from './src/canadianUI';
import chinese from './src/chineseUI';
import dutch from './src/dutchUI';
import french from './src/frenchUI';
import german from './src/germanUI';
import indian from './src/indianUI';
import russian from './src/russianUI';
import spanish from './src/spanishUI';
import swedish from './src/swedishUI';
import turkish from './src/turkishUI'

const FlatUI = (v) => flatUI(v);
const American = (v) => american(v);
const Aussie = (v) => aussie(v);
const British = (v) => british(v);
const Canadian = (v) => canadian(v);
const Chinese = (v) => chinese(v);
const Dutch = (v) => dutch(v);
const French = (v) => french(v);
const German = (v) => german(v);
const Indian = (v) => indian(v);
const Russian = (v) => russian(v);
const Spanish = (v) => spanish(v);
const Swedish = (v) => swedish(v);
const Turkish = (v) => turkish(v);

export { American as default, FlatUI, Aussie, British, Canadian, Chinese, Dutch, French, German, Indian, Russian, Spanish, Swedish, Turkish };