function catAndMouse(x, y, z) {
    let distCatA = Math.abs(x - z);
    let distCatB = Math.abs(y - z);
    // let message = "";
    if (distCatA > distCatB) return "Cat B";
    else if (distCatA < distCatB) return "Cat A";
    else return "Mouse C";
}