const fileOperations = require('./fileOperations');

const generateJsonStructure = async() => {
    const json = await fileOperations.readJson('./en.json');
    const jsonKeys = Object.keys(json);
    const jsonValues = Object.values(json);
    let outputObj = {};
    jsonKeys.forEach((key, index2) => {
        const subKeys = key.split('.');

        console.log(subKeys);
        let localObj = outputObj;

        subKeys.forEach((subKey, index) => {
            if(index === 0){
                if(!(subKey in outputObj)){
                    localObj[subKey] = {};
                }
                localObj = outputObj[subKey];
            }
            else if(index !== subKeys.length-1){
                if(!(subKey in localObj)){
                    localObj[subKey] = {};
                }
                localObj = localObj[subKey];
            }
            else{
                if(!(subKey in localObj)){
                    localObj[subKey] = jsonValues[index2];
                }
            }
        });
    });
    await fileOperations.writeToJson('./output-en.json', outputObj);
}

generateJsonStructure();
