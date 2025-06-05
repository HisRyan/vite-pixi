/*
 * @create: by haojie.Li
 * @Date: 2025-03-20 17:44:42
 * @For: 
 */
interface IUpload {
  action:string,
  accept:string,
}
class BasicUpload {
  action:string
  accept:string
  constructor(config:IUpload) {
      const {action,accept} = config
      this.action = action
      this.accept = accept
  }
}