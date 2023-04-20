function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b = 10;
a()

/**
 * CODE EXECUTION
 * GEC --main
 *    b- 10
 *    GEC a
 *       GEC c    
 * LEXICAL ENVIRONMENT - here c has access to all it's parent and local scope
 * 
 */