function lexicalScope(){
  a();
  function a(){
    c();
    function c(){
        console.log(b);
    }
  }
}
var b = 10;
lexicalScope();

// LEXICAL SCOPE 
// Code has access to it's current local environment and lexical scope of it's parent
// Lexical means in order or in hierarchy
// Think as GEC memory and code reference created for each function call or invokation