
function changeArray() {
    const arr1 = document.getElementById('arr1').value.replace(/\s+/g, " ").split(" ");
    const str = document.getElementById('str').value;
    const arr2 = [];

    if (arr1.length != 9) {
        let err1 = document.getElementById('error1').innerHTML = 'First Array consist of' + ' ' + arr1.length + ' ' + 'elements. Need 9!';
        document.getElementById('error1').style.color = 'Red';
    } else {
        let complet1 = document.getElementById("error1").innerHTML = 'Array have ' + arr1.length + ' elements!';
        document.getElementById("error1").style.color = 'Green';

    for (let i = 0; i < 9; ++i) {
        if (str.charAt(i) == 1)
            arr2.push(arr1[i]);
    }
    document.getElementById('out_txt').value = arr2;
}
}
