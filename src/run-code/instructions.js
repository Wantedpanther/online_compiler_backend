const {join} = require('path')

const commandMap = (jobID, language) => {
    switch (language) {
        case 'cpp':
            return {
                compileCodeCommand: 'g++',
                compilationArgs: [
                    join(process.cwd(), `codes/${jobID}.cpp`),
                    '-o',
                    join(process.cwd(), `outputs/${jobID}.out`)
                ],
                executeCodeCommand: join(process.cwd(), `outputs/${jobID}.out`),
                outputExt: 'out',
                compilerInfoCommand: 'g++ --version'
            };
    }
}

const supportedLanguages = ['cpp'];

module.exports = {commandMap, supportedLanguages}