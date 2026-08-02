const fs = require('fs/promises');
const path = require('path');

async function main() {

    const files = await fs.readdir("C:\\Users\\kg877\\testfolder");
    console.log("File Inside : ", files);
    // Output: [ 'ss.png', 'qr.jpg', 'fee.pdf' ]

    async function readextandmakefolder(fileinside) {
        for (let i = 0; i < fileinside.length; i++) {

            let fileExtension = path.extname(fileinside[i]);
            fileExtension = fileExtension.replace(".", "");

            await createfolder("C:\\Users\\kg877\\testfolder", fileExtension);
            const destinationPath = path.join("C:\\Users\\kg877\\testfolder", fileExtension, fileinside[i]);
            const sourcePath = path.join("C:\\Users\\kg877\\testfolder", fileinside[i]);
            await fs.rename(sourcePath, destinationPath);
        }

    }

    async function createfolder(baseDir, folderName) {
        const fullPath = path.join(baseDir, folderName);
        await fs.mkdir(fullPath, { recursive: true });
        console.log("folder created successfully: ", fullPath);
    }

    await readextandmakefolder(files);
}

main();