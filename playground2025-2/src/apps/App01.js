import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';
<<<<<<< HEAD:playground/src/apps/App01.js
import { Tales } from '../plays/play1/components/Tales';

//../plays/play01/components
=======
import {Helloworld} from "../plays/play01/components/helloworld.js";
>>>>>>> main:playground2025-2/src/apps/App01.js

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App01_01() {

  return (
    <>
<<<<<<< HEAD:playground/src/apps/App01.js
    <Tales/>
=======
    <Helloworld/>
>>>>>>> main:playground2025-2/src/apps/App01.js
    </>
  );}

export function App01_02() {

  return (
    <>
<<<<<<< HEAD:playground/src/apps/App01.js
    
=======
    <Helloworld/>
>>>>>>> main:playground2025-2/src/apps/App01.js
    </>
  );}

export function App01_03() {

  return (
    <>
    <Helloworld/>
    </>
  );}

