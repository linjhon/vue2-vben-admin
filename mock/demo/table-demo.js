const ResultUtil = require('../_util/resultUtil');
const Mock = require('mockjs');

const demoList = Mock.mock({
  'items|60': [
    {
      id: '@id',
      beginTime: '@datetime',
      endTime: '@datetime',
      address: '@city()',
      name: '@cname()',
      'no|100000-10000000': 100000,
      'status|1': ['正常', '启用', '停用'],
    },
  ],
});

module.exports = {
  'GET /table/getDemoList 500': ({ query }) => {
    const { page = 1, pageSize = 20 } = query;
    const demoListItems = demoList.items;
    const pageData = ResultUtil.pagination(page, pageSize, demoListItems);
    return ResultUtil.pageSuccess(pageData, demoListItems.length);
  },
};
