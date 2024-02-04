import { triggerServerCallback } from '@overextended/ox_lib/client';

export const serverNuiCallback = (event: string) => {
  RegisterNuiCallback(event, async (data: unknown, cb: (data: any) => void) => {
    const response = await triggerServerCallback<Promise<unknown>>(event, null, data);
    cb(response);
  });
};

export function SendTypedNUIMessage<T = any>(action: string, data: T) {
  SendNUIMessage({
    action,
    data,
  });
}
