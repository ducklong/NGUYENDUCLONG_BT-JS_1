

// bai1
// Nhập: tạo các biến inPut1 inPut2 inPut3 với các giá trị bất kì
// Xử lí: với các sắp xếp biến sau 123 132 213 231 321 312 nghĩa là 3 số nguyên thì
// chỉ có 6 trường hợp sắp xếp từ lớn đến nhỏ nên ta sẽ tạo các điều kiện
// với giá trị như trên
// xuất: xuất các giá trị đã được định sẵn nếu người dùng nhập vào như trên

var inPut1 = 19112312;
var inPut2 = 11123123;
var inPut3 = 13129123;

if (inPut1 == inPut2 && inPut1 == inPut3 && inPut2 == inPut3) {
  console.log(inPut1 + "--->" + inPut2 + "--->" + inPut3);
} else if (inPut1 > inPut2 && inPut1 > inPut3 && inPut2 > inPut3) {
  console.log(inPut3 + "--->" + inPut2 + "--->" + inPut1);
} else if (inPut3 > inPut1 && inPut3 > inPut2 && inPut2 > inPut1) {
  console.log(inPut1 + "--->" + inPut2 + "--->" + inPut3);
} else if (inPut1 > inPut2 && inPut1 > inPut3 && inPut3 > inPut2) {
  console.log(inPut2 + "--->" + inPut3 + "--->" + inPut1);
} else if (inPut3 > inPut2 && inPut3 > inPut1 && inPut1 > inPut2) {
  console.log(inPut2 + "--->" + inPut1 + "--->" + inPut3);
} else if (inPut2 > inPut1 && inPut2 > inPut3 && inPut3 > inPut1) {
  console.log(inPut1 + "--->" + inPut3 + "--->" + inPut2);
} else if (inPut2 > inPut1 && inPut2 > inPut3 && inPut1 > inPut3) {
  console.log(inPut3 + "--->" + inPut1 + "--->" + inPut2);
}

// bai 2
// Nhập: Nếu là 1 trong 4 người trên thì hãy nhập số 1 ko thì nhập 0 để xác
// định danh tính.
// Xử lí: ở đây 1 nghĩa là phải 0 nghĩa là ko phải
// xuất: biến có giá trị = 1 để chào đúng người

var dad = 1;
var mom = 0;
var brother = 0;
var sister = 0;

if (dad == 0) {
  console.log("Hello Dady");
} else if (mom == 0) {
  console.log("Hello Mommy");
} else if (brother == 1) {
  console.log("Hi Brooo");
} else if (sister == 0) {
  console.log("Good morning Sister");
}

// bai 3
// Nhập:tạo các biến stt1 stt2 stt3 nhập số bất kì
// xủ lí: cho các biến đã tạo chia lấy dư với 2 nếu phần dư = 0 nghĩa là số đó chẵn
// còn nếu phần dư ko = 0 nghĩa là số lẻ
// xuất: kết quả số chẵn số lẻ

var stt1 = 16;
var stt2 = 116;
var stt3 = 133;
if (stt1 % 2 == 0 && stt2 % 2 == 0 && stt3 % 2 == 0) {
  console.log("Số " + stt1 + " là số chẵn");
  console.log("Số " + stt2 + " là số chẵn");
  console.log("Số " + stt3 + " là số chẵn");
} else if (stt1 % 2 !== 0 && stt2 % 2 !== 0 && stt3 % 2 !== 0) {
  console.log("Số " + stt1 + " là số lẻ");
  console.log("Số " + stt2 + " là số lẻ");
  console.log("Số " + stt3 + " là số lẻ");
} else if (stt1 % 2 == 0 && stt2 % 2 !== 0 && stt3 % 2 !== 0) {
  console.log("Số " + stt1 + " là số chẵn");
  console.log("Số " + stt2 + " là số lẻ");
  console.log("Số " + stt3 + " là số lẻ");
} else if (stt1 % 2 == 0 && stt2 % 2 == 0 && stt3 % 2 !== 0) {
  console.log("Số " + stt1 + " là số chẵn");
  console.log("Số " + stt2 + " là số chẵn");
  console.log("Số " + stt3 + " là số lẻ");
} else if (stt1 % 2 !== 0 && stt2 % 2 !== 0 && stt3 % 2 == 0) {
  console.log("Số " + stt1 + " là số lẻ");
  console.log("Số " + stt2 + " là số lẻ");
  console.log("Số " + stt3 + " là số chẵn");
} else if (stt1 % 2 !== 0 && stt2 % 2 == 0 && stt3 % 2 !== 0) {
  console.log("Số " + stt1 + " là số lẻ");
  console.log("Số " + stt2 + " là số chẵn");
  console.log("Số " + stt3 + " là số lẻ");
} else if (stt1 % 2 == 0 && stt2 % 2 !== 0 && stt3 % 2 == 0) {
  console.log("Số " + stt1 + " là số chẵn");
  console.log("Số " + stt2 + " là số lẻ");
  console.log("Số " + stt3 + " là số chẵn");
} else if (stt1 % 2 !== 0 && stt2 % 2 == 0 && stt3 % 2 == 0) {
  console.log("Số " + stt1 + " là số lẻ");
  console.log("Số " + stt2 + " là số chẵn");
  console.log("Số " + stt3 + " là số chẵn");
}

// bài 4
// Nhập : tạo các biến a b c để người dùng nhập chiều dài các cạnh tam giác
// Xủ lí: tam giác sẽ cân nếu có 2 cạnh = nhau - sẽ đều nếu 3 cạnh bằng nhau
// sẽ vuông nếu bình phương cạnh dài nhất = tổng bình phương 2 cạnh còn lại
// sẽ là tam giác thường nếu k nằm vào các trườn hợp trên
// xuất: xuất kết quả tên tam giác

var a=169;
var b=12;
var c=5;
if(a==b &&a==c&&b==c){
console.log("Tam giác trên là tam giác đều ABC");
} else if(a==b&&a!==c){
    console.log("Tam giác trên là tam giác cân với đỉnh là C");
} else if(c==b&&c!==a){
    console.log("Tam giác trên là tam giác cân với đỉnh là A");
} else if(a==c&&a!==b){
    console.log("Tam giác trên là tam giác cân với đỉnh là B");
}else if(a*a==b*b+c*c){
    console.log("Tam giác trên là tam giác vuông");
}else if(a!==b&&a!==c&&b!==c){
    console.log("Tam giác trên là tam giác thường ABC ")
} 



