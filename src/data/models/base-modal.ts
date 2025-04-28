export interface IBaseModal {
  onShow: VoidFunction | (() => Promise<void>);
  onClose: VoidFunction | (() => Promise<void>);
}
