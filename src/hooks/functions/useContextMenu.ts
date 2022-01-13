import { onUnmounted, getCurrentInstance } from 'compatible-vue';
import { createContextMenu, offContextMenu } from '@/components/context-menu';
export type { ContextMenuItem } from '@/components/context-menu';
export function useContextMenu(authRemove = true) {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      offContextMenu();
    });
  }
  return [createContextMenu, offContextMenu];
}
