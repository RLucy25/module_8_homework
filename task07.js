������� 7.

��� ������. ����� ������� � ������� ���������� ������ � �������� ��������� � �������. ���� � ������� ���� ������� �������, �� �� ����������� � ��������� ��������. 

��� ���������� ������� ���������� ������, ��� ������ ����� ��������� �� ������ �����, �� �, ��������, �����, null � ��� �����.*/

const arr = [0, 1, 'x', 'y', 2, '2', 3, 4, null, 5]
let evenTest = 0;  //��� �������� �� ��������
let evenNumber = 0; //������
let oddNumber = 0;  // ��������
let noNumber= 0;  // �� �����
let zeroNumber = 0; // ����
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number'){ //�������� �� �����
    if (arr[i] === 0) { // �������� �� ����
       zeroNumber++; 
    }else 
    evenTest = arr[i] % 2;  //�������� �� ��������
      if (evenTest === 0 && arr[i]!=0){
		evenNumber++;       
	} else oddNumber++;		
  } else noNumber++			
}
console.log(`������ �����: ${evenNumber}, �������� �����: ${oddNumber}, �����: ${zeroNumber}, ����� � ������ ��������: ${noNumber}`)