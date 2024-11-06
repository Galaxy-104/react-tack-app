import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const listWrapper = style({
	display: 'flex',
	flexDirection: 'column',
	marginRight: vars.spacing.listSpacing,
	padding: vars.spacing.big2,
	minWidth: vars.minWidth.list,
	width: 'max-content',
	height: 'max-content',
	borderRadius: 10,
	backgroundColor: vars.color.list
})

export const name = style({
	fontSize: vars.fontSize.T3,
	marginBottom: vars.spacing.big2
})

export const header = style({
	display: 'flex',
	alignItems: 'center',
})

export const deleteButton = style({

})