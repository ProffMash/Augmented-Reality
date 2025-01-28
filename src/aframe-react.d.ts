declare module 'aframe-react' {
    import { ComponentType } from 'react';
  
    export interface EntityProps {
      [key: string]: any;
    }
  
    export const Entity: ComponentType<EntityProps>;
    export const Scene: ComponentType<EntityProps>;
  }
  