import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './constant';
import { Loader, SidebarLayout } from './components';

const Contact = lazy(() => import('./components/contacts'));
const Chart = lazy(() => import('./components/chart'));

function App() {
  return (
    <>
      <BrowserRouter>
        <SidebarLayout />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={PATHS.contact} element={<Contact />} />
            <Route path={PATHS.chart} element={<Chart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
