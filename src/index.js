import { createProject } from './dom';
import { appObject } from './app';

appObject.projectControl();

if (localStorage.getItem("projectArrayStorage")) {
    appObject.projectArray = JSON.parse(localStorage.getItem("projectArrayStorage"));
    for (let q = 0; q < appObject.projectArray.length; q++){
      appObject.projectArray[q].toDoArray = JSON.parse(localStorage.getItem(`taskArrayStorage[${q}]`));
      for (let y = 0; y < appObject.projectArray[q].toDoArray.length; y++){
          appObject.projectArray[q].toDoArray[y] = JSON.parse(localStorage.getItem(`taskDetailsStorage[${q+y}]`));
      };
  };
};

createProject();