## Search Tour

It was a lot of fun to implement this prototype.
I could use technologies that I am not using everyday at work, so I did learn something.

**Getting started**

Install the dependencies and serve the app

```
yarn && yarn serve
```

**Technologies chosen**

- **vanilla JS** with *custom elements*, and **CSS**
- **Rxjs** for the DOM events and a small Event bus bases on Subjects
- webpack to serve and build the app

**What I have implemented**

- Free Text search based on the tour **title**
- Filters on **price**, **rating** and **special offer**
- A filter **Reset** to cancel form and search results

I thought that as a user the minimum that I would like to have is a free text search and the possibility to refine the results with filters.

I have chosen to implement a fully working prototype instead of focusing on a specific part (e.g. performance, animation, UX optimisation etc.)

**If I had more time...**

I would have included:

- showing only the search bar and maybe show/hide the filters based on user interaction (with transition/animation)
- Double range slider for **Price** and **Rating**
- add an transition/animation when new results are attached to the DOM
- refactoring of the code to be more consistent across the custom elements (e.g. `innerHTML` and `createElement`)
