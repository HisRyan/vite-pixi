import { fileURLToPath, URL } from 'node:url'

export const setVitealias = (aliasSet: IConfigSet.IAliasSet[]) => {
    const alias: any = {}
    aliasSet.forEach((config) => {
        alias[config.name] = fileURLToPath(
            new URL(`../../../${config.point}`, import.meta.url),
        )
    })
    return alias
}
