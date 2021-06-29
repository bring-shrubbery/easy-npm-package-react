/**
 * This is the index of the project. Default export from this file
 * can be imported from the published npm package like so:
 *
 * ```js
 * import PackageName from 'your-package-name';
 * ```
 *
 * And non-default exports can be imported like this:
 *
 * ```jss
 * import {functionName} from 'your-package-name';
 * ```
 *
 * Created by Antoni Silvestrovic @bring-shrubbery
 */

/**
 * Adds up all parameters.
 * @param ...params Any number of parameters to be summed up
 * @returns Sum of the parameters
 */
export const add = (...params: number[]) => {
  return params.reduce((prev, curr) => prev + curr, 0);
};
