import sys
# python cc.py componentName componentType SassType
jsComponent = open(f'./src/components/{sys.argv[1]}.js', 'w')

componentArrow = f"""import React from 'react';

const {sys.argv[1]} = () => {{
    return <div className="{sys.argv[1].lower()}"></div>;
}};

export default {sys.argv[1]};
"""

componentClass = f"""import React, {{ Component }} from 'react';

export class {sys.argv[1]} extends Component {{
    render() {{
        return <div className="{sys.argv[1].lower()}"></div>;
    }}
}}

export default {sys.argv[1]};
"""

sass = f""" .{sys.argv[1].lower()} {{
    display: block;
    margin: 0rem 0rem 0rem 0rem;
}}
"""
sassFile = 0
if len(sys.argv) == 2 or sys.argv[2] == "-":
    jsComponent.write(componentArrow)

if len(sys.argv) > 2 and sys.argv[2] == "class":
    jsComponent.write(componentClass)

if len(sys.argv) > 3 and sys.argv[3] == "layout":
    sassFile = open(f'./src/assets/sass/layout/_{sys.argv[1].lower()}.scss', 'w')
    with open('./src/assets/sass/main.scss', 'r') as content_file:
        content = content_file.read()
    content.replace('//LAYOUTS//', f"""//LAYOUTS//
@import './layout/{sys.argv[1].lower()}';""")
    with open('./src/assets/sass/main.scss', 'w') as content_file:
        content_file.write(content)
else:
    sassFile = open(f'./src/assets/sass/components/_{sys.argv[1].lower()}.scss', 'w')
    with open('./src/assets/sass/main.scss', 'r') as content_file:
        content = content_file.read()
    content = content.replace('//COMPONENTS//', f"""//COMPONENTS//
@import './components/{sys.argv[1].lower()}';""")
    with open('./src/assets/sass/main.scss', 'w') as content_file:
        content_file.write(content)

sassFile.write(sass)
jsComponent.close()
sassFile.close()