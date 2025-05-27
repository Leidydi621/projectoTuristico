import fs from 'fs';
import path from 'path';

const readFiles = (paths: string[]): [string, string[]] => {
  const pathResolve = path.resolve(...paths);
  return [pathResolve, fs.readdirSync(pathResolve)];
};

/**
 * Loads and dynamically imports all modules from a specified directory, then executes their default exports
 * if they are functions, passing the provided object as an argument.
 *
 * @param pathPartial - The relative or absolute path to the directory containing the modules to load.
 * @param obj - An object to be passed as an argument to each module's default export function.
 * @returns A Promise that resolves when all modules have been processed.
 *
 * @remarks
 * - This function expects that each module in the directory exports a default function.
 * - If a module does not have a default export or the default export is not a function, it will be skipped.
 * - Errors during module loading or execution are caught and logged to the console.
 */
export default async function loadDynamicModules(
  paths: string[],
  obj: any,
) {
  try {
    
    const [pathResolve, listFiles] = readFiles(paths);
    for (const file of listFiles) {
    const fullPath = path.resolve(pathResolve, file);
    const exists = fs.existsSync(fullPath);

    if (!exists) continue;
    require(fullPath).default(obj);
    
  }
  } catch (error: any) {
    console.error(`❌:`, error.message);
    throw error
  }
}
