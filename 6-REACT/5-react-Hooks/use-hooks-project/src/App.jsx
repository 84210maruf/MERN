import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import UseStateHook from './Hooks/useStateHook';
import UseEffectHook from './Hooks/useEffectHook';
import UseContextHook from './Hooks/useContextHook';
import NestedList from './Hooks/NestedList';


createRoot(document.getElementById("root")).render(
    <StrictMode >

       <UseStateHook />
       <UseEffectHook />
       <UseContextHook />
       <NestedList />

    </StrictMode>
)