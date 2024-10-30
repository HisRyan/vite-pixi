/**
 * create by haojie.Li
 * Data: 2024/13/18 13:42:07
 * For: 项目别名设置
 */
import { setVitealias } from '../utils'

/**
 * @description 设置成可配置的路径
 * @important point是相对于根目录绝对路径
 * @warn 由于项目采用ts，增加配置需在tsconfig.json配置compilerOptions下面的path配置项
 */
const aliasSet: IConfigSet.IAliasSet[] = [
    {
        name: '@',
        point: 'src',
    },
    {
        name: '@c',
        point: 'src/components',
    },
]

export const alias = setVitealias(aliasSet)
