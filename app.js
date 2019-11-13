
function changeArray() {
    const arr1 = document.getElementById('arr1').value.replace(/\s+/g, " ").split(" ");
    const str = document.getElementById('str').value;
    const arr2 = [];
    for (let i = 0; i < 9; ++i) {
        if (str.charAt(i) == 1)
            arr2.push(arr1[i]);
    }
    document.getElementById('out_txt').value = arr2;
    console.log(arr2);
}
