# Practice Exercise
>
>please make sure you have nodejs installed on your system before continuing with this exercise

To run the server do the following:

- cd into server directory - `cd server`
- install dependencies - `npm install`
- run the server - `npm dev'

you can run the front end with `live serve` extension found in vscode

## REQUIREMENTS

1. convert the response data to json format
2. The backend has this line that returns the data
  
```bash

  resp.status(200).send({ message: "Voilor!", lessons: [4, 5, 5] });

```
  
change the lessons array to the following

```bash
  lessons: [
       {
          topic:'Module 1',
          id:1,
          description:'',
          outcomes:['','','']
        },
       {
          topic:'Module 2',
          id:1,
          description:'',
          outcomes:['','','']
        },
       {
          topic:'Module 3',
          id:1,
          description:'',
          outcomes:['','','']
        },
      ] 
```

3. displaying the lessons on the  `index.html` page using your DOM manipulation skills.
