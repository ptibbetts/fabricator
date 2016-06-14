const execa = require('execa');
const Listr = require('listr');

const tasks = new Listr([
    {
        message: 'Install dependencies',
        task: () => execa('npm', ['install'])
    },
    {
        message: 'Build assets',
        task: () => execa('gulp')
    }
]);

tasks.run().catch(err => {
    console.error(err);
});
