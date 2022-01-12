import { Ref } from 'compatible-vue';
import { Modal } from 'ant-design-vue/types/modal';
/**
 * @description: 弹窗对外暴露的方法
 */
export interface ModalInstance {
  setModalProps: (props: Partial<ModalProps>) => void;
  // injectModal: <T>(...T) => void;
}

export type GetTableFn = (modalInstance: ModalInstance) => void;
export interface ReturnMethods extends ModalInstance {
  openModal: (props: Partial<ModalProps> | boolean) => void;
  isFirstLoadRef: Ref<boolean>;
}
export type UseModalReturnType = [GetTableFn, ReturnMethods];
export interface ModalProps extends Modal {
  // 启用wrapper后 底部可以适当增加高度
  wrapperFooterOffset?: number;
  draggable?: boolean;

  // 是否可以进行全屏
  canFullscreen?: boolean;
  // 温馨提醒信息
  helpMessage: string | string[];

  // 是否使用modalWrapper
  useWrapper: boolean;

  loading: boolean;

  wrapperProps: Omit<ModalWrapperProps, 'loading'>;

  showOkBtn: boolean;
  showCancelBtn: boolean;
  closeFunc: () => Promise<any>;
}

export interface ModalWrapperProps {
  footerOffset?: number;
  loading: boolean;
  modalHeaderHeight: number;
  modalFooterHeight: number;
  minHeight: number;
  visible: boolean;
  fullScreen: boolean;
}
