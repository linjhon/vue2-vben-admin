// const shelljs = require('shelljs');
// const { exec } = shelljs;

// /**
//  * @description: 使git对文件名大小写敏感
//  */
// function ignoreCaseGit() {
//   exec('git config core.ignorecase false ');
// }
// ignoreCaseGit();

// 安装之前先行删除image-webpack-loader,防止yarn 安装失败

// const { join } = require('path');

// const pkg = require('../../package.json');
// const { writeFileSync } = require('fs');

// function deleteDep() {
//   delete pkg.devDependencies['image-webpack-loader'];

//   writeFileSync(join(process.cwd(), 'package.json'), JSON.stringify(pkg, null, 2), {
//     encoding: 'utf8',
//   });
// }
// deleteDep();
