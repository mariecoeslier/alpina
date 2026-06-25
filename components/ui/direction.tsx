"use client";

import * as React from "react";
import {
  DirectionProvider as DirectionProviderPrimitive,
  useDirection as useDirectionPrimitive,
} from "@radix-ui/react-direction";

type Direction = "ltr" | "rtl";

function DirectionProvider({
  dir,
  direction,
  children,
}: {
  children?: React.ReactNode;
  dir?: Direction;
  direction?: Direction;
}) {
  return (
    <DirectionProviderPrimitive dir={direction ?? dir ?? "ltr"}>
      {children}
    </DirectionProviderPrimitive>
  );
}

const useDirection = useDirectionPrimitive;

export { DirectionProvider, useDirection };
