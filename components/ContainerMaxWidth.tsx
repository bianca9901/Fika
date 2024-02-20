import { ReactNode } from 'react';

export default function ContainerMaxWidth({ children }: { children: ReactNode }) {
  return (
    <div className=" mx-auto w-full max-w-screen-lg px-2">{children}</div>
  );
}