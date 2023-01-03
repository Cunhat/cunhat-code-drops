import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getDropsData = () => {
    let dir:Directories = new Map();
    
    const files = fs.readdirSync('./src/pages', { withFileTypes: true });

    
    files.forEach((file) => {
        if (file.isDirectory()) {

            const filesInDir = fs.readdirSync(`./src/pages/${file.name}`);
            const filesInDirName = filesInDir.filter((file) => file.endsWith(".md"))
            let filesObg: Array<{name: string, path: string}> = [];
           
            filesInDirName.forEach((elem) => {
                const obj = {
                    name: elem,
                    path: `/${file.name}/${removeExtension(elem)}`,
                }
                filesObg.push(obj);
            });
            
            dir.set(file.name, {
                files: filesObg,
            });

            
        }
        //console.log(dir);
    });

    return dir;

}


type Directories = Map<string,{
    files: Array<{
        name: string,
        path: string
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
export type Frontmatter = {
    title: string;
    description: string;
    layout: string;
    // image?: { src: string; alt: string };
    // dir?: "ltr" | "rtl";
    // ogLocale?: string;
    // lang?: KnownLanguageCode;
    // isMdx?: boolean;
  };
  