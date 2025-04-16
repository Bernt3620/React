import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';
<<<<<<< HEAD:playground/src/apps/App02.js
import { Greetings } from '../plays/play1/components/greetings';
import MyText from '../plays/play1/components/MyText';
=======
import { Helloworld } from '../plays/play02/components/helloworld';
>>>>>>> main:playground2025-1/src/apps/App02.js

//../plays/play02/components

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App02_01() {

  return (
    <>
<<<<<<< HEAD:playground/src/apps/App02.js
    <Greetings name="Hello from App02_01" />
=======
    <Helloworld/>
>>>>>>> main:playground2025-1/src/apps/App02.js
    </>
  );}

export function App02_02() {

  return (
    <>
    <MyText/>
    </>
  );}

export function App02_03() {

  return (
    <>
    </>
  );}

