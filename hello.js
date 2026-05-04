const readline = require('readline');

function askUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const name = await askUser('Masukkan nama Anda: ');
  console.log(`Halo, ${name}! Selamat belajar JavaScript.`);
}

main();

