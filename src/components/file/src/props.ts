import { PropOptions } from 'compatible-vue';
import { UploadResult } from './types';
export const publicProps = {
  // 只上传图片
  isUploadImg: {
    type: Boolean,
    default: true,
  } as PropOptions<boolean>,
};
export const basicProps = {
  helpText: {
    type: String,
    default: '',
  } as PropOptions<string>,
  // 文件最大多少MB
  maxSize: {
    type: Number,
    default: 0,
  } as PropOptions<number>,
  maxNumber: {
    type: Number,
    default: 0,
  } as PropOptions<number>,
  accept: {
    type: Array,
    default: () => {
      return [];
    },
  } as PropOptions<string[]>,
  multiple: {
    type: Boolean,
    default: true,
  } as PropOptions<boolean>,
  // // 只上传图片
  // isUploadImg: {
  //   type: Boolean,
  //   default: true,
  // } as PropOptions<boolean>,
  action: {
    type: [String, Function],
    default: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  } as PropOptions<string | Function>,
  ...publicProps,
};

export const priviewProps = {
  priviewList: {
    type: Array,
    default: () => {
      return [];
    },
  } as PropOptions<UploadResult[]>,
  ...publicProps,
  // isUploadImg: {
  //   type: Boolean,
  //   default: true,
  // } as PropOptions<boolean>,
};

export const uploadContainerProps = {
  value: {
    type: Array,
    // default: ''
  } as PropOptions<Array<UploadResult>>,
  ...basicProps,
  ...publicProps,
  // ...priviewProps,
};
