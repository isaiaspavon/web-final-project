# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Instructions

To initialize on your individual VS Code, insert the following commands in your terminal:

> $ git clone https://github.com/isaiaspavon/web-final-project.git

> $ git init

> $ git remote add origin git@github.com:isaiaspavon/web-final-project.git

# Coding

To begin coding and make changes onto the project:

1. First, go to Miro and mark your task/feature into the "In progress" section (be as specific as possible as to prevent future merge conflicts).

2. Then in the terminal perform: 

$ git checkout -b <name-of-branch> 

You will make your changes in this branch and eventually merge back into the main branch.

3. Once you are finished with your feature: MAKE SURE TO SAVE (Command+S). To clarify your changes, perform: 

$ git status

 in your terminal to double check that your changes are ready to be staged and committed. 

4. Then, perform: 
$ git checkout main

then perform 

$ git merge <name-of-branch>

 then perform 
 
 $ git pull origin main
 
  and finally perform
  
  $ git push origin main
