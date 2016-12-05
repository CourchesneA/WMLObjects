/*
Anthony Courchesne
anthony.courchesne@mail.mcgill.ca
260688650
Comp302 Assignment 4
December 2016
*/

//Those strings should be evaluated to define the function in the current environment. See tester.js for my implementation to do this

//a)
var plasticO = "{: plastic | chemical | {: `| arg | {{ #ifeq | {{{ arg }}} | getchemical | {{{ chemical }}} |  {{ #ifeq | {{{ arg }}} | getcost | cheap |    {{  #ifeq | {{{arg}}} | tostring | material: Plastic, type: {{{chemical}}}, cost: cheap |not a func}}    }} }} :}  :}";
var metalO = "{: metal | ferrous | {: `| arg | {{ #ifeq | {{{arg}}} | getferrous | {{{ ferrous }}} |    {{ #ifeq | {{{ arg }}} | getcost | expensive |    {{  #ifeq | {{{arg}}} | tostring | material: Metal, ferrous: {{{ferrous}}}, cost: expensive |not a func}}     }}  }} :} :}";

var materialO = "{:material|type|{:`|arg|{{#ifeq|{{{arg}}}|gettype|{{{type}}}|{{#ifeq|{{{arg}}}|getcost|{{ {{{type}}}|getcost}}|{{#ifeq|{{{arg}}}|tostring|{{ {{{type}}}|tostring }}|{{ {{{type}}}|{{{arg}}} }} }} }} }} :} :}";


var holedO = "{:  holed | number | {:  `| arg | {{ #ifeq | {{{arg}}} | getnumber | {{{ number  }}} |     {{  #ifeq | {{{arg}}} | tostring | attachment type: holed, holes: {{{number}}} |not a func}}      }} :} :}";
var shankO = "{:  shank | self-shank | {:  `| arg | {{  #ifeq | {{{arg}}} | getself-shank | {{{ number }}} |     {{  #ifeq | {{{arg}}} | tostring | attachment type: shank, self-shank: {{{self-shank}}} | not a func  }}       }} :}  :}";

var attachmentO = "{: attachment | technique | {:  `| arg | {{  #ifeq | {{{arg}}} | gettechnique | {{{technique}}} | {{  #ifeq | {{{ arg }}} | tostring | {{ {{{technique}}}|tostring }} | {{ {{{type}}}| {{{arg}}} }}  }}     }}  :} :}";


//b)
var buttonO = "{: button |dmaterial| dattachment | ligne | type | technique |{:bmaterial|{{ material|{{ {{{dmaterial}}}| {{{type}}} }} }}:} {:battachment|{{ attachment|{{ {{{dattachment}}}| {{{technique}}} }} }}:}{:`|arg|{{#ifeq|{{{arg}}}|getmaterial|{{{dmaterial}}}|{{#ifeq|{{{arg}}}|getattachment|{{{dattachment}}}|{{#ifeq|{{{arg}}}|gettype|{{ {{bmaterial}}|gettype}}|{{#ifeq|{{{arg}}}|gettechnique|{{ {{battachment}}|gettechnique}}|{{#ifeq|{{{arg}}}|getligne|{{{ligne}}}|{{#ifeq|{{{arg}}}|tostring|{{ {{bmaterial}}|tostring}}, {{ {{battachment}}|tostring}}, lignenumber: {{{ligne}}}|{{#ifeq|{{ {{ {{bmaterial}}|gettype}}|{{{arg}}} }}|not a func|{{ {{ {{battachment}}|gettechnique}}|{{{ arg }}} }}|{{ {{ {{bmaterial}}|gettype}}|{{{arg}}} }} }} }}  }}  }} }} }} }}:}:}";


//c)

ar cons = "{: cons | first | second | {:`|carg| {{#ifeq|{{{carg}}}|car|{{{first}}}|{{#ifeq|{{{carg}}}|cdr|{{{second}}}|not a func}} }} :} :}";
var car = "{: car | cons | {{ {{{cons}}}|car}}  :}";
var cdr = "{: cdr | cons | {{ {{{cons}}}|cdr}}  :}";    //we can assume list ends by the string null