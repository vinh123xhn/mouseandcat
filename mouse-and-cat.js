function Rat(name, speed, weight) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;

    this.getNameRat = function() {

        return this.name;
    }

    this.getSpeedRat = function() {

        return this.speed;
    }

    this.getWeightRat = function() {

        return this.weight;
    }

    this.ratrun = function() {
    document.write("tốc độ của chuột là: "+ this.speed)
    }
}

function Cat(name, speed, rat) {
    this.name = name;
    this.speed = speed;
    this.rat = null;

    this.getSpeedCat = function () {
        return this.speed;
    }

    this.setRat = function (rat) {
        this.rat = rat;
    }

    this.getNameCat = function() {
        return this.name;
    }

    this.catrun = function() {
        document.write("tốc độ của mèo là: "+ this.speed)
    }

    this.catchrat = function (rat) {
        if (this.getSpeed() > this.rat.getSpeed()){
            return true;
        } else {
            return false;
        }
    }

    this.eatRat = function(rat) {
        if (this.catchrat){
            if (this.rat.getWeight() < 10){
                document.write("mum mum chuột gầy quá");
            } else {
                document.write("mum mum chuột béo quá");
            }
        } else {
            document.write("không được con chuột nào cả")
        }
    }

}

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.append = append;
    this.find = find;
    this.toString = toString;
    this.swap = swap;
    this.selectionSort = selectionSort;

    function append(element) {
        element = prompt("nhập thêm chuột vào",'');
        this.dataStore[this.listSize++] = element;
    }

    this.find = function (element) {
        element = prompt ("nhập tên chuột cần tìm",'');
        for (i = 0; i < this.listSize.length; i++){
            if (this.dataStore[i] === element){
                console.log("đã tìm thấy");
            }
        }
        console.log("không tìm thấy");
        return -1;
    }

    function toString() {
        return this.dataStore;
    }

    this.find = function (element) {
        element = prompt ("nhập tên chuột cần tìm",'');
        for (k = 0; k < this.dataStore.length; k++){
            if (this.dataStore[k].getNameRat() === element){
                return console.log("đã tìm thấy");
            }
        }
        return console.log("ko tìm thấy");

    }

    function swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    function selectionSort() {
        var min, temp;
        for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner].getWeightRat() < this.dataStore[min].getWeightRat()) {
                    min = inner;
                }
            }
            swap(this.dataStore, outer, min);
           console.log(this.dataStore);
        }
    }

}
var cat = new Cat('Tom', 30);
var listRat = new List();
function addchuot() {
    listRat.append();
    console.log(listRat.toString());
}
function addinforat() {
    for (i = 0; i < listRat.listSize; i++){
        listRat.dataStore[i] = new Rat(prompt("nhập tên vào",''), prompt("nhập tốc độ vào",''), prompt("nhập cân nặng vào",''));
        console.log('tên của chuột là' + listRat.dataStore[i].getNameRat());
        console.log('tốc độ của chuột là' + listRat.dataStore[i].getSpeedRat());
        console.log('cân nặng của chuột là' + listRat.dataStore[i].getWeightRat());
    }
}

    function sapxep() {
        listRat.selectionSort()
    }

    function showCat() {
        document.write(cat.getNameCat())
        document.write(cat.getSpeedCat())
    }
cat.setRat(listRat);

    function eatRat() {
        for (o = 0; o < listRat.dataStore.length; o++){
            if (cat.getSpeedCat() > listRat.dataStore[o].getSpeedRat()){
                console.log("an được 1 con chuột rồi");
                document.write('ăn được con chuột rồi' + "<br>");
                document.write('tên con chuột là' + listRat.dataStore[o].getNameRat() + "<br>");
                document.write('tốc độ con chuột là' + listRat.dataStore[o].getSpeedRat() + "<br>");
                document.write('cân nặng con chuột là' + listRat.dataStore[o].getWeightRat() + "<br>");
                document.write("<br>");
            }
            else {
                console.log("không ăn được con nào cả");
                document.write('không ăn được con chuột rồi' + "<br>");
                document.write('tên con chuột là' + listRat.dataStore[o].getNameRat() + "<br>");
                document.write('tốc độ con chuột là' + listRat.dataStore[o].getSpeedRat() + "<br>");
                document.write('cân nặng con chuột là' + listRat.dataStore[o].getWeightRat() + "<br>");
            }
        }
    }
    function findRat() {
        listRat.find()
    }