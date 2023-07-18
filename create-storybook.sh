#!/bin/sh

proceed='n'
directory='./src/components'

while [ $proceed != "y" ];
do
    echo ""
    echo -n "Component Name? "
    read component
    echo "\n---------------------------\n"
    echo "This will create the following files:\n
    ./src/components/${component}/
    ./src/components/${component}/${component}.jsx
    ./src/components/${component}/${component}.stories.mdx
    ./src/components/${component}/${component}.scss
    ./src/components/${component}/index.js\n"
    echo "And add the line 'export { ${component} } from './components/${component}/';' to the library package.\n"
    echo -n "is this correct? (y/n): "
    read proceed
done

mkdir "${directory}/${component}/"
touch "${directory}/${component}/${component}.jsx"
touch "${directory}/${component}/${component}.stories.mdx"
touch "${directory}/${component}/${component}.scss"
touch "${directory}/${component}/index.js"

echo "import React from 'react';\nimport PropTypes from 'prop-types';\nimport './${component}.scss'\n\nexport const ${component} = ({ className, ...props }) =>\n{\n\treturn (\n\t\t<div className={\`${component} \${ className !== undefined ? className : \"\" }\`}>\n\t\t\t${component} Initiated!\n\t\t</div>\n\t)\n}\n\n${component}.propTypes =\n{\n\t/**\n\t * Custom class name of Component\n\t */\n\tclassName: PropTypes.string,\n};\n\n${component}.defaultProps =\n{\n\tclassName: undefined,\n};" >> "${directory}/${component}/${component}.jsx"
echo "import { Canvas, Meta, Story, ArgsTable } from '@storybook/addon-docs'\nimport { ${component} } from './${component}';\n\nexport const Template = (args) => (\n\t<${component} { ...args } />\n);\n\n<Meta title='Components/${component}' component={ ${component} } />\n\n# ${component}\n\n...\n\n## Examples\n\n### Default\n\n...\n\n<Canvas>\n\t<Story\n\t\tname=\"Default\"\n\t\targs={{\n\t\t\t\n\t\t}}\n\t>\n\t\t{ Template.bind({}) }\n\t</Story>\n</Canvas>\n\n## API\n\n<ArgsTable of={ ${component} } />" >> "${directory}/${component}/${component}.stories.mdx"
echo ".${component}\n{\n\t\n}" >> "${directory}/${component}/${component}.scss"
echo "export * from './${component}';" >> "${directory}/${component}/index.js"
echo "export { ${component} } from './components/${component}/index.js';" >> "./src/components/index.js"
