function triangleWork(){
    const triangle_base = getInputValue('triangle-base');
    const triangle_hight = getInputValue('triangle-hight');
    if(isNaN(triangle_base) || isNaN(triangle_hight)){
        alert('Please insert a valid number');
        return;
    }
    const triangle_result = 0.5 * triangle_hight * triangle_base;
    setText('triangle_result',triangle_result);
    calculationEntry('Triangle',triangle_result);
}
function rectangleWork(){
    const rectangle_width = getInputValue('rectangle_width');
    const rectangle_length = getInputValue('rectangle_length');
    if(isNaN(rectangle_width) || isNaN(rectangle_length)){
        alert('Please insert a valid number');
        return;
    }
    const rectangle_result = rectangle_width * rectangle_length;
    setText('rectangle_result',rectangle_result);
    calculationEntry('Rectangle',rectangle_result);
}
function parallelogramWork(){
    const parallelogram_base = getInputValue('parallelogram_base');
    const parallelogram_hight = getInputValue('parallelogram_hight');
    if(isNaN(parallelogram_base) || isNaN(parallelogram_hight)){
        alert('Please insert a valid number');
        return;
    }
    const parallelogram_result = parallelogram_hight * parallelogram_base;
    setText('parallelogram_result',parallelogram_result);
    calculationEntry('Parallelogram',parallelogram_result);
}
function rhombusWork(){
    const rhombus_d1 = getInputValue('rhombus_d1');
    const rhombus_d2= getInputValue('rhombus_d2');
    if(isNaN(rhombus_d1) || isNaN(rhombus_d2)){
        alert('Please insert a valid number');
        return;
    }
    const rhombus_result = 0.5 * rhombus_d1 * rhombus_d2;
    setText('rhombus_result',rhombus_result);
    calculationEntry('Rhombus',rhombus_result);
}
function pentagonWork(){
    const pentagon_side = getInputValue('pentagon_side');
    const pentagon_length = getInputValue('pentagon_length');
    if(isNaN(pentagon_side) || isNaN(pentagon_length)){
        alert('Please insert a valid number');
        return;
    }
    const pentagon_result = 5/2 * pentagon_side * pentagon_length;
    setText('pentagon_result',pentagon_result);
    calculationEntry('Pentagon',pentagon_result);
}
function ellipsework(){
    const ellipse_a = getInputValue('ellipse_a');
    const ellipse_b = getInputValue('ellipse_b');
    if(isNaN(ellipse_a) || isNaN(ellipse_b)){
        alert('Please insert a valid number');
        return;
    }
    const ellipse_result = Math.PI * ellipse_a * ellipse_b;
    setText('ellipse_result',ellipse_result);
    calculationEntry('Ellipse',ellipse_result);
}