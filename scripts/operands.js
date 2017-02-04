/*
    JavaScript data types:
        - number: allows to store numeric values
                  (both - integer and floating);
        - string: allows to store symbolic values
                  (by default in Unicode charset);
        - boolean: allows to store results of logical statements
                  with values true or false.

    Operands - in programming: data from representation.

    Kinds of operands: literals, constants and variables.

    Literal - is a single from the range of concrete data type.
              For example:
                    1) 5 is a number data type literal (any number,
                       that can be presented as 64-bits sequence);
                    2) 'hello' or 'A' is string data type literal;
                    3) true or false is boolean data type literal.

    Constant - is a named memory space, which data can not be changed.

    Variable - is a named memory space, which data may be changed.

    JavaScript variable kinds:
        - var keyword based variables behaves as a variable in common sense;
        - let keyword based variables behaves as a functional programming
          variable, that can be re-declared in nested scopes
*/

/* Constant example */
const PI = 3.14;

/* Let based viable example */
let l_radius = 5;
let l_area = l_radius * PI;
{
    let l_radius = 10;
    let l_area = l_radius * PI + 10;
    document.writeln(l_area + '<br/>'); //41.4
}
document.writeln(l_area); //15.7

/* Var based viable example */
var v_radius = 5;
var v_area = v_radius * PI;
{
    var v_radius = 10;
    var v_area = v_radius * PI + 10;
    document.writeln('<br/><br/>' + v_area + '<br/>'); //41.4
}
document.writeln(v_area); //41.4


/*
    Variables initialization and farther assignments
    ------------------------------------------------

    Initialization - is a first assignment:
                     storing to named memory space of some literal;

    Assignment - is a storing to named memory space of some literal,
                 including initialization.

    Declaration - is command to interpreter about of creation some
                  constant or variable. For example:
                             const A; //declaration
                             var b; //declaration
                             var c = 5; //declaration and initialization
                             c = 10; //(farther) assignment

    JavaScript memory allocation: when constant or variable is declared.
*/


/* Variable reassignment example */
var text = 'Hello';
//document.writeln(text + '<br/>'); //Hello
text = 'World';
//document.writeln(text); //World