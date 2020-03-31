require('dotenv');
const noConfig = variable => {
    console.error(
        "Required environment variable '" +
            variable +
            "' is not set.\nTerminating."
    );
    process.exit(1);
    return '';
};

// Set the corresponding environment variables, or replace the values here before using it in your environment.
module.exports = {
    TITLE: 'Reality Thinking' || noConfig('TITLE'), // Required
    AUTHOR: 'Luis Martinez' || noConfig('AUTHOR'), // Required
    URL: 'https://luis.realitythinking.net' || noConfig('URL'), // Required
    EMAIL: 'mrluismartinezzz@gmail.com' || noConfig('EMAIL'), // Required
    DESCRIPTION: 'Invoking thoughts about reality' || noConfig('DESCRIPTION'), // Required
    FATHOMSITEID: 'FATHOMSITEID' || noConfig('FATHOMSITEID'), // Required
    DISQUSSHORTNAME: 'theendsciencemetaphysics' || noConfig('DISQUSSHORTNAME'), // Required
};
