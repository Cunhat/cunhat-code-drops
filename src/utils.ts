import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getDropsData = () => {
    let dir:Directories = new Map();
    
    const files = fs.readdirSync('./src/pages', { withFileTypes: true });

    // console.log(files[1].isDirectory());

    files.forEach((file) => {
        if (file.isDirectory()) {
            const filesInDir = fs.readdirSync(`./src/pages/${file.name}`);
            const filesInDirName = filesInDir.filter((file) => file.endsWith(".md"))
            let filesObg: Array<{name: string}> = [];
            filesInDirName.forEach((file) => {
                const obj = {
                    name: file,
                }
                filesObg.push(obj);
            });
            // console.log(filesInDirName);
            dir.set(file.name, {
                files: filesObg
            });

            
        }
        //console.log(dir);
    });

    return dir;


//     const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   // Get gray-matter data from each file.
//     const posts = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`pages/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//       subtitle: matterResult.data.subtitle,
//       slug: fileName.replace(".md", ""),
//     };
//   });

//   return posts;
}

// const path = [{
//     "Title": "dirName",
//     "files": [{
//         //       title: matterResult.data.title,
//         //       date: matterResult.data.date,
//         //       subtitle: matterResult.data.subtitle,
//         //       slug: fileName.replace(".md", ""),
//         //     }]
// }]

type Directories = Map<string,{
    files: Array<{
        name: string,
        // title: string,
        // date: string,
        // subtitle: string,
        // slug: string,
    }>,
}>

export const removeExtension = (fileName: string) => {
    return fileName.replace(".md", "");
}

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}