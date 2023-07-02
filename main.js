timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

array_1 = ["Pen", "Bottle", "Chocolate", "Mobile phone", "Paper", "Flower"];
random_no = Math.floor((Math.random() * array_1.length) + 1);

Element_of_array = array_1[random_no];
console.log(Element_of_array);
document.getElementById("sketch_drawn").innerHTML = "Sketch To Be Drawn: " + Element_of_array;