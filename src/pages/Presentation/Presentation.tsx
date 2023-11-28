import PresentationMDX from "@/assets/presentation.mdx";
import { MDXComponents } from "mdx/types";
import { components } from "presentify";
import { FC } from "react";

const Presentation: FC = () => <PresentationMDX components={components as MDXComponents} />;

export default Presentation;
