import { FC } from "react";

import { MDXComponents } from "mdx/types";
import { components } from "presentify";

import PresentationMDX from "@/assets/presentation.mdx";

const Presentation: FC = () => <PresentationMDX components={components as MDXComponents} />;

export default Presentation;
