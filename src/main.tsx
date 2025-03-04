import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PostHogProvider } from 'posthog-js/react';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
};
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <PostHogProvider
          apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
          options={options}
        >
        <Suspense>
          <App />
        </Suspense>
        </PostHogProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
