// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
var commandSplit = command.split(' ');//разбиваем команду на массив из частей

switch (commandSplit[0]) { //определяем тип команды
	case 'ADD':

	var name = commandSplit[1]; //берем имя абонента
	var numbers = commandSplit[2].split(',')// создаем массив номеров
		if (phoneBook.hasOwnProperty([name])){//проверяем есть в книге такой абонент
			phoneBook[name] = phoneBook[name].concat(numbers);//если есть добавляем к его массиву номеров наш массив
		}else {
			phoneBook[name] = numbers;// иначе создаем свойство и присваиваем ему массив номеров
		}
	break;

	case 'REMOVE_PHONE':
	var numberDel = commandSplit[1];// удаляемый номер
	var keysPhoneBook = Object.keys(phoneBook);// получаем все имена книги
	for (var i = 0, i<keysPhoneBook, i++) {
		var key = keys[i];// имя текущего свойства
		var value = phoneBook[key];// значение текущего свойства - массив
		if (value.indexOf(numberDel)!== -1) {
			phoneBook[key].splice()
		} else {
			var indexNumberDel = phoneBook[key].indexOf(value);

		}
	}
	break;

	case 'SHOW':

	break;

	default:
	return 'command unknow';
}


};
