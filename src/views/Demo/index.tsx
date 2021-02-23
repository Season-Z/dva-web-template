/**
 * 页面使用示例
 *
 * [查看更多组件示例](http://test-frontend-library.ypsx-internal.com/)
 */
import React from 'react';
import { FormBuilder, CommonTable } from 'yp-frontend-library';
import formfields from './formfields';
import columns from './columns';
import { Props } from './interface';
import './index.less';

const defaultProps = {};

const Demo: React.FC<Props> = (userProps) => {
  const props = { ...defaultProps, ...userProps };

  console.log(props);
  return (
    <div className='Demo columnFlex'>
      <div className='wrapFormStyle'>
        <FormBuilder elements={formfields} />
      </div>
      <div className='flexFill wrapContent'>
        <CommonTable columns={columns} queryDataUrl='purchase.transfer.queryTransferOrderList' />
      </div>
    </div>
  );
};

export default Demo;
