
function changeArray() {
    const arr1 = document.getElementById('arr1').value.replace(/\s+/g, " ").replace(/^\s*/,'').replace(/\s*$/,'').split(" ");
    const str = document.getElementById('str').value;
    const arr2 = [];
    if (arr1.length != 9) {
        let err1 = document.getElementById('error1').innerHTML = 'First Array consist of' + ' ' + arr1.length + ' ' + 'elements. Need 9!';
        document.getElementById('error1').style.color = 'Red';

    } else if (str.length < 9) {
        let err1 = document.getElementById('error2').innerHTML = 'String must consist of 9 elements';
        document.getElementById('error2').style.color = 'Red';
    }
    else {
        let check1 = document.getElementById("error1").innerHTML = 'Array have ' + arr1.length + ' elements!';
        document.getElementById("error1").style.color = 'Green';
        let check2 = document.getElementById("error2").innerHTML = 'Good job';
        document.getElementById("error2").style.color = 'Green';
    }
    for (let i = 0; i < 9; i++) {
        if (str.charAt(i) == 1)
            arr2.push(arr1[i]);
    }
    document.getElementById('result').innerHTML = "Answer : " + arr2.join(', ');
}

