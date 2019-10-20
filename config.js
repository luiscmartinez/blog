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
    AUTHOR: 'The End Science' || noConfig('AUTHOR'), // Required
    URL: 'https://www.theendsciencemetaphysics.com' || noConfig('URL'), // Required
    EMAIL: 'mrluismartinezzz@gmail.com' || noConfig('EMAIL'), // Required
    DESCRIPTION: 'blog posts about Metaphysics' || noConfig('DESCRIPTION'), // Required
    FATHOMSITEID: 'FATHOMSITEID' || noConfig('FATHOMSITEID'), // Required
    DISQUSSHORTNAME: 'DISQUSSHORTNAME' || noConfig('DISQUSSHORTNAME'), // Required
};
