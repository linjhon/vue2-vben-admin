import store from '@/store/index';
// import { unref } from 'compatible-vue';
import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';

import {
  ProdItem,
  TodoItem,
  DplyItem,
  NewsItem,
  FileItem,
  AnnoItem,
} from '@/api/dashboard/model/wokbModel';
import { wokbAllDataApi } from '@/api/dashboard/wokb';
// export type ProductType = 'total' | 'publish' | 'unpublish' | 'exception';

@Module({ namespaced: true, name: 'workbench', dynamic: true, store })
class WokbStore extends VuexModule {
  prodList: ProdItem[] = [];
  todoList: TodoItem[] = [];
  todoTotal = 0;
  dplyList: DplyItem[] = [];
  newsList: NewsItem[] = [];
  fileList: FileItem[] = [];
  annoList: AnnoItem[] = [];

  get getProdList() {
    return this.prodList;
  }

  get getTodoList() {
    return this.todoList;
  }

  get getTodoTotal() {
    return this.todoTotal;
  }

  get getDplyList() {
    return this.dplyList;
  }

  get getNewsList() {
    return this.newsList;
  }

  get getFileList() {
    return this.fileList;
  }

  get getAnnoList() {
    return this.annoList;
  }

  @Mutation
  cmProdList(list: ProdItem[]): void {
    this.prodList = list;
  }

  @Mutation
  cmTodoList(list: TodoItem[], total: number): void {
    this.todoList = list;
    this.todoTotal = total || list.length;
  }

  @Mutation
  cmDplyList(list: DplyItem[]): void {
    this.dplyList = list;
  }

  @Mutation
  cmNewsList(list: NewsItem[]): void {
    this.newsList = list;
  }

  @Mutation
  cmFileList(list: FileItem[]): void {
    this.fileList = list;
  }

  @Mutation
  cmAnnoList(list: AnnoItem[]): void {
    this.annoList = list;
  }

  @Action
  public async loadAction(): Promise<void> {
    const {
      prodList,
      fileList,
      annoList,
      todoList,
      todoTotal,
      deployList,
      newsList,
    } = await wokbAllDataApi();
    this.cmProdList(prodList);
    this.cmFileList(fileList);
    this.cmAnnoList(annoList);
    this.cmTodoList(todoList, todoTotal);
    this.cmDplyList(deployList);
    this.cmNewsList(newsList);
  }
}
export { WokbStore };
export const wokbStore = getModule<WokbStore>(WokbStore);
