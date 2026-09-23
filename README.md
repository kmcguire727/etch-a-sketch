# Etch-A-Sketch
## A simple HTML/CSS/JS package to perform etch-a-sketch style visual functionality using DOM manipulation 

### High-level approach
#### HTML
 - Body div with class container that can be used to apply the individual grid squares created via JS DOM manipulation
 - Body holds a button to trigger a simple class removal for the modified divs created

#### CSS
 - Pulled CSS content (colors, font preferences) from Simple CSS defaults
 - Use Flexbox to center UI, and enable flex-wrap for the container

#### JavaScript
 - Calculate the number of squares needed to cover the etch-a-sketch, and create the grid using a simple loop 
 - Use a single event listener on the container and leverage event bubbling to find the right square to color via class addition and coordinating CSS
