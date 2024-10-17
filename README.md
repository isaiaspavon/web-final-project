<React + Vite>

<This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.>

<Currently, two official plugins are available:>

## Instructions

To initialize on your individual VS Code, insert the following commands in your terminal:

```
$ git clone https://github.com/isaiaspavon/web-final-project.git
```

```
$ git init
```

```
$ git remote add origin git@github.com:isaiaspavon/web-final-project.git
```

## Coding Workflow

To begin coding and make changes onto the project:

1. **Move task to "In Progress on Miro**
Go to Miro and mark your task/feature into the "In progress" section. Be as specific as possible as to prevent future merge conflicts.

2. **Create a new branch**
In your terminal run the following command:

```
$ git checkout -b <name-of-branch> 
```

You will make your changes in this branch and eventually merge back into the main branch.

3. **Verify and stage branch**

Once you are finished with your feature: MAKE SURE TO SAVE (Command+S). To clarify your changes, perform: 
```
$ git status
```

 in your terminal to double check that your changes are ready to be staged and committed. 

4. **Merging your branch**

After verifying, return to the main branch:

```
$ git checkout main
```

Merge your branch into the main branch:

```
$ git merge <name-of-branch>
```

Pull the latest changes from the main branch:
 
 ```
 $ git pull origin main
 ```
 
Finally push your changes:

```  
$ git push origin main
```
