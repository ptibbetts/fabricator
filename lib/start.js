const execa = require('execa');
const Listr = require('listr');

const tasks = new Listr([
    {
        message: 'Install dependencies',
        task: () => execa('npm', ['install'])
    },
    {
        message: 'Serve Fabricator',
        task: () => execa('gulp', ['--dev'])
    }
]);

tasks.run().catch(err => {
    console.error(err);
});
