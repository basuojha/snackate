import React from 'react'
import ReactDOM from 'react-dom'

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'Welcome to React 🚀'),
    React.createElement('h2', {}, 'I am H2 hahahahah')
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'I am H1'),
    React.createElement('h2', {}, 'I am H2')
  ])
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
