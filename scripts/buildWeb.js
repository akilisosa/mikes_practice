

function buildWeb(event)
{

    //this is the function that builds the web. 
    //we declared these variables so that we can use them in css
    
    positionX = 250;
    positionDX = 250;

    positionY = 250;
    positionDY = 250;


    var createTOne = function() { 

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('id',  'tOne' );
    
        positionTOneX = positionX + positionDX - 250;
        positionTOneY = positionX + positionDX - 250;
    
        svg.setAttribute('style', 'z-index:2;  position:absolute;  left :'+positionTOneX+'; top:'+positionTOneY+'; fill: red;  border: 10px solid red;');
        svg.setAttribute('width', '250');
        svg.setAttribute('height', '250');
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.addEventListener("onclick", createTOne);
        svg.addEventListener('click',createTOne, false);
        document.body.appendChild(svg);
        
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('id', 'tThree' );
    
        positionTThreeX = positionX + positionDX;
        positionTThreeY = positionY + positionDY-250;
    
        svg.setAttribute('style', 'z-index:2;  position:absolute;  left :'+positionTThreeX+'; top:'+positionTThreeY+'; fill: red;  border: 10px solid red;');
    
        svg.setAttribute('width', '250');
        svg.setAttribute('height', '250');
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.addEventListener("onclick", createTThree);
        svg.addEventListener('click',createTThree, false);
        document.body.appendChild(svg);
        
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
        positionTTwoX = positionX+positionDX-250;
        positionTTwoY = positionY+positionDY;
    
        svg.setAttribute('style', 'z-index:2;  position:absolute;  left :'+positionTTwoX+'; top:'+positionTTwoY+'; fill: red;  border: 10px solid red;');
        svg.setAttribute('id',  'two' );
        svg.setAttribute('width', '250');
        svg.setAttribute('height', '250');
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        svg.addEventListener("onclick", createTTwo);
        svg.addEventListener('click',createTTwo, false);
        document.body.appendChild(svg);
        
    
        //then this needs to update and pass through a function. 
        positionX = positionX+250;
        positionY = positionY+250;
        }
        
        var createTTwo = function() {
        
            return undefined;
            
        }
        
        var createTThree = function() {
        
            return undefined;
        }
        
        var createTFour = function() {
        
            return undefined;
        }
        
        var createTFive = function() {
        
            return undefined;
        }
        
        var createTSix = function() {
        
            return undefined;
        }


    //going to create the four initial boxes that appear after you type in your search term.
    //they are labeled TYGH the four letters in the center of the keyboard. 
    //each represents a path that can move to the top left(T), top right(Y), bottom left(G) bottom right(h)
    //they each contains 6 different functions that continuously build and move the web


    //this is the namespace for the svg element it enables the javascript to create a svg element directly into the dom
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //we label this id T
    svg.setAttribute('id',  'T' );

    //calculate x position for svg attribute;
    var positionTX = positionX + positionDX -250;

    //calculate y position svg attribute
    var positionTY = positionY + positionDY -250;
    //this is the border of it, its technically css that you can use inline with svg
    svg.setAttribute('style', 'border: 8px solid black');
    //this moves the box relative to the other thing i need to put in the variable here .
     //you actually have to put it all in one line otherwise they rewrite eachother. 
    svg.setAttribute('style', 'position:absolute;z-index:2; left :'+positionTX+'; top:'+positionTY+';border: 8px solid black');


    //this creates the svg box, and sets the attributes
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createTOne);
    svg.addEventListener('click',createTOne, false);
    //this adds the object to the dom object
    document.body.appendChild(svg);



    //setY

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id',  'Y');
 //calculate x position for svg attribute;
   var positionYX = positionX + positionDX +250;

 //calculate y position svg attribute
   var positionYY = positionY + positionDY -250;

    svg.setAttribute('style', 'z-index:2;  position:absolute; left :'+positionYX+'; top:'+positionYY+'; fill: blue;  border: 10px solid blue;');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createTOne);
    svg.addEventListener('click',createTOne, false);
    document.body.appendChild(svg);

    //creates G element

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id',  'G');

     //calculate x position for svg attribute;
 var positionGX = positionX + positionDX -250;

 //calculate y position svg attribute
 var positionGY = positionY + positionDY +250;

    svg.setAttribute('style', 'z-index:2;  position:absolute;  left :'+positionGX+'; top:'+positionGY+'; fill: green;  border: 10px solid green;');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createTOne);
    svg.addEventListener('click',createTOne, false);
    document.body.appendChild(svg);


    // create the H block
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
         //calculate x position for svg attribute;
 var positionHX = positionX + positionDX +250;

 //calculate y position svg attribute
 var positionHY = positionY + positionDY +250;
    svg.setAttribute('id',  'H');
    svg.setAttribute('style', 'z-index:2;  position:absolute;  left :'+positionHX+'; top:'+positionHY+'; fill: red;  border: 10px solid red;');
    svg.setAttribute('width', '250');
    svg.setAttribute('height', '250');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.addEventListener("onclick", createTOne);
    svg.addEventListener('click',createTOne, false);
    document.body.appendChild(svg);

    }
