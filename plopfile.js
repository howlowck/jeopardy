var mkdirp = require('mkdirp')
var fs = require('fs')

function addDirectory(path, fs) {
  mkdirp.sync(path)
  return true
}

function getSubPath(path) {
  path = path.trim()
  if (path === '') return ''
  return path + '/'
}

function required(varName) {
  return function (value) {
    if (/.+/.test(value)) {
      return true
    }
    return varName + ' is required'
  }
}

module.exports = function (plop) {
  plop.addHelper('subPath', function (text) {
    return getSubPath(text)
  })

  plop.addHelper('ifEqual', function (v1, v2, options) {
    if (v1 === v2) {
      return options.fn(this)
    }
    return options.inverse(this)
  })

  plop.setGenerator('Slice', {
    description: 'add a new Redux slice (in src/redux/slices)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the slice? (in src/redux/slices)',
        validate: required('name'),
      },
    ],
    actions: function (answers) {
      var actions = []
      var filePath = plop.renderString(
        'src/redux/slices/{{ camelCase name }}.ts',
        answers
      )

      if (!fs.existsSync(filePath)) {
        actions.push({
          type: 'add',
          path: filePath,
          templateFile: '.plop/reduxSlice.hbs',
        })
      }
      actions.push({
        type: 'modify',
        path: 'src/redux/reducer.ts',
        pattern: /(\/\/ Import Reducers Here)/gi,
        template:
          "import {{ camelCase name }} from './slices/{{ camelCase name }}'\n$1",
      })
      actions.push({
        type: 'modify',
        path: 'src/redux/reducer.ts',
        pattern: /(\/\/ Add Reducers Here)/gi,
        template: '{{ camelCase name }},\n  $1',
      })
      return actions
    },
  })
  plop.setGenerator('Epic', {
    description: 'add a new epic (in src/redux/epic)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the name of epic (also the name of the action that starts the epic)?',
        validate: required('name'),
      },
    ],
    actions: function (answers) {
      var actions = []
      actions.push({
        type: 'add',
        path: 'src/redux/epics/{{camelCase name}}Epic.ts',
        templateFile: '.plop/actionTriggeredEpic.hbs',
      })
      actions.push({
        type: 'modify',
        path: 'src/redux/epic.ts',
        pattern: /(\/\/ Import Epics Here)/gi,
        template:
          "import { {{camelCase name}}Epic } from './epics/{{camelCase name}}Epic'\n$1",
      })
      actions.push({
        type: 'modify',
        path: 'src/redux/epic.ts',
        pattern: /(\/\/ Add Epics Here)/gi,
        template: '{{camelCase name}}Epic,\n  $1',
      })
      return actions
    },
  })

  plop.setGenerator('Component', {
    description: 'add a component (in src/components/**)',
    prompts: [
      {
        type: 'input',
        name: 'subpath',
        message:
          'What is the sub path of the component? example: core, content, views, forms',
        default: '',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
        validate: required('name'),
      },
    ],
    actions: function (answers) {
      var actions = []
      actions.push(function (answers) {
        process.chdir(plop.getPlopfilePath())
        var fs = require('fs')
        var path = plop.renderString(
          'src/components/{{subPath subpath}}{{ properCase name }}',
          answers
        )
        addDirectory(path, fs)
        return plop.renderString(
          '{{name}} directory is created in src/component',
          answers
        )
      })

      actions.push({
        type: 'add',
        path:
          'src/components/{{subPath subpath}}{{ properCase name }}/index.tsx',
        templateFile: '.plop/functionalComponent.hbs',
      })

      actions.push({
        type: 'add',
        path:
          'src/components/{{subPath subpath}}{{ properCase name }}/{{ properCase name }}.css',
        templateFile: '.plop/styles.hbs',
      })

      return actions
    },
  })
}
