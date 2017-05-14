export const deliveryInputList = [{
            name: 'FIRST NAME',
            type: 'text',
            required: true,
            componentClass: 'input'
        }, {
            name: 'LAST NAME',
            type: 'text',
            required: true,
            componentClass: 'input'
        }, {
            name: 'E-MAIL',
            type: 'email',
            required: true,
            componentClass: 'input'
        }, {
            name: 'PHONE',
            type: 'text',
            required: false,
            componentClass: 'input'
        }, {
            name: 'ADDRESS',
            type: 'text',
            required: true,
            componentClass: 'input'
        }, {
            name: 'ADDRESS CONT.',
            type: 'text',
            required: false,
            componentClass: 'input'
        }, {
            name: 'ZIP CODE',
            type: 'text',
            required: true,
            componentClass: 'input'
        }, {
            name: 'CITY',
            type: 'text',
            required: true,
            componentClass: 'input'
        }, {
            name: 'STATE',
            type: 'text',
            required: true,
            componentClass: 'input'
        }, {
            name: 'Country',
            type: null,
            required: true,
            componentClass: 'select'
        }];

export const paymentInputList = ['CARD NUMBER', 'CARD HOLDER', 'CVC']