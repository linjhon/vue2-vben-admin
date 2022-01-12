const shelljs = require('shelljs');
const { exec } = shelljs;

/**
 * @description: 使git对文件名大小写敏感
 */
function ignoreCaseGit() {
  try {
    if (shell.which('git')) {
      exec('git config core.ignorecase false ');
    }
  } catch (error) {}
}
ignoreCaseGit();
/**
 * 使用cnpm 来安装image-webpack-loader
 */
// const shelljs = require('shelljs');
// const { exec } = shelljs;

// /**
//  * @description: 判断是否装了cnpm
//  */
// function isInstallCnpm() {
//   return new Promise((resolve) => {
//     const runSuccess = exec('cnpm -v').code === 0;
//     resolve(runSuccess);
//   });
// }
// /**
//  * @description: 尝试安装cnpm
//  */
// function tryInstallCnpm() {
//   return new Promise((resolve) => {
//     if (exec('npm install -g cnpm --registry=https://registry.npm.taobao.org').code === 0) {
//       resolve();
//     } else {
//       shell.echo('请安装 cnpm');
//       shell.exit(1);
//     }
//   });
// }
// /**
//  * @description: 安装插件
//  */
// async function installImageWebpack() {
//   const installCnpm = await isInstallCnpm();

//   if (!installCnpm) {
//     await tryInstallCnpm();
//     installImageWebpack();
//     return;
//   }
//   if (exec('cnpm install image-webpack-loader -D').code !== 0) {
//     //执行npm run build 命令
//     shell.echo('请安装 cnpm');
//     shell.exit(1);
//   }
// }

// /**
//  * @description: 使git对文件名大小写敏感
//  */
// function ignoreCaseGit() {
//   exec('git config core.ignorecase false ');
// }
// installImageWebpack();

// ignoreCaseGit();
