/* --------------------------------- */
/* Don't merge untill you are told to*/
/* --------------------------------- */


// Finish by Monday?


/*
Create a tree function that should build a pine tree out of a
 character in the Chrome dev tools console.
It accepts a single object as an argument.
The object should have two key/value pairs.
A key that specifies the height of the pine tree.
The value for the height of the tree should be from user input
in a <input type="text"> field in the DOM.
A key that specifies which character to use to build the pine tree.
The character to use should be from user input in a <input type="text">
field in the DOM.
Once the user enters in a number, and a character, the user can either
then just press the enter key (as long as the cursor is in one of the
input fields), or click a button that is labeled "Grow your tree" and
the tree should be shown in the console. This requires you to add an
 event listener to the button, as well as an event listener for the
  enter/return key.
If either of the input fields does not have a value in it when
the user presses the enter key, or presses the button, then display
an alert stating that both fields must have a value.
Grow your tree
*/



// Add event listeners to inputs

    // event listener for height field for enter key
    var tree_height_input_field = document.querySelector('input[class="height_input_field"]');
    tree_height_input_field.addEventListener('keypress', function(keyboard_event){
        if (keyboard_event.keyCode == 13) {
            tree(get_tree_specs());
        }
    });


    // event listener for character field for enter key
    var tree_char_input_field = document.querySelector('input[class="char_input_field"]');
     tree_char_input_field.addEventListener('keypress', function(keyboard_event){
        if (keyboard_event.keyCode == 13) {
            tree(get_tree_specs());
        }
    });


    // Add event listener to grow button

    var grow_button = document.querySelector('input[name="make_tree"]');

    grow_button.addEventListener('click', function(){
        tree(get_tree_specs())});


    /* Notes */

    /*

    make separate get_tree_specs function

    return that function as an argument

    // the mouse event click listener was recieving new height and char properties

    */



function get_tree_specs () {
    var tree = {}

    // Get height input value and store it
    //the_tree.height = document.querySelector('input[class="height_input_field"]').value;

    tree.height = document.querySelector('input[class="height_input_field"]').value;

    // Get char input value and store it
    //the_tree.char = document.querySelector('input[class="char_input_field"]').value;
    tree.char = document.querySelector('input[class="char_input_field"]').value;

    return tree;
}


function tree (tree_specs) {
    console.log("Tree Function Called");

    // Check to see if height and char inputs have values

    if (tree_specs.height === '' || tree_specs.char === '') {
        alert('Both fields must have a value to make a tree.')
        return false;
    }

    else {

        var tree_decrement = tree_specs.height;
        var tree_space = " ";

        // Clear console to make more trees
        console.clear();

        // Figure out colors
        //console.log('%cHello World','background:green;color:#fff')
        //console.log('%c' + tree_space, 'background:green')

        for (var i = 0; i < tree_specs.height; i++) {

            if (i === 0) {
                console.log(tree_space.repeat(tree_decrement - 1) + '%c' +  tree_specs.char.repeat(i + 1) + tree_specs.char.repeat(tree_specs.height - tree_decrement), 'background:green;color:yellow');
            }
            else if (i % 2) {
                console.log(tree_space.repeat(tree_decrement - 1) + '%c' +  tree_specs.char.repeat(i + 1) + tree_specs.char.repeat(tree_specs.height - tree_decrement), 'background:green;color:blue');
            }
            else if (i % 3) {
                console.log(tree_space.repeat(tree_decrement - 1) + '%c' +  tree_specs.char.repeat(i + 1) + tree_specs.char.repeat(tree_specs.height - tree_decrement), 'background:green;color:tomato');
            }
            else {
                console.log(tree_space.repeat(tree_decrement - 1) + '%c' +  tree_specs.char.repeat(i + 1) + tree_specs.char.repeat(tree_specs.height - tree_decrement), 'background:green;color:goldenrod');
            }

            tree_decrement--;

        }

    }

}

// tree(the_tree);

/* --------- Notes to future self --------------- */
/*


    Break down functions into their simplest form and separate them

        get tree specs

        make the tree


    When using event handlers, make sure you dont add additional properties to them
        if you are using objects as arguments


    Use the debugger tools more often to pin point problems with your code



    http://stackoverflow.com/questions/7505623/colors-in-javascript-console

    //for custom colored text
    console.log('%cHello World','color:blue');
    //here blue could be replaced by any color code

    //for custom colored text with custom background text
    console.log('%cHello World','background:red;color:#fff')



*/
