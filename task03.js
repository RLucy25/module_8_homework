/* 

������� 3.

���� ������. ���������� ������� � ������� ����������� �������. ��������, "Hello" -> "olleH".*/

function reverseStr(str) {

 return str.split("").reverse().join("");
}
console.log(reverseStr("Hello"));