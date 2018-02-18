/* configobject 
    {
        name: 'border-size',
        value: 0,
        hoverValue: 0,
        getStyleAsString: () => {
            return `border-size: ${this.value}px;`
        }
    }
 */

export const DivConfig = {
    borderWidth: {
        name: 'border-width',
        value: 1,
        hoverValue: 0,
        isNumeric: true,
        getStyle: (object) => {
            return `${object.value}px`;
        }
    },
    borderRadius: {
        name: 'border-radius',
        value: 0,
        hoverValue: 0,
        getStyle: (object) => {
            return `${object.value}px`;
        }
    },
    borderColor: {
        name: 'border-color',
        value: 'violet',
        hoverValue: '#aaa',
        getStyle: (object) => {
            return `${object.value}`;
        }
    }
};