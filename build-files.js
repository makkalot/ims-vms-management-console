const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('./.build/build.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn(err);
  } else {
    throw err;
  }
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.glob('*', {
  cwd: './dist',
  dot: true // include hidden files
});

archive.directory('./INF/META-INF', 'META-INF');
archive.directory('./INF/WEB-INF', 'WEB-INF');

// Create the build directory if it doesn't exist
if (!fs.existsSync('./.build')) {
  fs.mkdirSync('./.build');
}

archive.finalize();

