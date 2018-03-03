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
    width: {
        name: 'width',
        value: 300,
        hoverValue: undefined,
        getStyle: object => `${object.value}px`
    },
    height: {
        name: 'height',
        value: 300,
        hoverValue: undefined,
        getStyle: object => `${object.value}px`
    },
    borderWidth: {
        name: 'border-width',
        value: 2,
        hoverValue: undefined,
        getStyle: object => `${object.value}px`
    },
    borderRadius: {
        name: 'border-radius',
        value: 0,
        hoverValue: undefined,
        getStyle: object => `${object.value}px`
    },
    borderColor: {
        name: 'border-color',
        value: {
            r: '0',
            g: '0',
            b: '0',
            a: '1',
        },
        hoverValue: undefined,
        getStyle: object => {
            const color = object.value;
            return `rgba(${color.r}, ${color.g},${color.b}, ${color.a})`;
        }
    },
    backgroundColor: {
        name: 'background-color',
        value: {
            r: '183',
            g: '193',
            b: '222',
            a: '1',
        },
        hoverValue: undefined,
        getStyle: object => {
            const color = object.value;
            return `rgba(${color.r}, ${color.g},${color.b}, ${color.a})`;
        }
    },
    borderStyle: {
        name: 'border-style',
        value: 'solid',
        hoverValue: undefined,
        getStyle: object => object.value
    }
};