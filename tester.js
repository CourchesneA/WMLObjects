//Tester I used to run q1.js and q2.js

var prereqList = [materialO,plasticO,metalO,attachmentO,holedO,shankO, buttonO, cons, car, cdr, buttoncollection, addrow, addrows];
var baseEnv = createEnv(null);
for(var i=0; i<prereqList.length; i++){
    evalWML(parseOuter(prereqList[i]),baseEnv);
}

var test1 = "{: plastic | chemical | {: `| arg | {{ #ifeq | {{{ arg }}} | getchemical | {{{ chemical }}} |     {{ #ifeq | {{{ arg }}} | getcost | 500 |  {{  #ifeq | {{{arg}}} | tostring |   | not a func  }}        }} }} :}  :}";
var test2 = "{:talkaboutbutton|b|button definition as string:.{{ {{{b}}}|getmaterial}}.  :} {{talkaboutbutton|{{button|metal|holed|6|yes|4}} }}";
var test21 = "{:talkaboutattachment|a|attachment definition as string:{{ {{{a}}}|tostring}}  :} {{talkaboutattachment|{{attachment|{{attachment|{{holed|6}} }} }} }}"
var test22 = "{:talkaboutbutton|b|button definition as string:{{ {{{b}}}|getnumber}}  :} {{talkaboutbutton|{{button |metal|holed|6|yes|4 }} }}";

var test3 = "{{cdr | {{ cdr | {{  cons | a | {{ cons |b |c }}  }} }} }}";
var test4 = "{{ buttoncollection | {{ cons | {{button |metal|holed|4|yes|4 }} | {{ cons | {{button |metal|shank|2|yes|yes }} | {{ cons | {{button |plastic|holed|8|plywood|4 }} | {{cons | {{button |metal|holed|8|no|1 }} | null }}  }}  }} }} | MightyButtons }}"


console.log(evalWML(parseOuter(test4),baseEnv));
