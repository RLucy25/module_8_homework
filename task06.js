/* ������� 6.

��� ������. ���������, ���������� �� �������� � ������� � ������� ��������� true ��� false � �������. ���� ��� �� � ���� ����� ������� ���������� ���������, � ��� ����. ���������, ��� �� �������� � ������� ����������.*/

const a = [1, 1, 1, 1, 1, 1, 1];

function similarity(arr) {

let firstItem = arr[0];

  return arr.filter(elements => elements == firstItem).length != arr.length ? false : true;
}


console.log(similarity(a));
