import React, { useCallback } from "react";
import { Text, ActivityIndicator } from "react-native";
import { useMutation } from "react-query";
import { debounce } from "lodash";
import { SafeAreaView } from "react-native-safe-area-context";
import MasonryList from "react-native-masonry-list";

import { getGifs } from "./common/api";
import { Row, Col } from "../../components";
import { useTheme, TextInput } from "react-native-paper";

export const Home = () => {
	const { colors } = useTheme();
	const [isLoadingGIFs, setIsLoadingGIFs] = React.useState(false);
	const [text, setText] = React.useState("");
	const [images, setImages] = React.useState([]);
	const { mutate: search, data } = useMutation(
		"GIFS",
		(newText) => getGifs(newText),
		{
			onSuccess: (data, variables, context) => {
				setIsLoadingGIFs(false);
				setImages(
					data.map((el) => ({
						uri: el.images.preview_gif.url,
					}))
				);
			},
			onError: (error, variables, context) => {
				// An error happened!
				setIsLoadingGIFs(false);
				console.log(`ERR ${error.message}`);
			},
		}
	);
	const delaySeach = useCallback(debounce(search, 1000), []);
	const handleChange = (newText) => {
		setText(newText);
		setIsLoadingGIFs(true);
		delaySeach(newText);
	};
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Col mh={8} style={{ backgroundColor: colors.background }}>
				<TextInput
					mode="outlined"
					activeOutlineColor={colors.primaryThin}
					outlineColor={colors.primaryThin}
					placeholder="Search GIPHY"
					theme={{
						colors: { text: colors.primary, placeholder: colors.primaryLight },
					}}
					left={<TextInput.Icon name="magnify" color={colors.primarySoft} />}
					value={text}
					onChangeText={handleChange}
				/>
				{isLoadingGIFs ? (
					<Row fullCenter style={{ flex: 1 }}>
						<ActivityIndicator size="large" color={colors.primary} />
					</Row>
				) : !!images.length ? (
					<MasonryList
						images={images}
						backgroundColor={colors.background}
						// Version *2.14.0 update
						// onEndReached={() => {
						//     // add more images when scrolls reaches end
						// }}
					/>
				) : (
					<Row fullCenter style={{ flex: 1 }}>
						<Text style={{ color: colors.primary }}>No GIFs</Text>
					</Row>
				)}
			</Col>
		</SafeAreaView>
	);
};
