import TrackList from '@/components/TrackList'
import { colors, screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { FlatList, ScrollView, Text, View } from 'react-native'
import library from '@/assets/data/library.json';
import { useMemo } from 'react'
import { trackTitleFilter } from '@/helpers/filter'

const SongsScreen = () => {

	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs...',
			textColor: colors.text,
		}
	});

	const filteredTracks = useMemo(() => {
		if(!search) return library

		return library.filter(trackTitleFilter(search))
	}, [search])
	


	return (
		<View style={defaultStyles.container}>
			<FlatList
				data={[]}
				renderItem={() => null}
				contentInsetAdjustmentBehavior="automatic"
				style={{
					paddingHorizontal: screenPadding.horizontal
				}}
				ListHeaderComponent={
					<TrackList tracks={filteredTracks} scrollEnabled={false} />
				}
			/>
		</View>
	)
}

export default SongsScreen