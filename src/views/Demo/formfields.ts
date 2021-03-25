import { EleProps } from 'yp-frontend-library/lib/src/FormBuilder';

const formfields: EleProps[] = [
  {
    label: '调拨单号',
    name: 'transferOrderNo',
    type: 'INPUT'
  },
  {
    label: '天气好吗',
    name: 'createUserName',
    type: 'RADIO',
    dataList: [
      { value: '1', label: '是' },
      { value: '2', label: '否' }
    ]
  },
  {
    label: '直通采购单号',
    name: 'purchaseOrder',
    type: 'INPUT',
    wrapperCol: {
      span: 15
    },
    labelCol: {
      span: 9
    }
  },
  {
    label: '关联单号',
    name: 'requireOrderNo',
    type: 'INPUT'
  },
  {
    label: '是否红冲单',
    name: 'isReverseOrder',
    type: 'SELECT',
    dataList: [
      {
        value: 1,
        label: '是'
      },
      {
        value: 2,
        label: '否'
      }
    ]
  },
  {
    label: '日期',
    name: 'date',
    type: 'RANGE_PICKER_SHORT'
  }
];

export default formfields;
