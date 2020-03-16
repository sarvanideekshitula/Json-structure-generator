const fs = require('promise-fs');

const readJson = async (filename) =>{
	const jsonObj = await fs.readFile(filename, 'utf8');
	const notes = JSON.parse(jsonObj);
	return notes;
};

const writeToJson = async (filename, jsonContent) => {
	await fs.writeFile(filename, JSON.stringify(jsonContent));
};

module.exports = {readJson, writeToJson};