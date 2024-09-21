import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import UseStateHook from './Hooks/useStateHook';
import UseEffectHook from './Hooks/useEffectHook';
import UseContextHook from './Hooks/ContextingUse/UseContextHook';
import NestedList from './Hooks/NestedList';
import UseRaducerHook from './Hooks/UseRaducerHook';


createRoot(document.getElementById("root")).render(
    <StrictMode >

       <UseStateHook />
       <UseEffectHook />
       <UseContextHook />
       <NestedList />
       <UseRaducerHook />

    </StrictMode>
)