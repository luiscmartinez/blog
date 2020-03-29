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
    TITLE: 'Metaphysics' || noConfig('TITLE'), // Required
    AUTHOR: 'Dr. Anthony Long' || noConfig('AUTHOR'), // Required
    URL: 'https://www.theendsciencemetaphysics.com' || noConfig('URL'), // Required
    EMAIL: 'drlong18@gmail.com' || noConfig('EMAIL'), // Required
    DESCRIPTION: 'Invoking thoughts about reality' || noConfig('DESCRIPTION'), // Required
    FATHOMSITEID: 'FATHOMSITEID' || noConfig('FATHOMSITEID'), // Required
    DISQUSSHORTNAME: 'theendsciencemetaphysics' || noConfig('DISQUSSHORTNAME'), // Required
};
