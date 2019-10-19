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
    TITLE: 'Metaphysices' || noConfig('TITLE'), // Required
    AUTHOR: 'The End Science' || noConfig('AUTHOR'), // Required
    URL: 'http://www.theendsciencemetaphysics.com' || noConfig('URL'), // Required
    EMAIL: 'mrhellboy1773@gmail.com' || noConfig('EMAIL'), // Required
    DESCRIPTION: 'blog posts about Metaphysices' || noConfig('DESCRIPTION'), // Required
    FATHOMSITEID: 'FATHOMSITEID' || noConfig('FATHOMSITEID'), // Required
    DISQUSSHORTNAME: 'DISQUSSHORTNAME' || noConfig('DISQUSSHORTNAME'), // Required
};
