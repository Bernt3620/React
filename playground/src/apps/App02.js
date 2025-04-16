import { seedGenerator } from '../services/seido-helpers';
import Person from '../models/person';
import Animal from '../models/animal';
import { Greetings } from '../plays/play1/components/greetings';
import MyText from '../plays/play1/components/MyText';

//../plays/play02/components

//https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
//You will notice React in Dev mode mounts the components twice.
//This is by intention to allow you to ease debugging. E.g. you can catch unmounting problems

export function App02_01() {

  return (
    <>
    <Greetings name="Hello from App02_01" />
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

