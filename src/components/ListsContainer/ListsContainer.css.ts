import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";


export const listsContainer = style({
	height: 'max-content',
	display: 'flex',
	rowGap: vars.spacing.listSpacing,
	margin: vars.spacing.listSpacing
})