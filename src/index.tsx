/*
 * @Description: 样本对比图
 * @Author: jiangjie
 * @Date: 2022-08-25 09:40:09
 * @LastEditTime: 2022-08-26 16:47:20
 * @LastEditors: jiangjie
 * @Reference:
 */
import React, { useEffect } from 'react'
import LeaderLine from 'leader-line-new'
import styles from './styles.module.css'

// 单个片段
interface Item {
  name: string // 片段名称
  width: number | 100 // 片段宽度
  height: number | 20 // 片段高度
  color: string // 片段背景色
  target: string // 映射到的字段
  start: string // 线条开始位置
  end: string // 线条截止位置
}

// 整条元素
interface Element {
  list: Array<Item>
  distance: number // 间距
  title: string // 标题
  gap: number | 100 // 每个样本之间的间距
}

// 全部集合
interface MappingChartsProps {
  elements: Array<Element> // 定义需要展示的元素数据
}

/**
 * @description: 查找目标元素在数组中的位置
 * @param {Array} list
 * @param {string} target
 * @return {*}
 */
function filterPos(elements: Array<Element>, target: string) {
  let partOne, partTwo
  for (let j = 0; j < elements.length; j++) {
    const element = elements[j]
    if (partTwo) break
    partOne = j
    for (let p = 0; p < element.list.length; p++) {
      const item = element.list[p]
      if (item.name === target) {
        partTwo = p
        break
      }
    }
  }
  return 'part_' + partOne + '_' + partTwo
}

/**
 * 随机生成RGB颜色
 * @returns
 */
const randomRgbColor = function () {
  var r = Math.floor(Math.random() * 256) // 随机生成256以内r值
  var g = Math.floor(Math.random() * 256) // 随机生成256以内g值
  var b = Math.floor(Math.random() * 256) // 随机生成256以内b值
  return `rgb(${r},${g},${b})` // 返回rgb(r,g,b)格式颜色
}

const partObject: any = {}

// 隐藏元素
const hide = () => {
  if (partObject) {
    console.log(partObject)
    for (const key of Object.keys(partObject)) {
      partObject[key].hide()
    }
  }
}
// 显示元素
const show = () => {
  if (partObject) {
    console.log(partObject)
    for (const key of Object.keys(partObject)) {
      partObject[key].show()
    }
  }
}

// 映射对比图
const MappingCharts = (props: MappingChartsProps) => {
  const { elements } = props

  useEffect(() => {
    function init() {
      try {
        if (elements && Array.isArray(elements)) {
          // console.log('待渲染数据:', elements)
          const ul = document.getElementById('mapping_part')
          for (let index = 0; index < elements.length; index++) {
            const element = elements[index]
            const li = document.createElement('li')
            const liDiv = document.createElement('div')
            li.className = 'part_' + index
            li.style.marginTop = element.gap + 'px'
            liDiv.className = 'part_box'
            let strBuffer = '<div>' + element.title + ':</div>'

            for (let k = 0; k < element.list.length; k++) {
              const item = element.list[k]
              const h = item.height ? item.height : 20
              const w = item.width ? item.width : 40
              const d = element.distance || 0
              const c = item.color ? item.color : randomRgbColor()
              const value =
                '<div id="part_' +
                index +
                '_' +
                k +
                '" style="height:' +
                h +
                'px;width:' +
                w +
                'px;margin:0 ' +
                d +
                'px;background:' +
                c +
                ';"><span>' +
                item.name +
                '</span></div>'
              // console.log("value",value)
              strBuffer += value
            }
            // console.log(strBuffer)
            liDiv.innerHTML = strBuffer
            li.appendChild(liDiv)
            // eslint-disable-next-line no-unused-expressions
            ul?.appendChild(li)
          }
        }

        setTimeout(function () {
          for (let j = 0; j < elements.length; j++) {
            const element = elements[j]
            for (let p = 0; p < element.list.length; p++) {
              const item = element.list[p]
              if (item.target !== '') {
                const pos = filterPos(elements, item.target)
                // console.log('item.target:' + item.target)
                // console.log('目标接节点:' + pos)
                partObject['item_' + j + '_' + p] = new LeaderLine(
                  document.getElementById('part_' + j + '_' + p + '')!,
                  document.getElementById(pos)!,
                  { hide: true }
                )
                if (item.start !== '' && item.end !== '') {
                  partObject['item_' + j + '_' + p].setOptions({
                    startSocket: item.start,
                    endSocket: item.end,
                    path: 'fluid'
                  })
                  partObject['item_' + j + '_' + p].show('draw', {
                    duration: 1000,
                    timing: [0.58, 0, 0.42, 1]
                  })
                }
              }
            }
          }
          console.log(partObject)
        }, 200)
      } catch (error) {
        console.log(error)
      }
    }
    init()
  }, [])

  return (
    <div className='mapping_charts'>
      <ul id='mapping_part' className={styles.mapping_part} />
    </div>
  )
}
export default MappingCharts
export { hide, show, partObject }
