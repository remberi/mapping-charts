/*
 * @Description: 
 * @Author: jiangjie
 * @Date: 2022-08-26 11:23:01
 * @LastEditTime: 2022-08-26 13:48:33
 * @LastEditors: jiangjie
 * @Reference: 
 */
import React from 'react'

import MappingCharts from 'mapping-charts'
import 'mapping-charts/dist/index.css'

const App = () => {
  const list  = [
    {
      list:[
        {name:"A1",width:40,height:20,color:'',target:'B2',start:'bottom',end:'top'},
        {name:"A2",width:40,height:20,color:'',target:'B3',start:'bottom',end:'top'},
        {name:"A3",width:60,height:20,color:'',target:'B4',start:'bottom',end:'top'},
        {name:"A4",width:80,height:20,color:'',target:'B5',start:'bottom',end:'top'},
        {name:"A5",width:80,height:20,color:'',target:'B6',start:'bottom',end:'top'},
        {name:"A6",width:180,height:20,color:'',target:'B7',start:'bottom',end:'top'},
        {name:"A7",width:80,height:20,color:'',target:'',start:'bottom',end:'top'},
        {name:"A8",width:80,height:20,color:'',target:'',start:'bottom',end:'top'}
      ],
      title:"样本一",
      distance:0,
      gap:0,
    },
    {
      list:[
        {name:"B1",width:40,height:20,color:'green',target:'',start:'',end:''},
        {name:"B2",width:40,height:20,color:'black',target:'',start:'',end:''},
        {name:"B3",width:60,height:20,color:'blue',target:'',start:'',end:''},
        {name:"B4",width:80,height:20,color:'red',target:'',start:'',end:''},
        {name:"B5",width:180,height:20,color:'yellow',target:'',start:'',end:''},
        {name:"B6",width:80,height:20,color:'red',target:'',start:'',end:''},
        {name:"B7",width:180,height:20,color:'red',target:'',start:'',end:''},
        {name:"B8",width:80,height:20,color:'red',target:'',start:'',end:''},
      ],
      title:"样本二",
      distance:0,
      gap:100,
    },
    {
      list:[
        {name:"C1",width:40,height:20,color:'green',target:'B2',start:'top',end:'bottom'},
        {name:"C2",width:40,height:20,color:'black',target:'',start:'',end:''},
        {name:"C3",width:60,height:20,color:'blue',target:'',start:'',end:''},
        {name:"C4",width:80,height:20,color:'red',target:'',start:'',end:''},
        {name:"C5",width:180,height:20,color:'yellow',target:'',start:'',end:''},
        {name:"C6",width:80,height:20,color:'red',target:'',start:'',end:''},
        {name:"C7",width:180,height:20,color:'red',target:'',start:'',end:''},
        {name:"C8",width:80,height:20,color:'red',target:'',start:'',end:''},
      ],
      title:"样本三",
      distance:0,
      gap:200,
    }
  ];
  return <MappingCharts elements={list}  />
}

export default App
