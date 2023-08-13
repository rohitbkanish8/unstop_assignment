import { createContext, useMemo, useState } from 'react';
import './App.css';
import Layout from './components/layout';
import Assessment from './screens/assessment';

export const LayoutContext = createContext()

function App() {
  const [viewToggle, setViewToggle] = useState(true)
  const [drawer, setDrawer] = useState(false)

  const LayoutContextValue = useMemo(
    () => ({
      viewToggle,
      setViewToggle,
      drawer,
      setDrawer
    }),
    [
      viewToggle,
      setViewToggle,
      drawer,
      setDrawer
    ]
  );

  return (
    <LayoutContext.Provider value={LayoutContextValue}>
      <Layout>
        <Assessment />
      </Layout>
    </LayoutContext.Provider>
  );
}

export default App;
