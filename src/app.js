var server = require('./server').http,
    player = require('./player'),
    port = 8000,
    filesToLoad = [];

function printHelp(exitp) {
    process.stdout.write("\n_____________________________________________________________________________________ \n ");
    process.stdout.write("    superplay by Jalal Hejazi 2014 ( sourcecode: github.com/jalalhejazi/superplay )  ");
    process.stdout.write("\n_____________________________________________________________________________________ \n ");

    process.stdout.write("\n  Usage: superplay [options] --add path1 -add path2 ...\n");
    process.stdout.write("\n  Eks.1:   ./bin/superplay  --add ~/           --port 1234 \n");
    process.stdout.write("\n  Eks.2:   ./bin/superplay  --add ~/home/video --port 8888 \n");

    process.stdout.write("\n  Options:\n");
    process.stdout.write("          -a, --add     Add a directory or media file to serve\n");
    process.stdout.write("          -p, --port    Port to run the HTTP server on [" + port + "]\n");
    process.stdout.write("          --background  Background processes won't prompt for user input\n");
    process.stdout.write("          -h, --help    Print help\n\n");

    if (exitp) {
        process.exit(0);
    }
}

/* Parse command-line options, first two args are the process.
 */
for (var i = 2, argv = process.argv, len = argv.length; i < len; i++) {
    switch (argv[i]) {
        case '-h':
        case '--help':
            printHelp(true);
            break;
        case '-p':
        case '--port':
            var p = parseInt(argv[i + 1]);
            if (isFinite(p)) {
                port = p;
                i += 1;
            } else {
                process.stderr.write("Invalid port number: " + argv[i + 1] + "\n");
                process.exit(1);
            }
            break
        case '-a':
        case '--add':
            filesToLoad.push(argv[i + 1]);
            i += 1;
            break;
        case '--background':
            break; //used in shell-script wrapper, ignore
        default:
            process.stderr.write("Invalid option: " + argv[i] + "\n");
            printHelp();
            process.exit(1);
    }
}

/* Set up cleanup
 */
process.on('exit', function() {
    process.stdout.write("\nShutting down the server, ");
    if (typeof player.cleanup === 'function') {
        player.cleanup();
    }
    process.stdout.write("buh-bye!\n");
});

process.on('SIGINT', function() {
    process.exit(1);
});

/* And off we go ...
 */
if (typeof player.setup === 'function') {
    player.setup();
}

filesToLoad.forEach(player.addFile);

process.stdout.write("Firing up the superplay HTTP server on port " + port + "\n");
server.listen(port);

if (player.files.length === 0) {
    process.stderr.write("No media files served! \n");
    process.stderr.write("Add some media at the command-line: use cp or scp  \n");
}