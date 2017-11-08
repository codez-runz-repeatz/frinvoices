import colors from '../config/colors';

export const colourFromStatus = (colour = '') => {
    myobColor = '';  

    switch (colour) {
        case 'overdue':
            myobColor = colors.brandDanger;
            break;

            case 'paid':
                myobColor = colors.brandSuccess;
                break;

            case 'not paid':
                myobColor = colors.brandGrayBase;
                break;
        }

  return myobColor;  
}

export const iconFromStatus = (iconText = '') => {
    iconName = '';
    
    switch (iconText) {
        case 'invoice':
            iconName = 'ios-cash-outline';
            break;

            case 'quote':
                iconName = 'ios-cash-outline';
                break;

            case 'bill':
                iconName = 'ios-cash-outline';
                break;
        }

  return iconName;
};

