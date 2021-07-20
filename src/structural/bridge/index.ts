// Bridge pattern is about preferring composition over inheritance.
// Implementation details are pushed from a hierarchy to another object with a separate hierarchy.

// The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently".

import { DarkTheme, AquaTheme } from './theme';
import { About, Careers } from './web-page';

const darkTheme = new DarkTheme();
const aquaTheme = new AquaTheme();

const about = new About(darkTheme);
const careers = new Careers(aquaTheme);

console.log(`Page 1: ${about.getContent()}`); // "About page in Dark Black";
console.log(`Page 2: ${careers.getContent()}`); // "Careers page in Light Blue";
