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
            tree();
        }
    });


    // event listener for character field for enter key
    var tree_char_input_field = document.querySelector('input[class="char_input_field"]');
     tree_char_input_field.addEventListener('keypress', function(keyboard_event){
        if (keyboard_event.keyCode == 13) {
            tree();
        }
    });


    // Add event listener to grow button

    var grow_button = document.querySelector('input[name="make_tree"]');
    grow_button.addEventListener('click', tree);


// Mah beautiful tree
var the_tree = {

    height: 0,
    char: ""
}


function tree (tree) {
    //console.log("Tree Function Called");

    // Get height input value and store it
    the_tree.height = document.querySelector('input[class="height_input_field"]').value;


    // Get char input value and store it
    the_tree.char = document.querySelector('input[class="char_input_field"]').value;


    // Check to see if height and char inputs have values

    if (the_tree.height === '' || the_tree.char === '') {
        alert('Both fields must have a value to make a tree.')
        return false;
    }

    else {

        var tree_decrement = the_tree.height;
        var tree_space = " ";

        console.clear();

        for (var i = 1; i < the_tree.height; i++) {

            console.log(tree_space.repeat(tree_decrement - 1) + the_tree.char.repeat(i) + the_tree.char.repeat(the_tree.height - tree_decrement))

            tree_decrement--;

        }

    }

}

// tree(the_tree);
