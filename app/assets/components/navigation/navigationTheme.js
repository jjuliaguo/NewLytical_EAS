import {DefaultTheme} from '@react-navigation/native'
import colors from '../../config/colors'
//DefaultTheme is a json object, we want to overwrite
export default {
   ...DefaultTheme, //Copy all default thmen
   //over write colors
   colors:{
    ...DefaultTheme.colors,
    primay:colors.primary,
    background:colors.white
   }
}
