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

// archive.glob('**/*', {
//   cwd: './root/dist',
//   dot: true // include hidden files
// });

archive.directory('./root/dist', 'root');
archive.directory('./root/INF/META-INF', 'root/META-INF');
archive.directory('./root/INF/WEB-INF', 'root/WEB-INF');

archive.directory('./WebRTCAppEE', 'WebRTCAppEE');

// Create the build directory if it doesn't exist
if (!fs.existsSync('./.build')) {
  fs.mkdirSync('./.build');
}

archive.finalize();

