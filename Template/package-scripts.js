const { series, crossEnv, concurrent, rimraf, runInNewWindow } = require('nps-utils');

module.exports = {
    scripts: {
        default: 'nps start',
        start: {
            script: 'node dist/index.js',
            description: 'Starts the builded app from the dist directory'
        },

        userorg:{
            script: 'node dist/index.js',
            description: 'Start the User Organization module'
        },

        config: {
            script: series(
                run('./commands/tsconfig.ts'),
                //runFast('./commands/ormconfig.ts')
            ),
            hiddenFromHelp: true
        },

        build: {
            script: series(
                'nps clean.dist',
                'nps transpile'
            ),
            description: 'Builds the app into the dist directory'
        },

        build_userorg: {
            script: series(
                'nps clean.dist_userorg',
                'nps transpile_userorg'
            ),
            description: 'Builds the app into the dist directory'
        },

        transpile: {
            script: `tsc --project ./tsconfig.json`,
            hiddenFromHelp: true
        },

        transpile_userorg: {
            script: `tsc --project ./tsconfig.json`,
            hiddenFromHelp: true
        },

        clean: {
            default: {
                script: series(
                    `nps banner.clean`,
                    `nps clean.dist`
                ),
                description: 'Deletes the ./dist folder'
            },
            dist: {
                script: rimraf('./dist'),
                hiddenFromHelp: true
            },
            dist_userorg: {
                script: rimraf('./dist_userorg'),
                hiddenFromHelp: true
            }
        },
    }
}

function run(path) {
    return `ts-node ${path}`;
}

function runFast(path) {
    return run(`-F ${path}`);
}