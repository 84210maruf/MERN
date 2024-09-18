import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/useEffectHook';
import UseContextHook from './Hooks/useContextHook';


createRoot(document.getElementById("root")).render(
    <StrictMode >

       <UseStateHook />
       <UseEffectHook />
       <UseContextHook />

    </StrictMode>
)