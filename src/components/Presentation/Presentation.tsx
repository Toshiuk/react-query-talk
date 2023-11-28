import PresentationMDX from "@/assets/presentation.mdx";
import { MDXComponents } from "mdx/types";
import { components } from "presentify";

export const Presentation = () => <PresentationMDX components={components as MDXComponents} />;
