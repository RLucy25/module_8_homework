/*������� 8.
�������� ������������ ������ Map. �������� ��� ����� � �������� � ������� ��� �������� � 
���� ����� � �, �������� � Y�.
����������� ��������� ������.*/

let myMap = new Map();
myMap.set('X', 'Y');
myMap.set(1, 'blou');
myMap.set(2, 'red');
myMap.set(3, 'yellow');
myMap.set(true, 'p');

for (let name of myMap.keys()) { //����� �������
	console.log(name);
}
myMap.forEach((value, key) => { //����� � ������� ���� �������� � ���� ����� � �, �������� � Y�
	console.log(`���� - ${key}, �������� - ${value}`);
});
