function News(tittle, content, day, view) {
    this.tittle = tittle;
    this.content = content;
    this.day = day;
    this.view = view;

    this.getTittle = function() {

        return this.tittle;
    }

    this.getContent = function() {

        return this.content;
    }

    this.getDay = function() {

        return this.day;
    }

    this.getView = function() {
        return this.view;
    }
}
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.find = find;
    this.toString = toString;
    this.append = append;
    this.remove = remove;
    this.findNewremove = findNewsremove;
    this.selectionSort = selectionSort;

    // Thêm 1 tin tức
    function append(element) {
        element = prompt("Thêm tin tức mới vào danh sách",'');
        this.dataStore[this.listSize++] = element;
    }

    // Tìm 1 tin tức
    function find(element) {
        element = prompt("nhập tiêu đề tin tức cần tìm",'');
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].getTittle() === element) {
                console.log('tiêu đề của bài viết là ' + listNews.dataStore[i].getTittle());
                console.log('nội dung của bài viết là ' + listNews.dataStore[i].getContent());
                console.log('ngày đăng của bài viết là ' + listNews.dataStore[i].getDay())
                console.log('số lượt xem của bài viết là ' + listNews.dataStore[i].getView());
                return;
            }
        }
        return console.log("không tìm thấy bài viết");
    }

    // Tìm tin tức cần xóa
    function findNewsremove(element) {
        element = prompt("nhập tiêu đề cần xóa", '');
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].getTittle() === element) {
                return i;
            }
        }
        return -1;
    }

    // Xóa tin tức
    function remove(element) {
        var foundAt = this.findNewremove(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    }

    //Sắp xếp danh sách và hiển thị
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
                if (this.dataStore[inner].getView() < this.dataStore[min].getView()) {
                    min = inner;
                }
            }
            swap(this.dataStore, outer, min);
            console.log(this.dataStore);
        }
    }

    // Hiển thị
    function toString() {
        return this.dataStore;
    }

}

var listNews = new List();

function addNews() {
    listNews.append();
    console.log(listNews.toString());
}

function addInfonew() {
    for (i = 0; i < listNews.listSize; i++){
        listNews.dataStore[i] = new News(prompt("nhập tiêu đề vào",''), prompt("nhập nội dung vào",''), prompt("nhập ngày đăng vào,",''), prompt("nhập số lượt xem vào",''));
        console.log('tiêu đề của bài viết là ' + listNews.dataStore[i].getTittle());
        console.log('nội dung của bài viết là ' + listNews.dataStore[i].getContent());
        console.log('ngày đăng của bài viết là ' + listNews.dataStore[i].getDay())
        console.log('số lượt xem của bài viết là ' + listNews.dataStore[i].getView());
    }
}

function readNews(element) {
    element = prompt("Nhập thứ tự của bài đăng, vui lòng nhập từ số 0",'');
    if (element <= listNews.dataStore.length - 1){
        console.log(listNews.dataStore[element].getTittle());
        console.log(listNews.dataStore[element].getDay());
        console.log(listNews.dataStore[element].getView());
        console.log(listNews.dataStore[element].getContent());
    }
    else {
        console.log("chưa có bài đăng này")
    }
}


function findNews() {
    listNews.find()
}

function removeNews() {
    listNews.remove()
}

function showListNew() {
    listNews.selectionSort();
}