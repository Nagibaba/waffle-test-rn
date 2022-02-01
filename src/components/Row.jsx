import React from "react";
import { View } from "react-native";

import { useTheme } from "react-native-paper";
import { generateSpacing, spacingPropTypes } from "../common/styleGenerator";

export const Row = ({
	mt = null,
	mr = null,
	mb = null,
	ml = null,
	mh = null,
	mv = null,

	pt = null,
	pr = null,
	pb = null,
	pl = null,
	ph = null,
	pv = null,
	debug = false,
	inline = false,
	justifyCenter = false,
	alignCenter = false,
	fullCenter = false,
	alignBetween = false,
	justifyBetween = false,
	style = {},
	children = null,
	...rest
}) => {
	const { colors } = useTheme();
	const spacing = generateSpacing({
		mt,
		mr,
		mb,
		ml,
		mh,
		mv,
		pt,
		pr,
		pb,
		pl,
		ph,
		pv,
	});
	const debuggerBG = debug ? { backgroundColor: colors.red } : {};
	const justifyCenterOrNot = justifyCenter ? { justifyContent: "center" } : {};
	const alignCenterOrNot = alignCenter ? { alignItems: "center" } : {};
	const fullCenterOrNot = fullCenter
		? { justifyContent: "center", alignItems: "center" }
		: {};
	const alignBetweenOrNot = alignBetween ? { alignItems: "space-between" } : {};
	const justifyBetweenOrNot = justifyBetween
		? { justifyContent: "space-between" }
		: {};

	return (
		<View
			style={{
				flex: inline ? null : 1,
				flexDirection: "row",
				...debuggerBG,
				...alignCenterOrNot,
				...justifyCenterOrNot,
				...fullCenterOrNot,
				...justifyBetweenOrNot,
				...alignBetweenOrNot,
				...spacing,
				...style,
			}}
			{...rest}
		>
			{children}
		</View>
	);
};

Row.propTypes = { ...spacingPropTypes };
