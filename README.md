# M6-W2-D2 Homework: React Redux Counter

This repository contains the Redux counter app as specified in the Module 6 Week 2 Day 2 homework.

## Setup and run

```bash
cd redux-counter
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## What's included

- **redux-counter/** – React app created with Create React App
- **src/index.js** – App component, Redux store, reducer, and `Provider` (no separate App.js)
- **src/Counter.js** – Counter component connected to Redux via `connect`, `mapStateToProps`, and `dispatch` for INCREMENT/DECREMENT
- **Redux flow:** `Provider` → `createStore(reducer)` → `connect(mapStateToProps)(Counter)` → buttons dispatch actions, reducer returns new state

## Tech stack

- React 18
- Redux + react-redux
- Bootstrap 5 (for styling)
