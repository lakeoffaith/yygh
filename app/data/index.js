
import {
  Dimensions
} from 'react-native'
const drakColor='#455A64'
const primaryColor='#607D8B'
const lightColor='#CFD8DC'
const textIcons='#FFFFFF'
const accentColor='#FFC107'
const primaryText='#212121'
const secondaryText='#727272'
const dividerColor='#BDBDBD'

export {drakColor,primaryColor,lightColor,textIcons,accentColor,primaryText,secondaryText,dividerColor}



const yyArray=[
    {date:'08-06',week:'周六',morning:'3元',afternoon:'3元',type:'普通'},
    {date:'08-07',week:'周日'},
    {date:'08-08',week:'周一'},
    {date:'08-09',week:'周二'},
    {date:'08-10',week:'周三'},
    {date:'08-11',week:'周四'},
    {date:'08-12',week:'周五'}
]

export {yyArray}

const departmentArray=[
  {key:1,name:'内科',children:[{name:'呼吸内科',key:'1'},{name:'消化内科',key:'2'},{name:"泌尿内科",key:3}]},
  {key:2,name:'外科',children:[{name:'普外科',key:'2'},{name:'骨科',key:'3'}]}

]
export {departmentArray}

// 56 is toolbar height
const viewH=Dimensions.get('window').height-56
export {viewH}
