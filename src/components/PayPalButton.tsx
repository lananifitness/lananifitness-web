import { useEffect, useRef, useId } from 'react';

const PAYPAL_CLIENT_ID =
  'BAAxSFvad03q_g06vtOdUSzqfliB2tuVCdf9UdkoG7gXKEf0Kkvat-550DfWf4M1ztCvS-Qc8KHULRhWDY';

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (opts: { hostedButtonId: string }) => {
        render: (selector: string) => void;
      };
    };
  }
}

let sdkPromise: Promise<void> | null = null;

function cargarSdkPaypal(): Promise<void> {
  if (window.paypal) {
    return Promise.resolve();
  }
  if (sdkPromise) {
    return sdkPromise;
  }

  sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src =
      'https://www.paypal.com/sdk/js?client-id=' +
      PAYPAL_CLIENT_ID +
      '&components=hosted-buttons&disable-funding=venmo&currency=EUR';
    script.onload = function () {
      resolve();
    };
    script.onerror = function () {
      reject(new Error('No se pudo cargar el SDK de PayPal'));
    };
    document.body.appendChild(script);
  });

  return sdkPromise;
}

interface Props {
  hostedButtonId: string;
}

export default function PayPalButton(props: Props) {
  const hostedButtonId = props.hostedButtonId;
  const rawId = useId();
  const containerId = 'paypal-container-' + rawId.replace(/:/g, '');
  const renderizado = useRef(false);

  useEffect(() => {
    renderizado.current = false;

    cargarSdkPaypal()
      .then(function () {
        if (renderizado.current) {
          return;
        }
        if (!window.paypal) {
          return;
        }
        renderizado.current = true;
        window.paypal.HostedButtons({ hostedButtonId: hostedButtonId }).render('#' + containerId);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, [hostedButtonId, containerId]);

  return <div id={containerId}></div>;
}
