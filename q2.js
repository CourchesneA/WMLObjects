/*
Anthony Courchesne
anthony.courchesne@mail.mcgill.ca
260688650
Comp302 Assignment 4
December 2016
*/

//Those strings should be evaluated to define the function in the current environment. See tester.js for my implementation to do this

var buttoncollection = "{: buttoncollection | buttons | title | filter | <table border=\"1\"><tr><th>{{{title}}}</th></tr> {{ #ifeq|{{{filter}}}|platic| {{ addrow|{{{buttons}}}|{{{filter}}} }}|{{#ifeq|metal|{{{filter}}}| {{ addrow|{{{buttons}}}|{{{filter}}} }}| {{ addrows|{{{buttons}}} }} }} }} </table> :}";   //TODO handle empty filter
var addrow = "{: addrow|buttons|filter|{{ #ifeq |{{ {{car | {{{buttons}}} }}|getmaterial}}|{{{filter}}}| <tr><td>{{ {{car|{{{buttons}}} }}|tostring}}</td></tr>   {{#ifeq|{{cdr | {{{buttons}}} }}|null|  | {{addrow | {{cdr | {{{buttons}}} }} |{{{filter}}} }} }}|{{#ifeq|{{cdr | {{{buttons}}} }}|null|  | {{addrow | {{cdr | {{{buttons}}} }} |{{{filter}}} }} }} }}:}" ;//empty then part
var addrows = "{: addrows|buttons|filter|<tr><td>{{ {{car|{{{buttons}}} }}|tostring}}</td></tr>   {{#ifeq|{{cdr | {{{buttons}}} }}|null|  | {{addrows | {{cdr | {{{buttons}}} }} |{{{filter}}} }} }}:}";
var bnd = "{:checkbound|filter|{{#ifeq|{{{filter}}}|metal|metal|{{#ifeq|{{{filter}}}|plastic|plastic| {{car | {{{buttons}}} }}|getmaterial}} }}:}";