function censor(inStr){
	for (idx in censoredWords){
		insTr = insTr.replace(censoredWords[idx],"*****");
	}
	for (idx in customCensoredWords){
		insTr = insTr.replace(customCensoredWords[idx],"*****");
	}
	return insTr;
}

function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWord(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWord;