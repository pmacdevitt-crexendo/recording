import type { FlowContext } from '@netsapiens/flow-sdk';
import { useEffect } from 'react';
import { useRemoteApp } from '@netsapiens/flow-sdk';

declare const __MF_NAME__: string;

export default function App(flowContext: FlowContext) {
  const { sdk } = useRemoteApp(flowContext, __MF_NAME__);

  useEffect(() => {
    // A declared button: Flow draws it in its own toolbar style.
    sdk.registerDynamicExtension({
      id: 'call-logs-recording',
      zone: 'table-toolbar',
      routes: [
        { pattern: '/manage/call-logs' },   // your own call logs
        { pattern: '/manage/*/call-logs' }, // call logs under a domain or user
      ],
      actions: [
        {
          id: 'recording',
          label: 'Recording',
          icon: 'material-symbols:radio-button-checked',
          tooltip: 'Recording',
          onClick: () => {
            // Replace this with what the button should actually do.
            alert('Recording button clicked');
          },
        },
      ],
    });
  }, [sdk]);

  return null; // headless: the button lives in the Call Logs toolbar
}
